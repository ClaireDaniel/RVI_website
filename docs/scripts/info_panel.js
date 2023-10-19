function draw_info_panel (postcodes) {

  let aggregated_info = [
    {"header": "Postcode", "state": "nsw", "year": "2016", "value": "NSW", "labels": ""},
    {"header": "Rental Vulnerability Index", "state": "nsw", "year": "2016", "value": " ", "labels": ""},
    {"header": "Rent Stress", "state": "nsw", "year": "2016", "value": "  ", "labels": ""},
    {"header": "Number of Renters", "state": "nsw", "year": "2016", "value": "2.11m (28%)", "labels": ""},
    {"header": "Bonds Held", "state": "nsw", "year": "2016", "value": "--", "labels": ""},
    {"header": "Median Rent", "state": "nsw", "year": "2016", "value": "450 pw", "labels": ""},
    {"header": "Unaffordable Rentals", "state": "nsw", "year": "2016", "value": "65%", "labels": ""},
    {"header": "Bonds Held (Trend)", "state": "nsw", "year": "2016", "value": [833729,867253,900927,921878,930738], "labels": [2017,2018,2019,2020,2021]},
    {"header": "Median Rent (Trend)", "state": "nsw", "year": "2016", "value": [450,465,480,480,470,480], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Unaffordable Rentals (Trend)", "state": "nsw", "year": "2016", "value": [0.72,0.72,0.70,0.64,0.55], "labels": [2017,2018,2019,2020,2021]},
    {"header": "Public/Community Housing", "state": "nsw", "year": "2016", "value": "125k (4%)", "labels": ""},
    {"header": "Boarding Houses", "state": "nsw", "year": "2016", "value": "11k (0.3%)", "labels": ""},
    {"header": "Residential Parks", "state": "nsw", "year": "2016", "value": "22k (0.7%)", "labels": ""},
    {"header": "Home Ownership", "state": "nsw", "year": "2016", "value": "1.70m (55%)", "labels": ""},
    {"header": "Younger", "state": "nsw", "year": "2016", "value": "253k (12%)", "labels": ""},
    {"header": "Older", "state": "nsw", "year": "2016", "value": "140k (6%)", "labels": ""},
    {"header": "Unemployed", "state": "nsw", "year": "2016", "value": "101k (5%)", "labels": ""},
    {"header": "Single Parent", "state": "nsw", "year": "2016", "value": "141k (7%)", "labels": ""},
    {"header": "Lower Education Level", "state": "nsw", "year": "2016", "value": "137k (6%)", "labels": ""},
    {"header": "Need of Assistance", "state": "nsw", "year": "2016", "value": "105k (5%)", "labels": ""},
    {"header": "Indigenous", "state": "nsw", "year": "2016", "value": "115k (5%)", "labels": ""},
    {"header": "English Speakers", "state": "nsw", "year": "2016", "value": "1.37m (65%)", "labels": ""},
    {"header": "Other Languages", "state": "nsw", "year": "2016", "value": " ", "labels": ""},
    {"header": "Postcode", "state": "nsw", "year": "2021", "value": "NSW", "labels": ""},
    {"header": "Rental Vulnerability Index", "state": "nsw", "year": "2021", "value": " ", "labels": ""},
    {"header": "Rent Stress", "state": "nsw", "year": "2021", "value": "  ", "labels": ""},
    {"header": "Number of Renters", "state": "nsw", "year": "2021", "value": "2.37m (29%)", "labels": ""},
    {"header": "Bonds Held", "state": "nsw", "year": "2021", "value": "930k", "labels": ""},
    {"header": "Median Rent", "state": "nsw", "year": "2021", "value": "480 pw", "labels": ""},
    {"header": "Unaffordable Rentals", "state": "nsw", "year": "2021", "value": "38%", "labels": ""},
    {"header": "Bonds Held (Trend)", "state": "nsw", "year": "2021", "value": [833729,867253,900927,921878,930738], "labels": [2017,2018,2019,2020,2021]},
    {"header": "Median Rent (Trend)", "state": "nsw", "year": "2021", "value": [450,465,480,480,470,480], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Unaffordable Rentals (Trend)", "state": "nsw", "year": "2021", "value": [0.72,0.72,0.70,0.64,0.55], "labels": [2017,2018,2019,2020,2021]},
    {"header": "Public/Community Housing", "state": "nsw", "year": "2021", "value": "123k (4%)", "labels": ""},
    {"header": "Boarding Houses", "state": "nsw", "year": "2021", "value": "10k (0.3%)", "labels": ""},
    {"header": "Residential Parks", "state": "nsw", "year": "2021", "value": "22k (1%)", "labels": ""},
    {"header": "Home Ownership", "state": "nsw", "year": "2021", "value": "1.89m (56%)", "labels": ""},
    {"header": "Younger", "state": "nsw", "year": "2021", "value": "257k (11%)", "labels": ""},
    {"header": "Older", "state": "nsw", "year": "2021", "value": "175k (7%)", "labels": ""},
    {"header": "Unemployed", "state": "nsw", "year": "2021", "value": "89k (4%)", "labels": ""},
    {"header": "Single Parent", "state": "nsw", "year": "2021", "value": "154k (6%)", "labels": ""},
    {"header": "Lower Education Level", "state": "nsw", "year": "2021", "value": "139k (6%)", "labels": ""},
    {"header": "Need of Assistance", "state": "nsw", "year": "2021", "value": "134k (6%)", "labels": ""},
    {"header": "Indigenous", "state": "nsw", "year": "2021", "value": "144k (6%)", "labels": ""},
    {"header": "English Speakers", "state": "nsw", "year": "2021", "value": "1.53m (64%)", "labels": ""},
    {"header": "Other Languages", "state": "nsw", "year": "2021", "value": "  ", "labels": ""},
    {"header": "Postcode", "state": "qld", "year": "2016", "value": "QLD", "labels": ""},
    {"header": "Rental Vulnerability Index", "state": "qld", "year": "2016", "value": " ", "labels": ""},
    {"header": "Rent Stress", "state": "qld", "year": "2016", "value": "  ", "labels": ""},
    {"header": "Number of Renters", "state": "qld", "year": "2016", "value": "1.45m (30%)", "labels": ""},
    {"header": "Bonds Held", "state": "qld", "year": "2016", "value": "568k", "labels": ""},
    {"header": "Median Rent", "state": "qld", "year": "2016", "value": "355 pw", "labels": ""},
    {"header": "Unaffordable Rentals", "state": "qld", "year": "2016", "value": "47%", "labels": ""},
    {"header": "Bonds Held (Trend)", "state": "qld", "year": "2016", "value": [568164, 592789,611749,626321,637817,624098], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Median Rent (Trend)", "state": "qld", "year": "2016", "value": [355,360,370,376,385,410], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Unaffordable Rentals (Trend)", "state": "qld", "year": "2016", "value": [0.67,0.68,0.69,0.71,0.70,0.62], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Public/Community Housing", "state": "qld", "year": "2016", "value": "57k (3%)", "labels": ""},
    {"header": "Boarding Houses", "state": "qld", "year": "2016", "value": "8k (0.3%)", "labels": ""},
    {"header": "Residential Parks", "state": "qld", "year": "2016", "value": "17k (0.8%)", "labels": ""},
    {"header": "Home Ownership", "state": "qld", "year": "2016", "value": "1.04m (53%)", "labels": ""},
    {"header": "Younger", "state": "qld", "year": "2016", "value": "253k (17%)", "labels": ""},
    {"header": "Older", "state": "qld", "year": "2016", "value": "94k (6%)", "labels": ""},
    {"header": "Unemployed", "state": "qld", "year": "2016", "value": "85k (6%)", "labels": ""},
    {"header": "Single Parent", "state": "qld", "year": "2016", "value": "99k (7%)", "labels": ""},
    {"header": "Lower Education Level", "state": "qld", "year": "2016", "value": "350k (25%)", "labels": ""},
    {"header": "Need of Assistance", "state": "qld", "year": "2016", "value": "72k (5%)", "labels": ""},
    {"header": "Indigenous", "state": "qld", "year": "2016", "value": "113k (7%)", "labels": ""},
    {"header": "English Speakers", "state": "qld", "year": "2016", "value": "1.19m (81%)", "labels": ""},
    {"header": "Other Languages", "state": "qld", "year": "2016", "value": "  ", "labels": ""},
    {"header": "Postcode", "state": "qld", "year": "2021", "value": "QLD", "labels": ""},
    {"header": "Rental Vulnerability Index", "state": "qld", "year": "2021", "value": " ", "labels": ""},
    {"header": "Rent Stress", "state": "qld", "year": "2021", "value": "  ", "labels": ""},
    {"header": "Number of Renters", "state": "qld", "year": "2021", "value": "1.56m (30%)", "labels": ""},
    {"header": "Bonds Held", "state": "qld", "year": "2021", "value": "593k", "labels": ""},
    {"header": "Median Rent", "state": "qld", "year": "2021", "value": "420 pw", "labels": ""},
    {"header": "Unaffordable Rentals", "state": "qld", "year": "2021", "value": "47%", "labels": ""},
    {"header": "Bonds Held (Trend)", "state": "qld", "year": "2021", "value": [568164, 592789,611749,626321,637817,624098], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Median Rent (Trend)", "state": "qld", "year": "2021", "value": [355,360,370,376,385,410], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Unaffordable Rentals (Trend)", "state": "qld", "year": "2021", "value": [0.67,0.68,0.69,0.71,0.70,0.62], "labels": [2016,2017,2018,2019,2020,2021]},
    {"header": "Public/Community Housing", "state": "qld", "year": "2021", "value": "56k (3%)", "labels": ""},
    {"header": "Boarding Houses", "state": "qld", "year": "2021", "value": "8k (0.4%)", "labels": ""},
    {"header": "Residential Parks", "state": "qld", "year": "2021", "value": "24k (1%)", "labels": ""},
    {"header": "Home Ownership", "state": "qld", "year": "2021", "value": "120k (55%)", "labels": ""},
    {"header": "Younger", "state": "qld", "year": "2021", "value": "194k (12%)", "labels": ""},
    {"header": "Older", "state": "qld", "year": "2021", "value": "120k (8%)", "labels": ""},
    {"header": "Unemployed", "state": "qld", "year": "2021", "value": "67k (4%)", "labels": ""},
    {"header": "Single Parent", "state": "qld", "year": "2021", "value": "119k (8%)", "labels": ""},
    {"header": "Lower Education Level", "state": "qld", "year": "2021", "value": "85k (5%)", "labels": ""},
    {"header": "Need of Assistance", "state": "qld", "year": "2021", "value": "96k (6%)", "labels": ""},
    {"header": "Indigenous", "state": "qld", "year": "2021", "value": "142k (9%)", "labels": ""},
    {"header": "English Speakers", "state": "qld", "year": "2021", "value": "1.27m (81%)", "labels": ""},
    {"header": "Other Languages", "state": "qld", "year": "2021", "value": "  ", "labels": ""}
  ]


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
      let state_agg = aggregated_info.filter(a => a.header == d.header &&  a.state == STATE && a.year == YEAR)
      if(state_agg.length > 0) {
        info_cell_value = document.createElement('td');
        if(state_agg[0].labels) {
          info_cell_value.setAttribute('class','chart-cell');
          info_cell_value.setAttribute('height', '50px');
          info_cell_value.setAttribute('style','max-width:100px;');
          let info_chart = document.createElement('canvas');
          info_chart.setAttribute('class','chart');
          info_cell_value.appendChild(info_chart);
          console.log(state_agg,state_agg[0].value)
          new Chart(info_chart,{
            type: 'line',
            data : {
              labels: state_agg[0].labels,
              datasets: [{
                data: state_agg[0].value,
                fill: false, borderColor: 'rgb(252, 141, 89)', pointRadius: 1.1, borderWidth: 2, backgroundColor: 'rgb(252, 141, 89)' }
              ]
            },
            options: {
              animation: false,
              layout: { padding: 0 },
              plugins: { legend: {display: false }, tooltip: { caretSize:0, displayColors: false} },
              scales: { x: { display: false}, y: { display: false, beginAtZero: false } },
              maintainAspectRatio: false
            }
          });
        } else {
            info_cell_value.innerHTML=`<span>${state_agg[0].value}</span>`;
        }
        info_row.appendChild(info_cell_value);
      }
      for(i in data) {
        info_cell_value = document.createElement('td');
        if(d.chart) {
          info_cell_value.setAttribute('class','chart-cell');
          info_cell_value.setAttribute('height',d.chart == 'line' ? '50px':'75px');
          info_cell_value.setAttribute('style','max-width:100px;');
          let info_chart = document.createElement('canvas');
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
          data_exists = theme.value ? data.map(f=>typeof(theme.value(f)) != 'undefined').reduce((x,y) => { return(x || y) }) : false;
          if(data_exists) {
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
      {header: "Postcode", value: "0", tooltip: "suburbs", close: true},
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
      {header: "Public/Community Housing", value: 7, tooltip_h:"Public housing dwellings and community housing dwellings (State Government open data)"},
      {header: "Boarding Houses", value: 8, tooltip_h:"Registered rooming services (State Government open data)"},
      {header: "Residential Parks", value: 9, tooltip_h:"Dwellings on registered residential parks with manufactured homes (State Government open data)"},
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
