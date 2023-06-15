function draw_info_panel (postcodes) {
  let info_panel_container = document.querySelector('#info-panel');
  let info_panel = document.createElement('div');
  let info_table = document.createElement('table');

  info_panel_container.innerHTML = '';
  info_panel.setAttribute('class','side-panel-sections');

  function add_row(d) {
    let info_row, info_cell_header, info_cell_value;
    let data_exists = data.map(f=>typeof(f[d.value]) != 'undefined').reduce((x,y) => { return(x || y) });
    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = d.value ? d.header : `<b>${d.header}</b>`;
    info_row.appendChild(info_cell_header);
    if(d.value) {
      for(i in data) {
        info_cell_value = document.createElement('td');
        if(d.chart) {
          info_cell_value.innerHTML=`<div class="chart"></div>`;
        } else {
          if(data_exists) {
            info_cell_value.innerHTML=`<span ${d.tooltip ? 'data-tooltip="'+data[i][d.tooltip]+'"' : '' }>${data[i][d.value]}</span>`;
            if(d.close) info_cell_value.innerHTML += `<span class='close' onClick="toggle_postcode_selection('${data[i].postcode}');">×</span>`;
          }
        }
        info_row.appendChild(info_cell_value);
      }
    }
    if((!d.value) || data_exists || d.chart) info_table.appendChild(info_row);
  }

  let data = DATA.filter(d => postcodes.indexOf(d.postcode) > -1 && d.year == YEAR)
  if(data.length > 0) {
    [
      {header: "Postcode", value: "postcode", tooltip: "suburbs", close: true},
      {header: "Rental Indicators"},
      {header: "Rental Vulnerability Index", value: "rvi"},
      {header: "Rent Stress", value: "rent_stress"},
      {header: "Number of Renters", value: "total_renters"},
      {header: "Bonds Lodged", value: ["","",""], chart: 'line'},
      {header: "Median Rent", value: ["","",""], chart: 'line'},
      {header: "Unaffordable Rentals", value: ["","",""], chart: true},
      {header: "Dwelling Indicators"},
      {header: "Public/Community Housing", value: "public_community"},
      {header: "Boarding Houses", value: "boardinghouse"},
      {header: "Residential Parks", value: "residential_park"},
      {header: "Home Ownership", value: ["","",""], chart: 'bar'},
      {header: "People Indicators"},
      {header: "Younger", value: "young"},
      {header: "Older", value: "older"},
      {header: "Unemployed", value: "unemployed"},
      {header: "Single Parent", value: "single_parent"},
      {header: "Lower Education Level", value: "low_ed"},
      {header: "Need of Assistance", value: "assist"},
      {header: "Indigenous", value: "indig"},
      {header: "Language Profile", value: ["","",""], chart: 'bar'},
    ].forEach(f => { add_row(f) })
  }
  
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
