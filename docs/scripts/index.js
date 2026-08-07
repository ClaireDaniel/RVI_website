/*
 * CONFIGURATION: State-specific settings
 * Includes map coordinates, branding text, and associated logos
*/ 

let SETTINGS = {
  qld: {
    view: { latitude: -19.14862, longitude: 147.07058, zoom: 4.9},
    title: 'Queensland Rental Vulnerability Index',
    about: "The original QLD RVI project was commissioned by Tenants Queensland to help plan the delivery of tenant advice services by the Queensland Statewide Tenant Advice and Referral Service (QSTARS). It is the third iteration of the project, updating previous iterations with data from the latest Census year (2021).<br> <br> The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better. <br> <br> Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original project report for more <a href='https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/'> information and methodology</a>. <br> <br> The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj (City Futures Research Centre, UNSW Sydney) and Dr Laurence Troy (University of Sydney). <br> The Queensland RVI was conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy, and is owned by Tenants Queensland. The QSTARS program is managed by Tenants Queensland and funded by the Queensland Government. Funding for the project was provided by the Queensland Government.<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) ‘Census of Population and Housing' <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos: ['images/qld_gov.jpg','images/tq.png','images/qstars.jpg', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  nsw: {
    view: {latitude: -31.73846, longitude: 148.36798, zoom: 5.5},
    title: 'New South Wales Rental Vulnerability Index',
    about: "The NSW RVI project was commissioned by the Tenants' Union of NSW to help plan the delivery of tenant advice services in the Tenants Advice and Advocacy Program (TAAP). <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better. <br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href='https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/'> information and methodology</a>. <br><br>The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj (City Futures Research Centre, UNSW Sydney) and Dr Laurence Troy (University of Sydney). <br><br>The NSW RVI is based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy. The TAAP is funded by the NSW Government. Funding for the project was provided by the NSW Government.<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) ‘Census of Population and Housing' <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos: ['images/nsw.png','images/tn.jpg', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  vic: {
    view: {latitude: -37.43653241308908, longitude: 144.8332690047882, zoom: 5.5},
    title: 'Victorian Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) 'Census of Population and Housing' <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
   tas: {
    view: {latitude: -42.236648275847756, longitude: 146.63847076497873, zoom: 5.5},
    title: 'Tasmanian Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  sa: {
    view: {latitude: -32.52186901737224, longitude: 135.11715896569484, zoom: 5.5},
    title: 'South Australian Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) ‘Census of Population and Housing’ <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  wa: {
    view: {latitude: -26.168504043208777, longitude: 122.23741477268813, zoom: 4},
    title: 'Western Australian Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) ‘Census of Population and Housing’ <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  nt: {
    view: {latitude: -19.936101027922735, longitude: 133.55262384714197, zoom: 4},
    title: 'Northern Territory Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  act: {
    view: {latitude: -35.504758360145615, longitude: 148.9639778358947, zoom: 9},
    title: 'Australian Capital Territory Rental Vulnerability Index',
    about: "The WA, NT, SA, Vic, TAS and ACT RVI was undertaken as part of the ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants' Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href = ‘https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/>information and methodology</a>.<br><br>Analysis of the data and mapping was undertaken and produced Dr Claire Daniel (University of Sydney) and Dr Sirat Mahmuda (City Futures Research Centre, UNSW Sydney). <br><br>The WA, NT, SA, Vic, TAS and ACT RVIs are based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy.<br>",
    logos:['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed local area level information. You can also select two local areas at a time to compare them.'
  },
  default: {
    view: {latitude: -28, longitude: 145.5 , zoom: 3.5}, 
    title: 'Australian Rental Vulnerability Index',
    about: "The RVI is a composite index that maps rental vulnerability across Australia. It brings together a number of indicators, including rental stress, unemployment, disability and education levels, to show where renters may be facing the greatest challenges, and therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better. <br> <br> The RVI was originally conceived in 2017 by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy for use by Tenants Queensland and the Queensland Statewide Tenants Advice and Referral Service (QSTARS) as a tool for service planning and advocacy. In 2023 the Tenants’ Union of NSW commissioned an RVI for New South Wales. <br> <br>In 2026 the remainder of Australia was added to the map, funded by an ARC Linkage project LP230200761 between The University of Sydney, UNSW, Tenants Queensland, the Tenants’ Union of NSW, Tenants Victoria, Circle Green Community Legal (who provide legal services to residential tenants in Western Australia), Tenants Union of Tasmania, and Darwin Community Legal Service. <br> <br>Researchers on this iteration of the project were Dr Laurence Troy, Dr Sophia Maalsen, Dr Claire Daniel, Dr Danielle Hynes (University of Sydney), Dr Chris Martin, Dr Caitlyn Buckle, Dr Sirat Mahmuda and Susan Ruinaard (City Futures Research Centre, UNSW Sydney).<br>",
    data: "All analysis is derived from ABS Census data, ensuring a consistent and comprehensive national picture. <br> <br>Australian Bureau of Statistics (various reference periods, 2011–2021) ‘Census of Population and Housing’ <a href = 'https://www.abs.gov.au/census'>https://www.abs.gov.au/census</a>, ABS Websites",
    logos: ['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/tenants-vic.png', 'images/tu-tasmania.png', 'images/circle-green.png', 'images/darwin-cl.png', 'images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click a state on the map to see detailed local area level Rental Vulnerability Index for the state.'
  }
}


//CATEGORICAL MAPPINGS: Labels and Colors for vulnerability types

/*
const CATEGORY_LABELS = {
  PC_RECRENTERS: "Recently moved",
  PC_UNEMP: "Unemployed renters",
  PC_OLD: "Older renters",
  PC_YOUNG:"Young renters",
  PC_DISABILITY: "Disabled renters",
  PC_RSTRESS: "Rental Stress",
  NA: "Not applicable",
  PC_SOCIAL: "Social housing",
  PC_INDGSTAT: "Indigenous renters",
  PC_RESIPARKS: "Residential parks",
  PC_ENGLISH: "Non-english speaking renters",
  PC_BHOUSE: "Boarding houses",
  PC_LONEPARENT: "Lone parents",
  PC_LOWEDU: "Lower education"
};
*/
/*
const CATEGORY_COLORS = {
  PC_RECRENTERS: chroma('#1f78b4').rgb(),    // mid blue
  PC_UNEMP: chroma('#e31a1c').rgb(),         // red
  PC_OLD: chroma('#ff7f00').rgb(),           // orange
  PC_YOUNG: chroma('#33a02c').rgb(),         // green
  PC_DISABILITY: chroma('#6a3d9a').rgb(),    // purple
  PC_RSTRESS: chroma('#fb9a99').rgb(),       // light red
  NA: chroma('#bdbdbd').rgb(),               // grey
  PC_SOCIAL: chroma('#a6cee3').rgb(),        // light blue
  PC_INDGSTAT: chroma('#b15928').rgb(),      // brown
  PC_RESIPARKS: chroma('#cab2d6').rgb(),     // lavender
  PC_ENGLISH: chroma('#fdbf6f').rgb(),       // yellow-orange
  PC_BHOUSE: chroma('#ffff99').rgb(),        // pale yellow
  PC_LONEPARENT: chroma('#b2df8a').rgb(),    // light green
  PC_LOWEDU: chroma('#fb8072').rgb()         // coral
};
*/

const CATEGORY_COLORS = {
  "Social housing residents": chroma('#a6cee3').rgb(),
  "Single parent tenants": chroma('#b2df8a').rgb(),
  "Older Tenants": chroma('#ff7f00').rgb(),
  "Unemployed tenants": chroma('#e31a1c').rgb(),
  "Mobile tenants": chroma('#1f78b4').rgb(),
  "Tenants with low education": chroma('#fb8072').rgb(),
  "Tenants with disability": chroma('#6a3d9a').rgb(),
  "Young tenants": chroma('#33a02c').rgb(),
  "Resident park residents": chroma('#cab2d6').rgb(),
  "NA": chroma('#bdbdbd').rgb(),
  "Boarding house residents": chroma('#ffff99').rgb(),
  "Stressed tenants": chroma('#fb9a99').rgb(),
  "Indigenous tenants": chroma('#b15928').rgb(),
  "Tenants not speaking English at home": chroma('#fdbf6f').rgb()
};

const CATEGORY_DOMAIN = Object.keys(CATEGORY_COLORS);
const CATEGORY_FALLBACK = [200, 200, 200];





// Array of all available category keys
//const CATEGORY_DOMAIN = Object.keys(CATEGORY_LABELS);
// Default fallback color (light grey) for missing category mappings
//const CATEGORY_FALLBACK = [200,200,200];

// GLOBAL STATE & CONSTANTS
let COLOR_SCALE = chroma.scale('OrRd').classes(5);
let SELECTED = []
let MAX_SELECTIONS = 2; 
let YEAR = '2021';

// DATA THEMES: Definitions for how to extract, color, and format map indicators
let THEMES = [
  { "name": "Rental Indicators",
    "items": [
      { id: 33, display: false, info_display: false, label: "SA2 Name", tooltip: "Name of ABS Statistical Area 2", value: d => d, color: d => d.sa2_name, format: d => d.sa2_name},
      { id: 0, display: false, info_display: false, label: "Post Code",                  tooltip: "", value: d => d,                   color: d => d.sa2_code, format: d => d.sa2_code},
      { id: 1, display: true,  info_display: true, label: "Rental Vulnerability Index", tooltip: "", legend: [0,0.25,0.5,0.75,1],     legend_format: d => d.toLocaleString(undefined,{minimumfractiondigits:1, maximumfractiondigits:1}), color: c => chroma.scale('OrRd').classes(5)(c).rgb(),        value: d => d.rvi,   format: d => d.rvi.toLocaleString(undefined,{ minimumFractionDigits:2, maximumFractionDigits:2 }) },
      //{ id: 34, display: true, info_display: false, type: "categorical", label: "Primary Vulnerability Category", domain: CATEGORY_DOMAIN, value: d => d.hcv1, color: v => chroma(CATEGORY_COLORS[v] || CATEGORY_FALLBACK).rgb(), format: d => CATEGORY_LABELS?.[d?.hcv1] ?? "N/A", legend: CATEGORY_DOMAIN, legend_format: v => CATEGORY_LABELS[v] ?? v, tooltip: "Most prominent renter vulnerability characteristic", legend_layout: 'stack'},
      //{ id: 36, display: true, type: "categorical", label: "Secondary Vulnerability Category", domain: CATEGORY_DOMAIN, value: d => d.hcv2, color: v => chroma(CATEGORY_COLORS[v] || CATEGORY_FALLBACK).rgb(), format: d => CATEGORY_LABELS?.[d?.hcv2] ?? "N/A", legend: CATEGORY_DOMAIN, legend_format: v => CATEGORY_LABELS[v] ?? v, tooltip: "Most prominent renter vulnerability characteristic", legend_layout: 'stack'},
     // { id: 37, display: true, type: "categorical", label: "Tertiary Vulnerability Category", domain: CATEGORY_DOMAIN, value: d => d.hcv3, color: v => chroma(CATEGORY_COLORS[v] || CATEGORY_FALLBACK).rgb(), format: d => CATEGORY_LABELS?.[d?.hcv3] ?? "N/A", legend: CATEGORY_DOMAIN, legend_format: v => CATEGORY_LABELS[v] ?? v, tooltip: "Most prominent renter vulnerability characteristic", legend_layout: 'stack'},
      {
        id: 34,
        display: true,
        info_display: false,
        type: "categorical",
        label: "Primary Vulnerability Category",
        domain: CATEGORY_DOMAIN,
        value: d => d.lcv1,
        color: v => chroma(CATEGORY_COLORS[v] || CATEGORY_FALLBACK).rgb(),
        format: d => d?.lcv1 ?? "N/A",
        legend: CATEGORY_DOMAIN,
        legend_format: v => v,
        tooltip: "Most prominent renter vulnerability characteristic",
        legend_layout: 'stack'
      }
    ]
  },
  { "name": "Dwelling Indicators",
    "items": [
      { id: 4, display: false,  info_display: false, label: "Bonds Held",                 tooltip: "", legend: [10,500,1000,3000,5000], legend_format: d => d.toLocaleString(undefined,{notation: 'compact'}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([10,1000,5000]).classes(5)(c).rgb(), value: d => d[`${YEAR}_12`],                                                                    format: d => d[`${YEAR}_12`] },
      { id: 5, display: true,  info_display: false, label: "Median Rent",                tooltip: "", legend: [100,250,425,575,750],   legend_format: d => d.toLocaleString(undefined,{notation: 'compact'}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([100,750]).classes(5)(c).rgb(),      value: d => d[`${YEAR.slice(-2)}_m_rent`],                                                      format: d => `$ ${d[YEAR.slice(-2)+'_m_rent']} pw` },
      
      //Chart Variable
      { id: 'ts_rent',
        display: false,
        info_display: true,
        label: "Median Rent (Trend)",
        chart: 'line',
        tooltip_h:"Shows how median weekly rent has changed over the past two Census periods (Census)"
      },

      { id: 6, display: false,  info_display: false, label: "Affordable Rentals",       tooltip: "", legend: [0,25,50,75,100],        legend_format: d => (d/100).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 100 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,100]).classes(5)(100-c).rgb(),        value: d => 100 - d[`unaff_${YEAR==2016 ? 2017 : YEAR}`],                                             format: d => { let val = (100 - d[`unaff_${YEAR==2016 ? 2017 : YEAR}`])/100; return val.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2}) } },
      { id: 2, display: true,  info_display: true, label: "Rent Stress",                tooltip: "", legend: [0,0.07,0.14,0.21,0.28], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,0.28]).classes(5)(c).rgb(),       value: d => d.rent_stress/d.total_renters, format: d => `${d.rent_stress} (${(d.rent_stress/d.rented).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 7, display: true,  info_display: true, label: "Public/Community Housing", tooltip: "", legend: [0,0.025,0.05,0.075,0.10],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.10])(d).rgb(), value: d => d.public_community/d.total_dwellings, format: d => `${d.public_community} (${(d.public_community/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 8, display: true,  info_display: true, label: "Boarding Houses",          tooltip: "", legend: [0,0.0025,0.005,0.0075,0.01], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.01])(d).rgb(), value: d => d.boardinghouse/d.total_dwellings,    format: d => `${d.boardinghouse} (${(d.boardinghouse/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 9, display: true,  info_display: true, label: "Residential Parks",        tooltip: "", legend: [0,0.025,0.05,0.075,0.10],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.10])(d).rgb(), value: d => d.residential_park/d.total_dwellings, format: d => `${d.residential_park} (${(d.residential_park/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 10, display: true, info_display: false, label: "Owner Occupied",           tooltip: "", legend: [0,0.2,0.4,0.6,0.8],          legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.25,0.80])(d).rgb(), value: d => d.own_occ/d.total_dwellings,          format: d => `${d.own_occ} (${(d.own_occ/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 11, display: true, info_display: false, label: "Rented",                   tooltip: "", legend: [0,0.125,0.25,0.375,0.50],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.50])(d).rgb(), value: d => d.rented/d.total_dwellings,           format: d => `${d.rented} (${(d.rented/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 12, display: true, info_display: false, label: "Other Tenure",             tooltip: "", legend: [0,0.037,0.075,0.112,0.15],   legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.15])(d).rgb(), value: d => d.other_tenure/d.total_dwellings,     format: d => `${d.other_tenure} (${((d.other_tenure)/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},

      //Chart Variable
      { 
        id: ["own_occ", "rented", "other_tenure", "tenurenotstated", "tenuren_a"], 
        display: false,
        info_display: true, 
        label: "Home Ownership", 
        chart: 'doughnut', 
        labels: ["Owner Occ.", "Rented", "Other", "Not Stated", "NA"], 
        tooltip: "Owned outright or subject to a mortgage" 
      },
    ]
  },
  { "name": "People Indicators (Renters)",
    "items": [
      { id: 3, display: true,  info_display: true, label: "Number of Renters",          tooltip: "", legend: [0,0.25,0.5,0.6,0.7],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,0.5,0.75]).classes(5)(c).rgb(),   value: d => d.total_renters/d.total_persons, format: d => `${d.total_renters} (${(d.total_renters/d.total_persons).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})` },
      { id: 38, display: true, info_display: true, label: "Recently Moved",          tooltip: "", legend: [0,0.05,0.1,0.15,0.2],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,0.3]).classes(5)(c).rgb(),   value: d => d.recrenters/d.total_renters, format: d => `${d.recrenters} (${(d.recrenters/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})` },
      { id: 14, display: true, info_display: true, label: "Younger",               tooltip: "Number of renters aged 15 to 24 (Census)", legend: [0,0.06,0.12,0.19,0.25],                                    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.young/d.total_renters,         format: d => `${d.young} (${(d.young/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 15, display: true, info_display: true, label: "Older",                 tooltip: "Number of renters aged 65 and over at (Census)", legend: [0,0.06,0.12,0.19,0.25],                              legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.older/d.total_renters,         format: d => `${d.older} (${(d.older/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 16, display: true, info_display: true, label: "Unemployed",            tooltip: "Number of renters unemployed (census)", legend: [0,0.25,0.05,0.07,0.10],                                       legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.10])(d).rgb(), value: d => d.unemployed/d.total_renters,    format: d => `${d.unemployed} (${(d.unemployed/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 17, display: true, info_display: true, label: "Single Parent",         tooltip: "Number of households classified as one parent family (Census)",                                                legend: [0,0.06,0.12,0.19,0.25], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.single_parent/d.total_renters, format: d => `${d.single_parent} (${(d.single_parent/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 18, display: true, info_display: true, label: "Lower Education Level", tooltip: "Number of renters where highest level of education attained is Year 10 or below (Census)",                     legend: [0,0.06,0.12,0.19,0.25], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.low_ed/d.total_renters,        format: d => `${d.low_ed} (${(d.low_ed/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 19, display: true, info_display: true, label: "Disabled",    tooltip: "Needs assistance with a core activity, because of long-term health condition, disability or old age (Census)", legend: [0,0.05,0.10,0.15,0.20], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.20])(d).rgb(), value: d => d.assist/d.total_renters,        format: d => `${d.assist} (${(d.assist/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 20, display: true, info_display: true, label: "Indigenous",            tooltip: "Household contains at least one person who is Aboriginal or Torres Strait Islander (Census)",                  legend: [0,0.12,0.25,0.37,0.50], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.50])(d).rgb(), value: d => d.indig/d.total_renters,         format: d => `${d.indig} (${(d.indig/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
    ]
  },     
  { "name": "Languages Spoken (Renters)",
    "items": [
      { id: 21, display: true, info_display: false, label: "English",    tooltip:"Main language used at home (Census)", legend: [0.75,0.837,0.875,0.937,1], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.75,1])(d).rgb(),      value: d => d.english/d.total_renters,        format: d => `${d.english} (${(d.english/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 22, display: true, info_display: false, label: "Spanish",    tooltip:"Main language used at home (Census)", legend: [0,0.025,0.05,0.15,0.25],   legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.05,0.25])(d).rgb(), value: d => d.spanish/d.total_renters,        format: d => `${d.spanish} (${(d.spanish/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 23, display: true, info_display: false, label: "Arabic",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.arabic/d.total_renters,         format: d => `${d.arabic} (${(d.arabic/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 24, display: true, info_display: false, label: "Hindi",      tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.hindi/d.total_renters,          format: d => `${d.hindi} (${(d.hindi/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 25, display: true, info_display: false, label: "Punjabi",    tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.punjabi/d.total_renters,        format: d => `${d.pubjabi} (${(d.punjabi/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 26, display: true, info_display: false, label: "Vietnamese", tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.vietnamese/d.total_renters,     format: d => `${d.vietnamese} (${(d.vietnamese/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 27, display: true, info_display: false, label: "Japanese",   tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.japanese/d.total_renters,       format: d => `${d.japanese} (${(d.japanese/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 28, display: true, info_display: false, label: "Korean",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.korean/d.total_renters,         format: d => `${d.korean} (${(d.korean/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 29, display: true, info_display: false, label: "Mandarin",   tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.mandarin/d.total_renters,       format: d => `${d.mandarin} (${(d.mandarin/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 30, display: true, info_display: false, label: "Samoan",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.samoan/d.total_renters,         format: d => `${d.samoan} (${(d.samoan/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 31, display: true, info_display: false, label: "Tagalog",    tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.tagalog/d.total_renters,        format: d => `${d.tagalog} (${(d.tagalog/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 32, display: true, info_display: false, label: "Other",      tooltip:"Main language used at home (Census)", legend: [0,0.025,0.05,0.275,0.50],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.05,0.50])(d).rgb(), value: d => d.all_other_lang/d.total_renters, format: d => `${d.all_other_lang} (${(d.all_other_lang/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      
      // COMPOSITE ITEM: Another array for the languages
      { 
        id: ["spanish", "arabic", "hindi", "punjabi", "vietnamese", "japanese", "korean", "mandarin", "samoan", "tagalog", "all_other_lang"], 
        display: false, 
        info_display: true,
        label: "Other Languages", 
        chart: 'doughnut', 
        labels: ["Spanish", "Arabic", "Hindi", "Punjabi", "Vietnamese", "Japanese", "Korean", "Mandarin", "Samoan", "Tagalog", "Other"], 
        tooltip: "Main language used at home" 
      },
    
    ]
  }
]

let THEME = 1;


/*
 * URL ROUTING: Resolve which state to load based on query parameters (e.g., ?state=qld)
*/
const URL_PARAMS = new URLSearchParams(window.location.search)
const STATE = URL_PARAMS.get('state')
const SETTING = STATE ? SETTINGS[STATE] : SETTINGS.default;

let DATA, BRANDING, CONTROLS, INFO_PANEL, MAP, LEGEND;

/*
 * INITIALIZATION: Load data and boot up the UI/Map
*/
(async () => {
  // Load geospatial data
  const response = await fetch("tiles/data.json");
  DATA = await response.json();

  // Initialize UI components
  BRANDING = draw_branding(SETTING);
  CONTROLS = STATE ? draw_controls() : null;
  INFO_PANEL = draw_info_panel(SELECTED);

  // Initialize Deck.gl map
  MAP = new deck.DeckGL({ 
    initialViewState: SETTING.view,
    container: 'map-container', 
    mapStyle: 'libs/base.json',
    controller: { touchRotate: false, dragRotate: false, doubleClickZoom: true, inertia: true },
    getTooltip: ({object}) => {if(object) { return(STATE ? tooltip_postcode(object) : tooltip_state(object))}},
    layers: STATE ? layer_postcode() : layer_state()
  })
  draw_legend();
})();

/**
 * TOOLTIP LOGIC: Handle mouse interactions for data hover effects
 */
const tooltip = document.getElementById('cursor-tooltip');

// Update tooltip position on mouse move
document.addEventListener('mousemove', e => {
  if (tooltip.style.opacity === '1') {
    tooltip.style.left = e.clientX + 12 + 'px';
    tooltip.style.top  = e.clientY + 12 + 'px';
  }
});

// Show tooltip when hovering over elements with [data-tooltip]
document.addEventListener('mouseover', e => {
  const el = e.target.closest('[data-tooltip]');
  if (!el) return;

  tooltip.textContent = el.getAttribute('data-tooltip');
  tooltip.style.opacity = '1';
});

// Hide tooltip on mouse out
document.addEventListener('mouseout', e => {
  if (e.target.closest('[data-tooltip]')) {
    tooltip.style.opacity = '0';
  }
});