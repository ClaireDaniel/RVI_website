# get data from 
# https://www.ausstats.abs.gov.au/ausstats/subscriber.nsf/0/4FB811FA48EECA7ACA25802C001432D0/$File/1270055003_poa_2016_aust_shape.zip and store at 2016/2016.shp
# https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/access-and-downloads/digital-boundary-files/POA_2021_AUST_GDA2020_SHP.zip and store at 2021/2021.shp
# https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/1270.0.55.003July%202011?OpenDocument

library(tidyverse)
library(sf)

data <- read_csv("combined.csv")

data_2011 <- data |> select(postcode, state, suburbs, ends_with("_2011"), ends_with("_common")) |> mutate(year = 2011, postcode = as.character(postcode)) |> rename_with(~str_remove(., '_2011$')) |> rename_with(~str_remove(., '_common$'))
data_2016 <- data |> select(postcode, state, suburbs, ends_with("_2016"), ends_with("_common")) |> mutate(year = 2016, postcode = as.character(postcode)) |> rename_with(~str_remove(., '_2016$')) |> rename_with(~str_remove(., '_common$'))
data_2021 <- data |> select(postcode, state, suburbs, ends_with("_2021"), ends_with("_common")) |> mutate(year = 2021, postcode = as.character(postcode)) |> rename_with(~str_remove(., '_2021$')) |> rename_with(~str_remove(., '_common$'))

geoms_2011 <- st_read("2011","2011") |> select(postcode = POA_CODE)
geoms_2016 <- st_read("2016","2016") |> select(postcode = POA_CODE16)
geoms_2021 <- st_read("2021","2021") |> select(postcode = POA_CODE21)

geoms_2011$bbox = split(geoms_2011, 1:nrow(geoms_2011)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()
geoms_2016$bbox = split(geoms_2016, 1:nrow(geoms_2016)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()
geoms_2021$bbox = split(geoms_2021, 1:nrow(geoms_2021)) %>% map(function(x){st_bbox(x) |> paste(collapse=",")}) |> unlist()

joined_2011 <- data_2011 |> left_join(geoms_2011) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")
joined_2016 <- data_2016 |> left_join(geoms_2016) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")
joined_2021 <- data_2021 |> left_join(geoms_2021) |> st_as_sf() |> filter(!st_is_empty(geometry)) |> st_transform("epsg:4326")

final <- rbind(joined_2011, joined_2016, joined_2021) |> mutate(id = 1:n())

final |> st_write("tiles.geojson")
final |> as_tibble() |> select(-geometry) |> jsonlite::write_json('data.json')
