function draw_info_panel (postcodes) {
  let info_panel_container = document.querySelector('#info-panel');
  let info_panel = document.createElement('div');
  let info_table = document.createElement('table');

  info_panel_container.innerHTML = '';
  info_panel.setAttribute('class','side-panel-sections');
  info_panel.style.padding = '15px 15px'

  function add_row(d) {
    let info_row, info_cell_header, info_cell_value;
    let data_exists = data.map(f=>typeof(f[d.value]) != 'undefined').reduce((x,y) => { return(x || y) });
    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    info_cell_header.innerHTML = d.value ? `<span ${d.tooltip_h ? 'data-tooltip="'+d.tooltip_h+'"' : '' } class="short">${d.header}</span>` : `<b>${d.header}</b>`;
    info_row.appendChild(info_cell_header);
    if(d.value) {
      for(i in data) {
        info_cell_value = document.createElement('td');
        if(d.chart) {
          info_cell_value.setAttribute('class','chart-cell');
          info_cell_value.setAttribute('height',d.chart == 'line' ? '50px':'75px');
          info_cell_value.setAttribute('style','max-width:100px;');
          info_chart = document.createElement('canvas');
          info_chart.setAttribute('class','chart');
          info_cell_value.appendChild(info_chart);
          let values = d.value.map(f => data[i][f])
          let colors_lang = ['rgb(227,26,28)', 'rgb(31,120,180)', 'rgb(51,160,44)', 'rgb(255,127,0)', 'rgb(106,61,154)', 'rgb(255,255,153)', 'rgb(166,206,227)', 'rgb(178,223,138)', 'rgb(251,154,153)', 'rgb(253,191,111)', 'rgb(202,178,214)'];
          new Chart(info_chart,{
            type: d.chart,
            data : {
              labels: d.labels,
              datasets: [{
                data: values,
                fill: d.chart != 'line',
                borderColor: d.chart == 'line' ? 'rgb(252, 141, 89)' : 'rgb(255,255,255)',
                pointRadius: d.chart == 'line' ? 1.1 : 0,
                borderWidth: d.chart == 'line' ? 2 : 0.5,
                backgroundColor: d.chart == 'line' ?  'rgb(252, 141, 89)' : colors_lang
              }]
            },
            options: {
              animation: false,
              layout: { padding: 0 },
              plugins: { legend: {display: false }, tooltip: { caretSize:0, displayColors: d.chart != 'line'} },
              scales: { x: { display: false}, y: { display: false, beginAtZero: false } },
              maintainAspectRatio: false
            }
          });
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
      {header: "Bonds Lodged", value: `${YEAR}_12`},
      {header: "Median Rent", value: `${YEAR.slice(-2)}_m_rent`},
      {header: "Unaffordable Rentals", value: `unaff_${YEAR==2016 ? 2017 : YEAR}`},
      {header: "Bonds Lodged (Trend)", value: ["2016_12","2017_12","2018_12","2019_12","2020_12","2021_12"], chart: 'line', labels : ['2016','2017','2018','2019','2020','2021'],tooltip_h:"From 2016-2021"},
      {header: "Median Rent (Trend)", value: ["16_m_rent","17_m_rent","18_m_rent","19_m_rent","20_m_rent","21_m_rent"], chart: 'line', labels : ['2016','2017','2018','2019','2020','2021'],tooltip_h:"From 2016-2021 (AUD/Week)"},
      {header: "Unaffordable Rentals (Trend)", value: ["unaff_2017","unaff_2018","unaff_2019","unaff_2020","unaff_2021"], chart: 'line', labels : ['2017','2018','2019','2020','2021'],tooltip_h:"From 2017-2021 (%)"},
      {header: "Dwelling Indicators"},
      {header: "Public/Community Housing", value: "public_community"},
      {header: "Boarding Houses", value: "boardinghouse"},
      {header: "Residential Parks", value: "residential_park"},
      {header: "Home Ownership", value: ["own_occ","rented","other_tenure","tenurenotstated","tenuren_a"], chart: 'doughnut', labels : ["Owner Occupied","Rented","Other","Not Stated","NA"]},
      {header: "People Indicators"},
      {header: "Younger", value: "young"},
      {header: "Older", value: "older"},
      {header: "Unemployed", value: "unemployed"},
      {header: "Single Parent", value: "single_parent"},
      {header: "Lower Education Level", value: "low_ed"},
      {header: "Need of Assistance", value: "assist"},
      {header: "Indigenous", value: "indig"},
      {header: "English Speakers", value:"english" },
      {header: "Other Languages", value: ["spanish","arabic","hindi","punjabi","vietnamese","japanese","korean","mandarin","samoan","tagalog","all_otherlang"], chart: 'doughnut', labels : ["Spanish","Arabic","Hindi","Punjabi","Vietnamese","Japanese","Korean","Mandarin","Samoan","Tagalog","Other"]},
    ].forEach(f => { add_row(f) })
  }
  
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = postcodes.length > 0 && STATE ? 'block' : 'none';
  return(info_panel);
}
