let MAP = {};
let INITIAL_STATE = { latitude: -19.14862, longitude: 147.07058, zoom: 4.87112, pitch: 0, bearing: 0 };
let color_scale = chroma.scale(["#fee6ce", "#fdae6b", "#e6550d"]);
let COLOR_BY = 'rental_vulnerability_index_2021';
let COLOR_BY_INPUT = document.querySelector('#color-by-input');

COLOR_BY_INPUT.addEventListener('change', function() { 
  COLOR_BY = this.value;
  MAP.setProps( { layers: get_layers() } );
});

MAP = new deck.DeckGL({ 
  initialViewState: INITIAL_STATE,
  container: 'map-container', 
  mapStyle: 'base.json',
  controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
  getTooltip: ({object}) => object && generate_tooltip(object),
  layers: get_layers()
});

function get_layers() { 
  return ([
    new deck.MVTLayer({
      id: 'rental_vulnerability_index',
      data : `tiles/{z}/{x}/{y}.pbf`, 
      minZoom: 1, maxZoom: 11,
      pickable: true,
      uniqueIdProperty: 'postcode', 
      autoHighlight: true,
      highlightColor: [255, 0, 0],
      opacity: 0.5,
      lineWidthUnits: 'pixels',
      getLineWidth: 1,
      getLineColor: [0, 0, 0], 
      getFillColor: i => color_scale(i.properties[COLOR_BY]).rgb(),
      onClick: (i,e) => { console.log(i.object.properties) },
      getFilterValue: 1, 
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
      updateTriggers: { getFillColor: [COLOR_BY] }
    })
  ]);
}


function generate_tooltip(object) {
  let html = `Postcode: ${object.properties.postcode} <br> ${COLOR_BY_INPUT.selectedOptions[0].text}: ${object.properties[COLOR_BY]}`;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '0.7em', fontFamily: 'monospace' };
  return {html: html, style: style };
}
