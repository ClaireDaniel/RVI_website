async function draw_info_panel(postcodes) {
  // --- INTERNAL HELPERS (Kept inside to prevent breaking the app) ---

   /**
   * Formats raw numbers into human-readable strings (K, M, %, or currency)
   * based on the specific indicator header.
   */
  const formatChartValue = (value, label, header) => {
    if (header === 'Affordable Rentals (Trend)') {
      return [label, (value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })];
    }
    if (header === 'Median Rent (Trend)') {
      return [`$${Number(value).toLocaleString()} pw`];
    }
    const n = Number(value);
    if (isNaN(n)) return { compactValue: value };
    if (Math.abs(n) >= 1_000_000) return { compactValue: (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M' };
    if (Math.abs(n) >= 10_000) return { compactValue: Math.round(n / 1_000) + 'k' };
    return { compactValue: n.toLocaleString() };
  };

  /**
   * Extracts chart data from the datum. 
   * Handles special cases like JSON-string trends or array-based composite indicators.
   */
  const getChartData = (d, datum) => {
    if (d.header === 'Median Rent (Trend)') {
      try {
        return { values: JSON.parse(datum[d.value]).map(Number), labels: JSON.parse(datum["ts_rent_labels"]) };//
      } catch (e) { return { values: [], labels: [] }; }
    } 
    // Currently no affordable rentals... 
    if (d.header === 'Affordable Rentals (Trend)') {
      return { values: d.value.map(f => 100 - datum[f]), labels: d.labels };
    }
    return {
      values: Array.isArray(d.value) ? d.value.map(f => datum[f]) : [datum[d.value]],
      labels: d.labels || []
    };
  };

  /**
   * Initializes a Chart.js instance on the provided canvas.
  */
  const renderChart = (canvas, d, values, labels) => {
    const colors_lang = ['rgb(227,26,28)','rgb(31,120,180)','rgb(51,160,44)','rgb(255,127,0)','rgb(106,61,154)','rgb(255,255,153)','rgb(166,206,227)','rgb(178,223,138)','rgb(251,154,153)','rgb(253,191,111)','rgb(202,178,214)'];
    return new Chart(canvas, {
      type: d.chart,
      data: {
        labels: labels,
        datasets: [{
          data: values,
          fill: d.chart !== 'line',
          borderColor: d.chart === 'line' ? 'rgb(252, 141, 89)' : 'rgb(255,255,255)',
          pointRadius: d.chart === 'line' ? 1.1 : 0,
          borderWidth: d.chart === 'line' ? 2 : 0.5,
          backgroundColor: d.chart === 'line' ? 'rgb(252, 141, 89)' : colors_lang
        }]
      },
      options: {
        animation: false,
        layout: { padding: 0 },
        plugins: {
          legend: { display: false },
          tooltip: {
            caretSize: 0,
            displayColors: d.chart !== 'line',
            callbacks: {
              label: function (context) {
                let val = context.parsed;
                if (typeof val === 'object' && val !== null) val = val.y !== undefined ? val.y : val.x;
                const dataset = context.dataset.data;
                const total = dataset.reduce((a, b) => a + (b || 0), 0);
                const pct = total > 0 ? (val / total) * 100 : 0;
                const formatted = formatChartValue(val, context.label, d.header);
                return Array.isArray(formatted) ? formatted : [formatted.compactValue, `(${pct.toFixed(1)}%)`];
              }
            }
          }
        },
        scales: { x: { display: false }, y: { display: false, beginAtZero: false } },
        maintainAspectRatio: false
      }
    });
  };

  // --- MAIN FUNCTION LOGIC ---
  
  // Load state-level aggregate data for the comparison column
  let aggregated_info = [];
  try {
    const res = await fetch('tiles/state_year_cards.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    aggregated_info = await res.json();
  } catch (e) {
    console.error('❌ Failed to load state_year_cards.json:', e);
    return;
  }

  // DOM setup for the panel and results table
  let info_panel_container = document.querySelector('#info-panel');
  let info_panel = document.createElement('div');
  let info_table = document.createElement('table');

  info_panel_container.innerHTML = '';
  info_panel.setAttribute('class','side-panel-sections');
  info_panel.style.padding = '15px 15px';


  /**
   * Constructs a table row containing the indicator label, the state aggregate, 
   * and values for each selected local area.
   */
  function add_row(d) {
    let info_row = document.createElement('tr');
    let info_cell_header = document.createElement('td');
    
    // Render either a data label (with optional tooltip) or a category header
    if(d.header) {
      info_cell_header.innerHTML = d.value ? `<span ${d.tooltip_h ? 'data-tooltip="'+d.tooltip_h+'"' : '' } class="short">${d.header}</span>` : `<b>${d.header}</b>`;
    } else {
      info_row.setAttribute('class','info-panel-title');
    }
    info_row.appendChild(info_cell_header);
    
    if(d.value) {
      // 1. State Aggregate Column
      let state_agg = aggregated_info.find(a => a.header == d.header && a.state == STATE && a.year == YEAR);
      if (state_agg) {
        let state_cell = document.createElement('td');
        const chartType = state_agg.chart || d.chart;
        if (chartType) {
          state_cell.setAttribute('class','chart-cell');
          state_cell.setAttribute('style','max-width:150px; height:' + (chartType === 'line' ? '50px' : '75px') + ';');
          let canvas = document.createElement('canvas');
          canvas.setAttribute('class','chart');
          state_cell.appendChild(canvas);
          const vals = Array.isArray(state_agg.value) ? state_agg.value : (state_agg.value != null ? [state_agg.value] : []);
          renderChart(canvas, { ...d, chart: chartType }, vals, state_agg.labels || d.labels || []);
        } else {
          state_cell.innerHTML = `<span>${state_agg.value}</span>`;
        }
        info_row.appendChild(state_cell);
      }

      // 2. Selected Local Area Columns
      data.forEach(datum => {
        let local_cell = document.createElement('td');
        if (d.chart) {
          local_cell.setAttribute('class','chart-cell');
          local_cell.setAttribute('style','max-width:150px; height:' + (d.chart === 'line' ? '50px' : '75px') + ';');
          let canvas = document.createElement('canvas');
          canvas.setAttribute('class','chart');
          local_cell.appendChild(canvas);
          const { values, labels } = getChartData(d, datum);
          renderChart(canvas, d, values, labels);
        } else {
          let theme = THEMES.map(a => a.items).flat().find(f => f.id == d.value);
          if (theme && theme.value) {
            local_cell.innerHTML = `<span ${d.tooltip ? 'data-tooltip="'+datum[d.tooltip]+'"' : ''}>${theme.format(datum)}</span>`;
            if(d.close) local_cell.innerHTML += `<span class='close' onClick="toggle_postcode_selection('${datum.sa2_code}');">×</span>`;
          }
        }
        info_row.appendChild(local_cell);
      });
    }
    info_table.appendChild(info_row);
  }

  // Filter the global DATA set for the current selection and year
  let data = DATA.filter(d => postcodes.indexOf(d.sa2_code) > -1 && d.year == YEAR);
  
  if(data.length > 0) {
    // 1. Add the basic "Identity" rows first (Name and Code)
    add_row({header: "Name", value: "33", close: true});
    add_row({header: "SA2 Code", value: "0", tooltip_h: "Unique code assigned by the ABS"});

    // 2. Loop through the THEMES from index.js to build the rest of the table
    THEMES.forEach(theme => {
      // Add the Category Header (e.g., "Rental Indicators")
      add_row({header: theme.name});

      // Add each item in that theme
      theme.items.forEach(item => {
        // We only add it to the panel if it's marked for display 
        // (or you could add a new property like 'showInPanel: true')
        if (item.info_display) {
          add_row({
            header: item.label,
            value: item.id,
            tooltip_h: item.tooltip,
            chart: item.chart,
            labels: item.labels,
            // Pass through any other properties the add_row function needs
          });
        }
      });
    });
  }
  
  // Final panel assembly and visibility toggle
  info_panel.appendChild(info_table);
  info_panel_container.appendChild(info_panel);
  info_panel_container.style.display = (postcodes.length > 0) && STATE ? 'block' : 'none';
  return(info_panel);
}