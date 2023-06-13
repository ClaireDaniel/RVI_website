function draw_info_panel (postcodes) {
  console.log(postcodes)
  let data = DATA.filter(d => postcodes.indexOf(d.postcode) > -1 && d.year == YEAR)
console.log(data)

  let info_panel_container = document.querySelector('#info-panel');
  info_panel_container.setAttribute('class','containers');
  info_panel_container.innerHTML = '';

  let info_panel = document.createElement('div')
  info_panel.setAttribute('class','side-panel-sections');

  let info_table;
  info_table = document.createElement('table');

  if(data[0]) {
    let info_row, info_cell_header, info_cell_value;

    function add_row(d) {
      if(typeof(data[0][d.value]) != 'undefined') {
        info_row = document.createElement('tr');
        info_cell_header = document.createElement('td');
        info_cell_header.innerHTML = d.header;
        info_row.appendChild(info_cell_header);
        for(i in data) {
          info_cell_value = document.createElement('td');
          info_cell_value.innerHTML=`<span>${data[i][d.value]}</span>`;
          info_row.appendChild(info_cell_value);
        }
        info_table.appendChild(info_row);
      }
    }
    
    function add_heading(d) {
      info_row = document.createElement('tr');
      info_cell_header = document.createElement('td');
      info_cell_header.innerHTML = `<b>${d}<b>`;
      info_row.appendChild(info_cell_header);
      info_table.appendChild(info_row);
    }

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Postcode';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span data-tooltip="${data[i].suburbs}">${data[i].postcode}</span><span style="cursor:pointer;" onClick="toggle_postcode_selection('${data[i].postcode}')"> [x]</span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);

    add_heading("Rental Indicators");
    [
      {header: "Rental Vulnerability Index", value: "rvi"},
      {header: "Boarding Houses", value: "rent_stress"},
      {header: "Number of Renters", value: "total_renters"}
    ].forEach(f => { add_row(f) })

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Bonds Lodged';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span id="bonds-lodged-chart"></span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Median Rent';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span id="median-rent-chart"></span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Unaffordable Rentals';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span id="unaff-rentals-chart"></span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);

    add_heading("Dwelling Indicators");
    [
      {header: "Public/Community Housing", value: "public_community"},
      {header: "Boarding Houses", value: "boardinghouse"},
      {header: "Residential Parks", value: "residential_park"}
    ].forEach(f => { add_row(f) })

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Home Ownership';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span id="home-ownership-chart"></span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);
    
    add_heading("People Indicators");
    [
      {header: "Younger", value: "young"},
      {header: "Older", value: "old"},
      {header: "Unemployed", value: "unemp"},
      {header: "Single Parent", value: "single_parent"},
      {header: "Lower Education Level", value: "low_ed"},
      {header: "On Assistance", value: "assist"},
      {header: "Indigenous", value: "indig"}
    ].forEach(f => { add_row(f) })

    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = 'Language Profile';
    info_row.appendChild(info_cell_header);
    for(i in data) {
      info_cell_value = document.createElement('td');
      info_cell_value.innerHTML=`<span id="language-profile-chart"></span>`;
      info_row.appendChild(info_cell_value);
    }
    info_table.appendChild(info_row);

  }
  
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
