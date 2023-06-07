function draw_info_panel (postcodes) {
  let info_panel = document.querySelector('#info-panel');
  info_panel.innerHTML = '';
  let info_panel_heading, info_panel_keys, info_panel_values;

  // Common Information 
  let info_panel_info;
  (info_panel_info = document.createElement('detail')).setAttribute('class','side-panel-sections info-panel-container');
  info_panel_info.setAttribute('id','info-panel-rentals');
  info_panel.appendChild(info_panel_info);
  postcodes.forEach(postcode => {
    (info_panel_keys = document.createElement('summary')).setAttribute('class','info-panel-column');
    info_panel_keys.innerText += `${postcode[0].postcode}` 
    info_panel_info.appendChild(info_panel_keys);
    (info_panel_values = document.createElement('div')).setAttribute('class','info-panel-column');
    postcode = DATA.filter(d => d.postcode == postcode && d.year == YEAR)
    if(postcode.length == 1) {
      console.log(postcode[0]);
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].postcode}</div>` 
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].suburbs}</div>` 
      info_panel_info.appendChild(info_panel_values);
    }
  });

  // Rental Indicators
  (info_panel_heading = document.createElement('div')).setAttribute('class','side-panel-heading');
  info_panel_heading.innerText = 'Rental Indicators';
  info_panel.appendChild(info_panel_heading);
  let info_panel_rentals;
  (info_panel_rentals = document.createElement('div')).setAttribute('class','side-panel-sections info-panel-container');
  info_panel_rentals.setAttribute('id','info-panel-rentals');
  info_panel.appendChild(info_panel_rentals);
  (info_panel_keys = document.createElement('div')).setAttribute('class','info-panel-column');
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Rental Vulnerality Index</div>` 
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Rental Stress</div>` 
  info_panel_keys.innerHTML += `<div class="info-panel-cell info-panel-key">Amount of Renters</div>` 
  info_panel_rentals.appendChild(info_panel_keys);
  postcodes.forEach(postcode => {
    (info_panel_values = document.createElement('div')).setAttribute('class','info-panel-column');
    postcode = DATA.filter(d => d.postcode == postcode && d.year == YEAR)
    if(postcode.length == 1) {
      console.log(postcode[0]);
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].rvi}</div>` 
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].rent_stress}</div>` 
      info_panel_values.innerHTML += `<div class="info-panel-cell">${postcode[0].total_persons/ postcode[0].total_renters} %</div>` 
      info_panel_rentals.appendChild(info_panel_values);
    }
  });

  // Dwelling Indicators


  // People Indicators


  info_panel.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
