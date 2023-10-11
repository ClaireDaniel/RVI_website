function draw_info_panel (postcodes) {
  let info_panel_container = document.querySelector('#info-panel');
  let info_panel = document.createElement('div');
  let info_table = document.createElement('table');

  info_panel_container.innerHTML = '';
  info_panel.setAttribute('class','side-panel-sections');
  info_panel.style.padding = '15px 15px'

  function add_row(d) {
    let info_row, info_cell_header, info_cell_value;
    let data_exists;
    info_row = document.createElement('tr');
    info_cell_header = document.createElement('td');
    if(d.header) {
      info_cell_header.innerHTML = d.value ? `<span ${d.tooltip_h ? 'data-tooltip="'+d.tooltip_h+'"' : '' } class="short">${d.header}</span>` : `<b>${d.header}</b>`;
    } else {
      info_row.setAttribute('class','info-panel-title');
    }
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
          let theme = THEMES.map(a => a.items).flat().filter(f => f.id == d.value)[0]
          console.log(theme)
          data_exists = data.map(f=>typeof(theme.color(f)) != 'undefined').reduce((x,y) => { return(x || y) });
          if(data_exists) {
            console.log(data[i])
            info_cell_value.innerHTML=`<span ${d.tooltip ? 'data-tooltip="'+data[i][d.tooltip]+'"' : '' }>${theme.format(data[i])}</span>`;
            if(d.close) info_cell_value.innerHTML += `<span class='close' onClick="toggle_postcode_selection('${data[i].postcode}');">×</span>`;
          }
        }
        info_row.appendChild(info_cell_value);
      }
    }
    if((!d.value) || data_exists || d.chart) info_table.appendChild(info_row);
  }

  let data = DATA.filter(d => postcodes.indexOf(d.postcode) > -1 && d.year == YEAR)
  if(data.length > 0 && YEAR != 2011) {
    [
      {value: "0", tooltip: "suburbs", close: true},
      {header: "Rental Indicators"},
      {header: "Rental Vulnerability Index", value: 1},
      {header: "Rent Stress", value: 2, tooltip_h: "Households in the lowest 40% of incomes paying more than 30% of household income on rent (Census)"},
      {header: "Number of Renters", value: 3, tooltip_h: "Number of people living in rented dwellings based on place of enumeration (Census)"},
      {header: "Bonds Held", value: 4, tooltip_h:"Total rental bonds held by the Residential Tenancies Authority at end of June in the stated year. Approximates total number of tenancies in the private rental sector. (Rental bonds)"},
      {header: "Median Rent", value: 5, tooltip_h:"Median rent for new bonds lodged in each calendar year (Rental bonds)"},
      {header: "Unaffordable Rentals", value: 6, tooltip_h:"Percentage of new tenancies commencing (per new bonds lodged) in each year that are affordable (less than 30% of income) for the average income households for the area (Rental Bonds, ABS Average Weekly Earnings)"},
      {header: "Bonds Held (Trend)", value: ["2016_12","2017_12","2018_12","2019_12","2020_12","2021_12"], chart: 'line', labels : ['2016','2017','2018','2019','2020','2021'],tooltip_h:"Total rental bonds held by the Residential Tenancies Authority at end of June in the stated year. Approximates total number of tenancies in the private rental sector. (Rental bonds)"},
      {header: "Median Rent (Trend)", value: ["16_m_rent","17_m_rent","18_m_rent","19_m_rent","20_m_rent","21_m_rent"], chart: 'line', labels : ['2016','2017','2018','2019','2020','2021'],tooltip_h:"Median rent in AUD/week for new bonds lodged in each calendar year from 2016-2021 (Rental bonds)"},
      {header: "Unaffordable Rentals (Trend)", value: ["unaff_2017","unaff_2018","unaff_2019","unaff_2020","unaff_2021"], chart: 'line', labels : ['2017','2018','2019','2020','2021'],tooltip_h:"Percentage of new tenancies commencing (per new bonds lodged) in each year that are affordable (less than 30% of income) for the average income households for the area (Rental Bonds, ABS Average Weekly Earnings)"},
      {header: "Dwelling Indicators"},
      //{header: "Public/Community Housing", value: 7, tooltip_h:"Public housing dwellings and community housing dwellings (Queensland Government open data)"},
      //{header: "Boarding Houses", value: 8, tooltip_h:"Registered rooming services (Queensland Government open data)"},
      //{header: "Residential Parks", value: 9, tooltip_h:"Dwellings on registered residential parks with manufactured homes (Queensland Government open data)"},
      {header: "Home Ownership", value: ["own_occ","rented","other_tenure","tenurenotstated","tenuren_a"], chart: 'doughnut', labels : ["Owner Occupied","Rented","Other","Not Stated","NA"], tooltip_h:"Owned outright, and owned subject to a mortgage (Census)"},
      {header: "People Indicators"},
      {header: "Younger", value: 14, tooltip_h:"Number of renters aged 15 to 24 (census)  "},
      {header: "Older", value: 15, tooltip_h:"Number of renters aged 65 and over at (census)"},
      {header: "Unemployed", value: 16, tooltip_h:"Number of renters unemployed (census)"},
      {header: "Single Parent", value: 17, tooltip_h:"Number of households classified as one parent family (Census)"},
      {header: "Lower Education Level", value: 18, tooltip_h:"Number of renters where highest level of education attained is Year 10 or below (Census)"},
      {header: "Need of Assistance", value: 19, tooltip_h:"Needs assistance with a core activity, because of long-term health condition, disability or old age (Census)"},
      {header: "Indigenous", value: 20, tooltip_h:"Household contains at least one person who is Aboriginal or Torres Strait Islander (Census)"},
      {header: "English Speakers", value: 21 , tooltip_h:"Main language used at home (Census)"},
      {header: "Other Languages", value: ["spanish","arabic","hindi","punjabi","vietnamese","japanese","korean","mandarin","samoan","tagalog","all_otherlang"], chart: 'doughnut', labels : ["Spanish","Arabic","Hindi","Punjabi","Vietnamese","Japanese","Korean","Mandarin","Samoan","Tagalog","Other"], tooltip_h:"Main language used at home (Census)"},
    ].forEach(f => { add_row(f) })
  }
  
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = (postcodes.length > 0) && (YEAR != 2011) && STATE ? 'block' : 'none';
  return(info_panel);
}
