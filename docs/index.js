let SETTINGS = {
  qld: {
    view: { latitude: -19.14862, longitude: 147.07058, zoom: 4.9},
    title: 'Queensland Rental Vulnerability Index',
    about: 'This project was commissioned by Tenants Queensland to help plan the delivery of tenant advice services by the Queensland Statewide Tenant Advice and Referral Service (QSTARS).  The project defines \'rental vulnerability\' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice.  Thirteen indicators of rental vulnerability are identified, in two broad groups: \'housing indicators\' and \'people indicators\'.  All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately.  Please click for <a href="https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/">more information and methodology</a>.  The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj of City Futures Research Centre and Dr Laurence Troy from University of Sydney.  The QSTARS programs is managed by Tenants Queensland and funded by the Queensland Department of Housing and Public Works.  Funding for the project was provided by the Queensland Government.',
    data: 'Rental bond data sourced from Residential Tenancies Authority, Queensland.  Social housing, residential services and manufactured home sites data were sourced from the Queensland Government\'s open data portal.  Other population and housing statistics were sourced from Australian Bureau of Statistics, Census of Population and Housing 2011 and 2016.  ABS Average Weekly Earnings were used to adjust Census incomes data for affordability indicators (2012 to 2015).  Affordability and rent stress layers were produced by Laurence Troy and Chris Martin, City Futures Research Centre, UNSW Sydney.  Rental Vulnerability Index (RVI) was produced by Laurence Troy and Chris Martin. Full details of the methodology can be found here.',
    logos: ['images/qld_gov.jpg','images/tq.jpg','images/qstars.jpg']
  },
  nsw: {
    view: {latitude: -31.73846, longitude: 148.36798, zoom: 5.5},
    title: 'New South Wales Rental Vulnerability Index',
    about: 'Text for NSW.',
    data: 'Text for NSW.',
    logos: ['','','']
  },
  default: {
    view: {latitude:-23.62352, longitude:145.57219 , zoom: 4.1},
    title: 'Australian Rental Vulnerability Index',
    about: 'Common Text',
    data: 'Common Text',
    logos: ['images/qld_gov.jpg','images/tq.jpg','images/qstars.jpg']
  }
}
let COLOR_SCALE = chroma.scale(["#fee6ce", "#fdae6b", "#e6550d"]);
let YEAR = '2021';

const URL_PARAMS = new URLSearchParams(window.location.search)
const STATE = URL_PARAMS.get('state')
const SETTING = STATE ? SETTINGS[STATE] : SETTINGS.default;

document.querySelectorAll('.year>input').forEach(input => {
  input.addEventListener('change', function() { 
    YEAR = document.querySelector('input[name="year"]:checked').value;
    MAP.setProps( { layers: get_layers() } );
  });
});

let MAP = new deck.DeckGL({ 
  initialViewState: SETTING.view,
  container: 'map-container', 
  mapStyle: 'libs/base.json',
  controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
  getTooltip: ({object}) => object && generate_tooltip(object),
  layers: STATE ? get_layers() : [
    new deck.GeoJsonLayer({
      id: 'states',
      data: 'tiles/states.geojson',
      pickable: true,
      uniqueIdProperty: 'id', 
      autoHighlight: true,
      highlightColor: [255, 0, 0],
      opacity: 0.5,
      lineWidthUnits: 'pixels',
      getLineWidth: 1,
      getLineColor: [0, 0, 0, 50], 
      getFillColor: COLOR_SCALE(1).rgb() ,
      onClick: (i,e) => { window.location.href = `./?state=${i.object.properties.state}` },
      getFilterValue: i => Object.keys(SETTINGS).indexOf(i.properties.state) > -1 ? 1 : 0, 
      filterRange: [1, 1],
      extensions: [new deck.DataFilterExtension({filterSize: 1})],
    })
  ]
})

let BRANDING = draw_branding(SETTING);

if(STATE) {
  CONTROLS = draw_controls();
}


function draw_branding(state) {
  let branding = document.querySelector('#branding');
  let title, about, data, logos;
  (title = document.createElement('div')).setAttribute('id','branding-title');
  (about = document.createElement('div')).setAttribute('id','branding-about');
  (data = document.createElement('div')).setAttribute('id','branding-data');
  (logos = document.createElement('div')).setAttribute('id','branding-logos');
  title.innerHTML = state.title;
  about.innerHTML = `<details${STATE?'':'open'}><summary>About</summary><p>${state.about}</p></details>`;
  data.innerHTML = `<details${STATE?'':'open'}><summary>Data Sources</summary><p>${state.data}</p></details>`;
  state.logos.forEach((url, i) => { logos.innerHTML += `<img class='branding-logo' src="${url}"></img>`; });
  branding.appendChild(title);
  branding.appendChild(about);
  branding.appendChild(data);
  branding.appendChild(logos);
  branding.style.display = 'block';
  return(branding)
}

function draw_controls() {
  document.querySelector('#controls').style.display = 'block' 
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
