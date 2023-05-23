const URL_PARAMS = new URLSearchParams(window.location.search)
const STATE = URL_PARAMS.get('state')

let SETTINGS = {
  qld: {
    view: { latitude: -19.14862, longitude: 147.07058, zoom: 4.9, pitch: 0, bearing: 0 },
    title: 'Queensland Rental Vulnerability Index',
    description: '<details><summary>About</summary><p>This project was commissioned by Tenants Queensland to help plan the delivery of tenant advice services by the Queensland Statewide Tenant Advice and Referral Service (QSTARS).  The project defines \'rental vulnerability\' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice.  Thirteen indicators of rental vulnerability are identified, in two broad groups: \'housing indicators\' and \'people indicators\'.  All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately.  Please click for <a href="https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/">more information and methodology</a>.  The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj of City Futures Research Centre and Dr Laurence Troy from University of Sydney.  The QSTARS programs is managed by Tenants Queensland and funded by the Queensland Department of Housing and Public Works.  Funding for the project was provided by the Queensland Government.</p></details>',
    data_sources: '<details><summary>Data Sources</summary><p>Rental bond data sourced from Residential Tenancies Authority, Queensland.  Social housing, residential services and manufactured home sites data were sourced from the Queensland Government\'s open data portal.  Other population and housing statistics were sourced from Australian Bureau of Statistics, Census of Population and Housing 2011 and 2016.  ABS Average Weekly Earnings were used to adjust Census incomes data for affordability indicators (2012 to 2015).  Affordability and rent stress layers were produced by Laurence Troy and Chris Martin, City Futures Research Centre, UNSW Sydney.  Rental Vulnerability Index (RVI) was produced by Laurence Troy and Chris Martin. Full details of the methodology can be found here.</p></details>',
    logos: ['images/qld_gov.jpg','images/tq.jpg','images/qstars.jpg']
  },
  nsw: {
    view: {latitude: -31.73846, longitude: 148.36798, zoom: 5.5, pitch: 0, bearing: 0 },
    title: 'New South Wales Rental Vulnerability Index',
    description: '<details><summary>About</summary><p> Text for NSW</p></details>',
    data_sources: '<details><summary>Data Sources</summary><p> Text for NSW</p></details>',
    logos: ['','','']
  }
}

let MAP = {};
let COLOR_SCALE = chroma.scale(["#fee6ce", "#fdae6b", "#e6550d"]);
let YEAR = '2021';
document.querySelector('#year-input').addEventListener('change', function() { 
  YEAR = this.value;
  MAP.setProps( { layers: get_layers() } );
});

function draw_map() {
  MAP = new deck.DeckGL({ 
    initialViewState: SETTINGS[STATE].view,
    container: 'map-container', 
    mapStyle: 'libs/base.json',
    controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
    getTooltip: ({object}) => object && generate_tooltip(object),
    layers: get_layers()
  });
}

function draw_branding() {
  document.querySelector('#info-container').style.display = 'block' 
  document.querySelector('#title').innerHTML = SETTINGS[STATE].title;
  document.querySelector('#about').innerHTML = SETTINGS[STATE].description;
  document.querySelector('#data-sources').innerHTML = SETTINGS[STATE].data_sources;
  SETTINGS[STATE].logos.forEach((url, i) => {
    document.querySelector('#logos').innerHTML += `<img class='logo' src="${url}"></img>`;
  });

}

function draw_controls() {
  document.querySelector('#ui-container').style.display = 'block' 
}

function get_layers() { 
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
      getLineWidth: 1,
      getLineColor: [0, 0, 0, 50], 
      getFillColor: i => COLOR_SCALE(i.properties.rvi).rgb(),
      onClick: (i,e) => { console.log(i.object.properties) },
      getFilterValue: i => i.properties.year == YEAR && i.properties.state == STATE ? 1 : 0, 
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
      updateTriggers: { 
        getFillColor: [YEAR],
        getFilterValue: [YEAR]
      }
    })
  ]);
}

function generate_tooltip(object) {
  let html = `Postcode: ${object.properties.postcode} <br> `;
  let style = { color:'#fff', backgroundColor: '#000', fontSize: '0.7em', fontFamily: 'monospace' };
  return {html: html, style: style };
}

function draw_overlay() {
  document.querySelector('#overlay').style.display = 'flex'
}

if(STATE) {
  draw_map();
  draw_branding();
  draw_controls();
} else {
  draw_overlay();
}
