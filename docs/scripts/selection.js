function toggle_postcode_selection(postcode, zoom) {
  if(SELECTED.indexOf(postcode) < 0) {
    if(SELECTED.length < MAX_SELECTIONS) { 
      SELECTED = SELECTED.concat([postcode]) 
    } else {
      SELECTED.shift();
      SELECTED = SELECTED.slice(0);
      SELECTED = SELECTED.concat([postcode]) 
    }
  } else { 
    SELECTED.splice(SELECTED.indexOf(postcode),1);
    SELECTED = SELECTED.slice(0);
  }
  MAP.setProps({ layers: layer_postcode() });
  draw_info_panel(SELECTED);
}
