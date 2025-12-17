function layer_postcode() { 
  let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0]
  console.log('THEME INFO');
  console.log(theme);


  return ([
    new deck.MVTLayer({
      id: 'rental_vulnerability_index',
      data : `tiles/{z}/{x}/{y}.pbf`, 
      minZoom: 0, maxZoom: 11,
      pickable: true,
      uniqueIdProperty: 'id', 
      autoHighlight: true,
      highlightColor: [0, 0, 255],
      opacity: 0.5,
      lineWidthUnits: 'pixels',
      getLineWidth: i =>  SELECTED.indexOf(i.properties.sa2_code) < 0 ? 1 : 3 , 
      getLineColor: i => SELECTED.indexOf(i.properties.sa2_code) < 0 ? [0, 0, 0, 50] : [0, 0, 255] , 
      getFillColor: f => {
        const p = f.properties;

        if (p.rvi == null || p.rvi === 0) {
          return [180, 180, 180, 120];
        }

        return theme.color(theme.value(p));
      },
      onClick: info => {
        const p = info?.object?.properties;
        if (!p) return;
        if (p.rvi == null || p.rvi === 0) return; // suppress selection
        toggle_postcode_selection(p.sa2_code);
      },



      getFilterValue: f => {
        const p = f.properties;
        return (p.year == YEAR && p.state == STATE) ? 1 : 0;
      },
            
      
      
      
      
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
      updateTriggers: { 
        getFillColor: [YEAR, THEME],
        getFilterValue: [YEAR],
        getLineColor: [SELECTED],
        getLineWidth: [SELECTED]
      }
    })
  ]);
  
}

function layer_state() { 
  return ([
    new deck.GeoJsonLayer({
      id: 'states',
      data: 'tiles/states.geojson',
      pickable: true,
      uniqueIdProperty: 'id', 
      autoHighlight: true,
      highlightColor: COLOR_SCALE(1).rgb(),
      lineWidthUnits: 'pixels',
      getLineWidth: 1,
      getLineColor: [0, 0, 0], 
      getFillColor: COLOR_SCALE(1).rgb().concat(125) ,
      onClick: (i,e) => { window.location.href = `./?state=${i.object.properties.state}` },
      getFilterValue: i => Object.keys(SETTINGS).indexOf(i.properties.state) > -1 ? 1 : 0, 
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
    })
  ]);
}

function tooltip_postcode(object) {
  const p = object.properties;
  const theme = THEMES.map(a => a.items).flat().find(f => f.id == THEME);

  let valueLine;

  // IMPORTANT: rvi may be string "0"
  const rvi = Number(p.rvi);

  if (!Number.isFinite(rvi) || rvi === 0) {
    valueLine = '<em>No usual residents</em>';
  } else {
    valueLine = `${theme.label}: ${theme.format(p)}`;
  }

  let html = `
    SA2 Name: ${p.sa2_name}<br>
    SA2 Code: ${p.sa2_code}<br>
    ${valueLine}
  `;

  let style = {
    color:'#fff',
    backgroundColor:'#000',
    fontSize:'1em',
    fontFamily:'monospace',
    fontWeight:'bold'
  };

  return { html, style };
}

function tooltip_state(object) {
  let html = `${object.properties.STATE_NAME} <br> `;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '1em', fontFamily: 'monospace' };
  return {html: html, style: style };
}


