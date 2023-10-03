let SETTINGS = {
  qld: {
    view: { latitude: -19.14862, longitude: 147.07058, zoom: 4.9},
    title: 'Queensland Rental Vulnerability Index',
    about: "This project was commissioned by Tenants Queensland to help plan the delivery of tenant advice services by the Queensland Statewide Tenant Advice and Referral Service (QSTARS). It is the third iteration of the project, updating previous iterations with data from the latest Census year (2021).<br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original project report for more <a href=\"https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/\">information and methodology</a>. <br><br>The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj (City Futures Research Centre, UNSW Sydney) and Dr Laurence Troy (University of Sydney). <br><br>The Queensland RVI was conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy, and is owned by Tenants Queensland. The QSTARS program is managed by Tenants Queensland and funded by the Queensland Government. Funding for the project was provided by the Queensland Government.",
    data: "Rental bond data sourced from Residential Tenancies Authority, Queensland. Social housing, residential services and manufactured home sites data were sourced from the Queensland Government's open data portal. Other population and housing statistics were sourced from Australian Bureau of Statistics, Census of Population and Housing 2011, 2016 and 2021. ABS Average Weekly Earnings were used to adjust Census incomes data for affordability indicators in between census periods (2012 to 2021). <br><br> Affordability and rent stress calculations by Dr Laurence Troy and Dr Matthew Ng. The Rental Vulnerability Index (RVI) calculations by Dr Laurence Troy, Dr Chris Martin and Dr Matthew Ng. Full details of the methodology can be found <a href=\"https://cityfutures.ada.unsw.edu.au/research/projects/queensland-rental-vulnerability-index\">here</a>. <br><br> The outputs have been anonymised by removing absolute values lower than 15 to preserver renters privacy.",
    logos: ['images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  nsw: {
    view: {latitude: -31.73846, longitude: 148.36798, zoom: 5.5},
    title: 'New South Wales Rental Vulnerability Index',
    about: "The NSW RVI project was commissioned by the Tenants’ Union of NSW to help plan the delivery of tenant advice services in the Tenants Advice and Advocacy Program (TAAP).<br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href=\"https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/\">information and methodology</a>.<br><br>The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj (City Futures Research Centre, UNSW Sydney) and Dr Laurence Troy (University of Sydney). <br><br>The NSW RVI is based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy. The TAAP is funded by the NSW Government. Funding for the project was provided by the NSW Government.",
    data: "Rental bond data sourced from the NSW Rental Bond Board. Other population and housing statistics were sourced from Australian Bureau of Statistics, Census of Population and Housing 2011, 2016 and 2021. ABS Average Weekly Earnings were used to adjust Census incomes data for affordability indicators in between census periods (2012 to 2021).<br></br>Affordability and rent stress calculations by Dr Laurence Troy and Dr Matthew Ng. The Rental Vulnerability Index (RVI) calculations by Dr Laurence Troy, Dr Chris Martin and Dr Matthew Ng. Full details of the methodology can be found <a href=\"https://cityfutures.ada.unsw.edu.au/research/projects/queensland-rental-vulnerability-index\">here</a>. <br><br> The outputs have been anonymised by removing absolute values lower than 15 to preserver renters privacy.",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  default: {
    view: {latitude: -25.01, longitude: 150.29 , zoom: 4.1},
    title: 'Australian Rental Vulnerability Index',
    about: "The Rental Vulnerability Index (RVI) ranks postcodes by \‘rental vulnerability\’.<br><br>Rental vulnerability is the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>The RVI was originally conceived in 2017 by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy for use by Tenants Queensland and the Queensland Statewide Tenants Advice and Referral Service (QSTARS) as a tool for service planning and advocacy. In 2023 the Tenants’ Union of NSW commissioned an RVI for New South Wales. We look forward to opportunities for developing RVIs for other Australian states and territories.",
    data: "Australian Bureau of Statistics (ABS) Census of Population and Housing, and Average Weekly Earnings, 2011, 2016 and 2021.<br><br>Rental bond data and other administrative data from Queensland and New South Wales government agencies.",
    logos: ['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click a state on the map to see detailed postcode level Rental Vulnerability Index for the state.'
  }
}

let COLOR_SCALE = chroma.scale('OrRd').classes(5);
let SELECTED = []
let MAX_SELECTIONS = 2; 
let YEAR = '2021';
let THEME = 'rvi';

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
