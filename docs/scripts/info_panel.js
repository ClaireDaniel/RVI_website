function draw_info_panel (postcodes) {
  let info_panel = document.querySelector('#info-panel');
  info_panel.innerHTML = '';
  let info_panel_container;
  (info_panel_container = document.createElement('div')).setAttribute('class','side-panel-sections');
  info_panel_container.setAttribute('id','info-panel-container');
  info_panel.appendChild(info_panel_container);
  let  info_panel_keys;
  (info_panel_keys = document.createElement('div')).setAttribute('class','info-panel-column');
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Postcode</div>` 
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Population</div>` 
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Renters</div>` 
  info_panel_container.appendChild(info_panel_keys);
  postcodes.forEach(postcode => {
    let  info_panel_values;
    (info_panel_values = document.createElement('div')).setAttribute('class','info-panel-column');
    postcode = DATA.filter(d => d.postcode == postcode && d.year == YEAR)
    if(postcode.length == 1) {
      console.log(postcode[0]);
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].postcode}</div>` 
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].total_persons}</div>` 
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].total_renters}</div>` 
      info_panel_container.appendChild(info_panel_values);
    }
  });
  info_panel.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
