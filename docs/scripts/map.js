let MAP = new deck.DeckGL({ 
  initialViewState: SETTING.view,
  container: 'map-container', 
  mapStyle: 'libs/base.json',
  controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
  getTooltip: ({object}) => {if(object) { return(STATE ? tooltip_postcode(object) : tooltip_state(object))}},
  layers: STATE ? layer_postcode() : layer_state()
})
let LEGEND = legend('rvi');

function layer_postcode() { 
  return ([
    new deck.MVTLayer({
      id: 'rental_vulnerability_index',
      data : `tiles/{z}/{x}/{y}.pbf`, 
      minZoom: 1, maxZoom: 11,
      pickable: true,
      uniqueIdProperty: 'id', 
      autoHighlight: true,
      highlightColor: [255, 0, 0],
      opacity: 0.5,
      lineWidthUnits: 'pixels',
      getLineWidth: i =>  SELECTED.indexOf(i.properties.postcode) < 0 ? 1 : 3 , 
      getLineColor: i => SELECTED.indexOf(i.properties.postcode) < 0 ? [0, 0, 0, 50] : [255, 0, 0] , 
      getFillColor: i => COLOR_SCALE(i.properties.rvi).rgb(),
      onClick: (i,e) => { toggle_postcode_selection(i.object.properties.postcode); },
      getFilterValue: i => i.properties.year == YEAR && i.properties.state == STATE ? 1 : 0, 
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
      updateTriggers: { 
        getFillColor: [YEAR],
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
  let html = `Postcode: ${object.properties.postcode} <br> `;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '0.7em', fontFamily: 'monospace' };
  return {html: html, style: style };
}

function tooltip_state(object) {
  let html = `${object.properties.STATE_NAME} <br> `;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '1em', fontFamily: 'monospace' };
  return {html: html, style: style };
}

function legend(map_variable) {

}
