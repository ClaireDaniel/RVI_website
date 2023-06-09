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
let SELECTED = []
let MAX_SELECTIONS = 3; 
let YEAR = '2021';

const URL_PARAMS = new URLSearchParams(window.location.search)
const STATE = URL_PARAMS.get('state')
const SETTING = STATE ? SETTINGS[STATE] : SETTINGS.default;

let DATA, BRANDING, CONTROLS, INFO_PANEL, MAP, LEGEND;
(async () => {
  const response = await fetch("tiles/data.json");
  DATA = await response.json();
  BRANDING = draw_branding(SETTING);
  CONTROLS = STATE ? draw_controls() : null;
  INFO_PANEL = draw_info_panel(SELECTED);
  MAP = new deck.DeckGL({ 
    initialViewState: SETTING.view,
    container: 'map-container', 
    mapStyle: 'libs/base.json',
    controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
    getTooltip: ({object}) => {if(object) { return(STATE ? tooltip_postcode(object) : tooltip_state(object))}},
    layers: STATE ? layer_postcode() : layer_state()
  })
  LEGEND = draw_legend('rvi');
})();
