async function draw_info_panel (postcodes) {

  // Load aggregated_info.json dynamically
  let aggregated_info = [];
  try {
    const res = await fetch('../data/state_year_cards.json');   // or your JSON filename/path
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    aggregated_info = await res.json();
  } catch (e) {
    console.error('❌ Failed to load state_year_cards.json:', e);
    return; // no data, no panel
  }

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
     
      if (state_agg.length > 0) {
        info_cell_value = document.createElement('td');

        // decide chart type + data for the STATE cell
        const chartType = state_agg[0].chart || d.chart;                 // <- NEW
        const labels    = state_agg[0].labels || d.labels || [];         // <- NEW
        const tooltipLabels = state_agg[0].chart_labels || d.chart_labels || [];
        const values    = Array.isArray(state_agg[0].value)              // <- NEW
                          ? state_agg[0].value
                          : (state_agg[0].value != null ? [state_agg[0].value] : []);

        if (chartType) {
          info_cell_value.setAttribute('class','chart-cell');
          info_cell_value.setAttribute('height', chartType === 'line' ? '50px' : '75px');
          info_cell_value.setAttribute('style','max-width:150px;');
          let info_chart = document.createElement('canvas');
          info_chart.setAttribute('class','chart');
          info_cell_value.appendChild(info_chart);

          const colors_lang = [
            'rgb(227,26,28)','rgb(31,120,180)','rgb(51,160,44)','rgb(255,127,0)',
            'rgb(106,61,154)','rgb(255,255,153)','rgb(166,206,227)','rgb(178,223,138)',
            'rgb(251,154,153)','rgb(253,191,111)','rgb(202,178,214)'
          ];

          new Chart(info_chart, {
            type: chartType,
            data: {
              labels: labels,
              datasets: [{
                data: values,
                fill: chartType !== 'line',
                borderColor: chartType === 'line' ? 'rgb(252, 141, 89)' : 'rgb(255,255,255)',
                pointRadius: chartType === 'line' ? 1.1 : 0,
                borderWidth: chartType === 'line' ? 2 : 0.5,
                backgroundColor: chartType === 'line' ? 'rgb(252, 141, 89)' : colors_lang
              }]
            },
            options: {
              animation: false,
              layout: { padding: 0 },
              plugins: {
                legend: { display: false },
                tooltip: {
                  caretSize: 0,
                  displayColors: chartType !== 'line',
                  callbacks: {
                    label: function (context) {
                      let label = context.label || '';
                      let value = context.parsed;

                      // Handle line charts or grouped datasets (use .y if object)
                      if (typeof value === 'object' && value !== null) {
                        value = value.y !== undefined ? value.y : value.x;
                      }

                      // Compute total of this dataset for % share
                      const dataset = context.dataset.data;
                      const total = dataset.reduce((a, b) => a + (b || 0), 0);
                      const pct = total > 0 ? (value / total) * 100 : 0;

                      // --- shorten large numbers (e.g. 25 000 → 25k, 1 200 000 → 1.2M)
                      const compactValue = (() => {
                        const n = Number(value);
                        if (isNaN(n)) return value;
                        if (Math.abs(n) >= 1_000_000)
                          return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
                        if (Math.abs(n) >= 10_000)
                          return Math.round(n / 1_000) + 'k';
                        return n.toLocaleString();
                      })();

                      // Label logic: switch formatting per header
                      if (d.header === 'Affordable Rentals (Trend)') {
                        return `${label}: ${(value / 100).toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 0
                        })}`;
                      }

                      if (d.header === 'Median Rent (Trend)') {
                        return `$${Number(value).toLocaleString()} pw`;
                      }

                      // default (for other charts)
                      return `${compactValue} (${pct.toFixed(1)}%)`;




                    }
                  }
                }
              },
              scales: { x: { display: false }, y: { display: false, beginAtZero: false } },
              maintainAspectRatio: false
            }
          });
        } else {
          // no chart type -> just show the value
          info_cell_value.innerHTML = `<span>${state_agg[0].value}</span>`;
        }

        info_row.appendChild(info_cell_value);
      }
      for(i in data) {
        info_cell_value = document.createElement('td');
        
        
        if(d.chart) {

          console.log(d.chart)

          info_cell_value.setAttribute('class','chart-cell');
          info_cell_value.setAttribute('height',d.chart == 'line' ? '50px':'75px');
          info_cell_value.setAttribute('style','max-width:150px;');
          let info_chart = document.createElement('canvas');
          info_chart.setAttribute('class','chart');
          info_cell_value.appendChild(info_chart);



          let values;

          // NEW behaviour for Median Rent (Trend):
          // d.value is "ts_rent", and data[i].ts_rent is already an array.
          if (d.header === 'Median Rent (Trend)') {
            
            // --- VALUES ---
            let rawVals = data[i][d.value];   // "ts_rent"
            let vals = [];
            try {
              vals = JSON.parse(rawVals).map(Number);
            } catch (e) {
              console.warn("Could not parse ts_rent:", rawVals);
            }
            values = vals;

            // --- LABELS ---
            let rawLabs = data[i]["ts_rent_labels"];
            let labs = [];
            try {
              labs = JSON.parse(rawLabs);
            } catch (e) {
              console.warn("Could not parse ts_rent_labels:", rawLabs);
            }
            d._dynamic_labels = labs;   // <-- store on d for use in chart


          } else if (d.header === 'Affordable Rentals (Trend)') {
            values = d.value.map(f => 100 - data[i][f]);

          // original behaviour for all other chart rows (Home Ownership, Other Languages, etc.)
          } else {
            values = d.value.map(f => data[i][f]);
}
          let colors_lang = ['rgb(227,26,28)', 'rgb(31,120,180)', 'rgb(51,160,44)', 'rgb(255,127,0)', 'rgb(106,61,154)', 'rgb(255,255,153)', 'rgb(166,206,227)', 'rgb(178,223,138)', 'rgb(251,154,153)', 'rgb(253,191,111)', 'rgb(202,178,214)'];
          
          console.log("here is D")
          console.log(d)
          console.log(values)

          new Chart(info_chart,{
            
            type: d.chart,
            data : {
              labels:
                d.header === "Median Rent (Trend)"
                ? d._dynamic_labels
                : (d.chart_labels || d.labels || []),
              
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
              plugins: { 
                legend: { display: false }, 
                tooltip: { 
                  caretSize:0, 
                  displayColors: d.chart != 'line',
                  callbacks: {
                    label: function (context) {
                      let label = context.label || '';
                      let value = context.parsed;

                      // Handle line charts or grouped datasets (use .y if object)
                      if (typeof value === 'object' && value !== null) {
                        value = value.y !== undefined ? value.y : value.x;
                      }

                      // Compute total of this dataset for % share
                      const dataset = context.dataset.data;
                      const total = dataset.reduce((a, b) => a + (b || 0), 0);
                      const pct = total > 0 ? (value / total) * 100 : 0;

                      // --- shorten large numbers (e.g. 25 000 → 25k, 1 200 000 → 1.2M)
                      const compactValue = (() => {
                        const n = Number(value);
                        if (isNaN(n)) return value;
                        if (Math.abs(n) >= 1_000_000)
                          return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
                        if (Math.abs(n) >= 10_000)
                          return Math.round(n / 1_000) + 'k';
                        return n.toLocaleString();
                      })();

                      // Label logic: switch formatting per header
                      if (d.header === 'Affordable Rentals (Trend)') {
                      return `${label}: ${(value / 100).toLocaleString(undefined, {
                        style: 'percent',
                        minimumFractionDigits: 0
                      })}`;
                    }

                    if (d.header === 'Median Rent (Trend)') {
                      return `$${Number(value).toLocaleString()} pw`;
                    }

                    // default (for doughnuts & other charts)
                    return `${compactValue} (${pct.toFixed(1)}%)`;


                    }
                  }
                }
              },
              scales: { x: { display: false}, y: { display: false, beginAtZero: false } },
              maintainAspectRatio: false
            }
          });
        } else {
          let theme = THEMES.map(a => a.items).flat().filter(f => f.id == d.value)[0]
          data_exists = theme.value ? data.map(f=>typeof(theme.value(f)) != 'undefined').reduce((x,y) => { return(x || y) }) : false;
          if(data_exists) {
            info_cell_value.innerHTML=`<span ${d.tooltip ? 'data-tooltip="'+data[i][d.tooltip]+'"' : '' }>${theme.format(data[i])}</span>`;
            if(d.close) info_cell_value.innerHTML += `<span class='close' onClick="toggle_postcode_selection('${data[i].sa2_code}');">×</span>`;
          }
        }
        info_row.appendChild(info_cell_value);
      }
    }
    if((!d.value) || data_exists || d.chart) info_table.appendChild(info_row);
  }

  let data = DATA.filter(d => postcodes.indexOf(d.sa2_code) > -1 && d.year == YEAR)
  
  if(data.length > 0) {
    [
      {header: "Name", value: "33", tooltip: "suburbs", close: true},
      {header: "SA2 Code", value: "0", tooltip_h: "Unique id", close: false, tooltip_h: "Unique code assigned to the statisical area by the ABS"},
      {header: "Rental Indicators"},
      {header: "Rental Vulnerability Index", value: 1, tooltip_h: "Percentile score showing how this area compares in rental vulnerability (0 = low, 1 = high)."},
      {header: "Rental Vulnerability Category", value: 34, tooltip_h: "The indicator with the highest contribution to the rental vulnerability index score for the local area"},
      {header: "Rent Stress", value: 2, tooltip_h: "Households in the lowest 40% of incomes paying more than 30% of household income on rent (Census)"},
      {header: "Proportion of Renters", value: 3, tooltip_h: "Number of people living in rented dwellings based on place of enumeration (Census)"},
      {header: "Bonds Held", value: 4, tooltip_h:"Total rental bonds held by the Residential Tenancies Authority at end of June in the stated year. Approximates total number of tenancies in the private rental sector. (Rental bonds)"},
      {header: "Median Rent", value: 5, tooltip_h:"Median rent for new bonds lodged in each calendar year (Rental bonds)"},
      //{header: "Affordable Rentals", value: 6, tooltip_h:"Percentage of new tenancies commencing (per new bonds lodged) in each year that are affordable (less than 30% of income) for the average income households for the area (Rental Bonds, ABS Average Weekly Earnings)"},
      //{header: "Bonds Held (Trend)", value: ["2016_12","2017_12","2018_12","2019_12","2020_12","2021_12"], chart: 'line', labels : ['2016','2017','2018','2019','2020','2021'],tooltip_h:"Total rental bonds held by the Residential Tenancies Authority at end of June in the stated year. Approximates total number of tenancies in the private rental sector. (Rental bonds)"},
      {header: "Median Rent (Trend)", value: 'ts_rent', chart: 'line', tooltip_h:"Shows how median weekly rent has changed over the past two Census periods (Census)"},
      //{header: "Affordable Rentals (Trend)", value: ["unaff_2017","unaff_2018","unaff_2019","unaff_2020","unaff_2021"], chart: 'line', labels : ['2017','2018','2019','2020','2021'],tooltip_h:"Percentage of new tenancies commencing (per new bonds lodged) in each year that are affordable (less than 30% of income) for the average income households for the area (Rental Bonds, ABS Average Weekly Earnings)"},
      {header: "Dwelling Indicators"},
      {header: "Public/Community Housing", value: 7, tooltip_h:"Public housing dwellings and community housing dwellings (Census)"},
      {header: "Boarding Houses", value: 8, tooltip_h:"Registered rooming services (Census)"},
      {header: "Residential Parks", value: 9, tooltip_h:"Dwellings on registered residential parks with manufactured homes (Census)"},
      {header: "Home Ownership", value: ["own_occ","rented","other_tenure","tenurenotstated","tenuren_a"], chart: 'doughnut', chart_labels : ["Owner Occupied","Rented","Other","Not Stated","NA"], tooltip_h:"Owned outright, and owned subject to a mortgage (Census)"},
      {header: "People Indicators"},
      {header: "Younger", value: 14, tooltip_h:"Number of renters aged 18 to 24 (census)  "},
      {header: "Older", value: 15, tooltip_h:"Number of renters aged 65 and over at (census)"},
      {header: "Unemployed", value: 16, tooltip_h:"Number of renters unemployed (Census)"},
      {header: "Single Parent", value: 17, tooltip_h:"Number of households classified as one parent family (Census)"},
      {header: "Lower Education Level", value: 18, tooltip_h:"Number of renters where highest level of education attained is Year 9 or below (Census)"},
      {header: "Need of Assistance", value: 19, tooltip_h:"Needs assistance with a core activity, because of long-term health condition, disability or old age (Census)"},
      {header: "Indigenous", value: 20, tooltip_h:"Household contains at least one person who is Aboriginal or Torres Strait Islander (Census)"},
      {header: "English Speakers", value: 21 , tooltip_h:"Main language used at home (Census)"},
      {header: "Other Languages", value: ["spanish","arabic","hindi","punjabi","vietnamese","japanese","korean","mandarin","samoan","tagalog","all_other_lang"], chart: 'doughnut', labels : ["Spanish","Arabic","Hindi","Punjabi","Vietnamese","Japanese","Korean","Mandarin","Samoan","Tagalog","Other"], chart: 'doughnut', chart_labels : ["Spanish","Arabic","Hindi","Punjabi","Vietnamese","Japanese","Korean","Mandarin","Samoan","Tagalog","Other"], tooltip_h:"Main language used at home (Census)"},
    ].forEach(f => { add_row(f) })


  }
  
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = (postcodes.length > 0) && STATE ? 'block' : 'none';
  return(info_panel);
}
