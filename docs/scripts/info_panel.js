function draw_info_panel (postcodes) {
  let data = DATA.filter(d => postcodes.indexOf(d.postcode) > -1 && d.year == YEAR)

  let info_panel_container = document.querySelector('#info-panel');
  info_panel_container.setAttribute('class','containers');
  info_panel_container.innerHTML = '';

  let info_panel = document.createElement('div')
  info_panel.setAttribute('class','side-panel-sections');

  let info_table;
  info_table = document.createElement('table');
  
  if(data[0]) {
    let fields = Object.keys(data[0]).sort()
    for(i in fields) {
      let info_row = document.createElement('tr');
      let info_cell_header = document.createElement('td');
      info_cell_header.innerHTML = fields[i];
      info_row.appendChild(info_cell_header);
      for(j in data) {
        let info_cell_value = document.createElement('td');
        info_cell_value.innerHTML = data[j][fields[i]];
        info_row.appendChild(info_cell_value);
      }
      info_table.appendChild(info_row);
    }
  }

  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
