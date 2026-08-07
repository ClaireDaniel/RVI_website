# get data from 
# https://www.ausstats.abs.gov.au/ausstats/subscriber.nsf/0/4FB811FA48EECA7ACA25802C001432D0/$File/1270055003_poa_2016_aust_shape.zip and store at 2016/2016.shp
# https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files/POA_2021_AUST_GDA2020_SHP.zip and store at 2021/2021.shp
# https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/1270.0.55.003July%202011?OpenDocument

# ------------------------------------------------------------------------------
# 1. ENVIRONMENT SETUP
# ------------------------------------------------------------------------------
user_lib_path <- "/home/cdan0460/R/x86_64-pc-linux-gnu-library/4.3"

# Ensure the target library folder exists before attempting installation
dir.create(user_lib_path, recursive = TRUE)

# Create the user library folder if needed
dir.create(
  user_lib_path,
  recursive = TRUE,
  showWarnings = FALSE
)

# Packages required
packages <- c("fs", "tidyverse", "sf")

# Check which packages are already installed in this library
installed <- rownames(
  installed.packages(lib.loc = user_lib_path)
)

missing <- packages[!packages %in% installed]

# Install only missing packages
if (length(missing) > 0) {
  install.packages(missing, lib = user_lib_path)
} else {
  message("All required packages are already installed.")
}

# Load packages explicitly from the user library
library(tidyverse, lib.loc = user_lib_path)
library(sf, lib.loc = user_lib_path)



# ------------------------------------------------------------------------------
# 2. DATA PROCESSING
# ------------------------------------------------------------------------------

# Load the master CSV containing metrics for all years
data <- read_csv("input/combined.csv")

# --- Data Cleaning ---
# 1. Select only the ID, location names, year-specific columns, and shared 'common' columns.
# 2. Create a 'year' column to distinguish this slice after the final merge.
# 3. Standardize names: remove '_yyyy' and '_common' suffixes so columns match across years.

data_2011 <- data |> select(sa2_code, state, sa2_name, ends_with("_2011"), ends_with("_common")) |> mutate(year = 2011, sa2_code = as.character(sa2_code)) |> rename_with(~str_remove(., '_2011$')) |> rename_with(~str_remove(., '_common$'))
data_2016 <- data |> select(sa2_code, state, sa2_name, ends_with("_2016"), ends_with("_common")) |> mutate(year = 2016, sa2_code = as.character(sa2_code)) |> rename_with(~str_remove(., '_2016$')) |> rename_with(~str_remove(., '_common$'))
data_2021 <- data |> select(sa2_code, state, sa2_name, ends_with("_2021"), ends_with("_common")) |> mutate(year = 2021, sa2_code = as.character(sa2_code)) |> rename_with(~str_remove(., '_2021$')) |> rename_with(~str_remove(., '_common$'))

# ------------------------------------------------------------------------------
# 3. SPATIAL DATA PROCESSING
# ------------------------------------------------------------------------------

# Load shapefiles for each year. 
# Note: We rename the different ABS ID column names (SA2_MAIN11, etc.) to 'sa2_code' 
# so they can be joined with the attribute dataframes.

geoms_2011 <- st_read("input/2011.shp") |> select(sa2_code = SA2_MAIN11)
geoms_2016 <- st_read("input/2016.shp") |> select(sa2_code = SA2_MAIN16)
geoms_2021 <- st_read("input/2021.shp") |> select(sa2_code = SA2_CODE21)

# Bounding Box Generation:
# For each geometry, we calculate the bounding box (min/max X and Y).
# We collapse these into a single string (e.g., "140, -37, 141, -36") 
# which is often used by front-end map tiles to optimize rendering.
geoms_2011$bbox = split(geoms_2011, 1:nrow(geoms_2011)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()
geoms_2016$bbox = split(geoms_2016, 1:nrow(geoms_2016)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()
geoms_2021$bbox = split(geoms_2021, 1:nrow(geoms_2021)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()

# ------------------------------------------------------------------------------
# 4. MERGING & COORDINATE STANDARDIZATION
# ------------------------------------------------------------------------------
# For each year, we perform the following:
# 1. left_join: Merge the attribute data with the spatial polygons using 'sa2_code'.
# 2. st_as_sf: Ensure the resulting object is recognized as a spatial feature.
# 3. filter: Remove any records where the geometry is missing or empty.
# 4. st_transform: Convert the projection to EPSG:4326 (WGS 84). 
#    This is the standard GPS coordinate system used by Leaflet, Mapbox, and Google Maps.

joined_2011 <- data_2011 |> left_join(geoms_2011) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")
joined_2016 <- data_2016 |> left_join(geoms_2016) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")
joined_2021 <- data_2021 |> left_join(geoms_2021) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")

# Stack all three processed years into one master dataset and add a unique row ID for the database.
final <- rbind(joined_2011, joined_2016, joined_2021) |> mutate(id = 1:n())

# ------------------------------------------------------------------------------
# 5. FINAL EXPORT
# ------------------------------------------------------------------------------
# Export the spatial data to GeoJSON (used for rendering the map shapes)
final |> st_write("tiles.geojson")

# Export the attribute data to JSON (used for popups, tables, and data analysis)
# We remove the 'geometry' column here because the JSON file only needs the raw numbers.
final |> as_tibble() |> select(-geometry) |> jsonlite::write_json('data.json')
