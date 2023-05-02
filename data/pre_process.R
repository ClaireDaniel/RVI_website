setwd("~/Projects/rental_vulnerability_index/data")

library(tidyverse)
library(sf)

data <- read_csv("data.csv") |>
  mutate(RVI16 = as.numeric(RVI16), RVI21 = as.numeric(RVI21)) |>
  select(postcode = POSTCODE,
         rental_vulnerability_index_2016 = RVI16,
         rental_vulnerability_index_2021 = RVI21)

boundaries <- st_read("non_abs.gpkg","POA_2021_AUST_GDA2020") |>
  select(postcode = POA_CODE_2021) |>
  mutate(postcode = as.numeric(postcode)) |>
  filter(!st_is_empty(geom))

tiles <- data |> left_join(boundaries) |>
  st_as_sf() |>
  st_transform('epsg:4326')

st_write(tiles,"tiles.geojson")
