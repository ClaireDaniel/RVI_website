function toggle_postcode_selection(postcode, zoom) {

  // If the area is not currently selected, add it to the list
  if(SELECTED.indexOf(postcode) < 0) {

    // Ensure we don't exceed the maximum allowed comparisons (MAX_SELECTIONS)
    if(SELECTED.length < MAX_SELECTIONS) { 
      SELECTED = SELECTED.concat([postcode]) 
    } else {
      // If the limit is reached, remove the oldest selection (FIFO) before adding the new one
      SELECTED.shift();
      SELECTED = SELECTED.slice(0);
      SELECTED = SELECTED.concat([postcode]) 
    }
  } else { 
    // If the area is already selected, remove it to deselect
    SELECTED.splice(SELECTED.indexOf(postcode),1);
    SELECTED = SELECTED.slice(0);
  }

  // Synchronize UI: Update map highlights and refresh the detailed info panel
  MAP.setProps({ layers: layer_postcode() });
  draw_info_panel(SELECTED);
}
