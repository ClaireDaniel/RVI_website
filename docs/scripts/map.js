function layer_postcode() { 
  let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0]
  return ([
    new deck.MVTLayer({
      id: 'rental_vulnerability_index',
      data : `tiles/{z}/{x}/{y}.pbf`, 
      minZoom: 1, maxZoom: 11,
      pickable: true,
      uniqueIdProperty: 'id', 
      autoHighlight: true,
      highlightColor: [0, 0, 255],
      opacity: 0.5,
      lineWidthUnits: 'pixels',
      getLineWidth: i =>  SELECTED.indexOf(i.properties.sa2_code) < 0 ? 1 : 3 , 
      getLineColor: i => SELECTED.indexOf(i.properties.sa2_code) < 0 ? [0, 0, 0, 50] : [0, 0, 255] , 
      getFillColor: i => theme.color(theme.value(i.properties)),
      onClick: (i,e) => { toggle_postcode_selection(i.object.properties.sa2_code); },
      getFilterValue: i => i.properties.year == YEAR && i.properties.state == STATE ? 1 : 0, 
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
  let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0]
  let html = `SA2 Name: ${object.properties.sa2_name} <br> SA2 Code: ${object.properties.sa2_code} <br> ${theme.label}: ${theme.format(object.properties)}`;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '1em', fontFamily: 'monospace',fontWeight: 'bold' };
  return {html: html, style: style };
}

function tooltip_state(object) {
  let html = `${object.properties.STATE_NAME} <br> `;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '1em', fontFamily: 'monospace' };
  return {html: html, style: style };
}


