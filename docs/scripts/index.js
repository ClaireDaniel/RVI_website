let SETTINGS = {
  qld: {
    view: { latitude: -19.14862, longitude: 147.07058, zoom: 4.9},
    title: 'Queensland Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  nsw: {
    view: {latitude: -31.73846, longitude: 148.36798, zoom: 5.5},
    title: 'New South Wales Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  vic: {
    view: {latitude: -37.43653241308908, longitude: 144.8332690047882, zoom: 5.5},
    title: 'Victorian Rental Vulnerability Index',
    about: "The NSW RVI project was commissioned by the Tenants’ Union of NSW to help plan the delivery of tenant advice services in the Tenants Advice and Advocacy Program (TAAP).<br><br>The project defines 'rental vulnerability' as the vulnerability of persons to problems that may make their rental housing unaffordable, insecure or inappropriate, and which therefore indicates a need for tenant advice. Vulnerability is not inherent to persons; it reflects their position in social and economic relations. Vulnerable persons, on their own and with the assistance of advocates, can seek to resolve their housing problems and change things for the better.<br><br>Thirteen indicators of rental vulnerability are identified, in two broad groups: 'housing indicators' and 'people indicators'. All the indicators were subject to a principal component analysis to create the rental vulnerability index (RVI). Each of the indicators is also mapped separately. See the original Queensland RVI project report for more <a href=\"https://cityfutures.be.unsw.edu.au/research/projects/queensland-rental-vulnerability-index/\">information and methodology</a>.<br><br>The analysis of the data and mapping was undertaken and produced by Dr Chris Martin, Dr Matthew Ng and Dr Balamurugan Soundararaj (City Futures Research Centre, UNSW Sydney) and Dr Laurence Troy (University of Sydney). <br><br>The NSW RVI is based on the Queensland RVI, conceived by Tenants Queensland, Dr Chris Martin and Dr Laurence Troy. The TAAP is funded by the NSW Government. Funding for the project was provided by the NSW Government.",
    data: "Rental bond data sourced from the NSW Rental Bond Board. Other population and housing statistics were sourced from Australian Bureau of Statistics, Census of Population and Housing 2011, 2016 and 2021. ABS Average Weekly Earnings were used to adjust Census incomes data for affordability indicators in between census periods (2012 to 2021).<br></br>Affordability and rent stress calculations by Dr Laurence Troy and Dr Matthew Ng. The Rental Vulnerability Index (RVI) calculations by Dr Laurence Troy, Dr Chris Martin and Dr Matthew Ng. Full details of the methodology can be found <a href=\"https://cityfutures.ada.unsw.edu.au/research/projects/queensland-rental-vulnerability-index\">here</a>. <br><br> The outputs have been anonymised by removing absolute values lower than 15 to preserver renters privacy.",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
   tas: {
    view: {latitude: -42.236648275847756, longitude: 146.63847076497873, zoom: 5.5},
    title: 'Tasmanian Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  sa: {
    view: {latitude: -32.52186901737224, longitude: 135.11715896569484, zoom: 5.5},
    title: 'South Australian Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  wa: {
    view: {latitude: -26.168504043208777, longitude: 122.23741477268813, zoom: 4},
    title: 'Western Australian Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER", 
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  nt: {
    view: {latitude: -19.936101027922735, longitude: 133.55262384714197, zoom: 4},
    title: 'Northern Territory Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  act: {
    view: {latitude: -35.504758360145615, longitude: 148.9639778358947, zoom: 9},
    title: 'Northern Territory Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click on an area in the map or search by its name to see detailed postcode level information. You can also select two postcodes at a time to compare them.'
  },
  default: {
    view: {latitude: -25.9, longitude: 133.5 , zoom: 4.0}, 
    title: 'Australian Rental Vulnerability Index',
    about: "PLACEHOLDER",
    data: "PLACEHOLDER",
    logos: ['images/nsw.png','images/tn.jpg','images/qld_gov.jpg','images/tq.png','images/qstars.jpg','images/cfrc.png','images/unsw.jpg','images/usyd.jpg'],
    instruction: 'Please click a state on the map to see detailed postcode level Rental Vulnerability Index for the state.'
  }
}



let COLOR_SCALE = chroma.scale('OrRd').classes(5);
let SELECTED = []
let MAX_SELECTIONS = 2; 
let YEAR = '2021';

let THEMES = [
  { "name": "Rental Indicators",
    "items": [
      { id: 0, display: false, label: "Post Code",                  tooltip: "", value: d => d,                   color: d => d.sa2_code, format: d => d.sa2_code},
      { id: 1, display: true,  label: "Rental Vulnerability Index", tooltip: "", legend: [0,0.25,0.5,0.75,1],     legend_format: d => d.toLocaleString(undefined,{minimumfractiondigits:1, maximumfractiondigits:1}), color: c => chroma.scale('OrRd').classes(5)(c).rgb(),        value: d => d.rvi,   format: d => d.rvi.toLocaleString(undefined,{ minimumFractionDigits:2, maximumFractionDigits:2 }) },
      { id: 2, display: true,  label: "Rent Stress",                tooltip: "", legend: [0,0.07,0.14,0.21,0.28], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,0.28]).classes(5)(c).rgb(),       value: d => Number(d.rent_stress), format: d => Number(d.rent_stress).toLocaleString(undefined, {style: 'percent',  minimumFractionDigits: 0, maximumFractionDigits: 0}) },
      { id: 3, display: true,  label: "Proportion of Renters",          tooltip: "", legend: [0,0.25,0.5,0.6,0.7],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,0.5,0.75]).classes(5)(c).rgb(),   value: d => d.total_renters/d.total_persons,                                                    format: d => `${d.total_renters} (${(d.total_renters/d.total_persons).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})` },
      { id: 4, display: true,  label: "Bonds Held",                 tooltip: "", legend: [10,500,1000,3000,5000], legend_format: d => d.toLocaleString(undefined,{notation: 'compact'}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([10,1000,5000]).classes(5)(c).rgb(), value: d => d[`${YEAR}_12`],                                                                    format: d => d[`${YEAR}_12`] },
      { id: 5, display: true,  label: "Median Rent",                tooltip: "", legend: [100,250,425,575,750],   legend_format: d => d.toLocaleString(undefined,{notation: 'compact'}), color: c => c == 0 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([100,750]).classes(5)(c).rgb(),      value: d => d[`${YEAR.slice(-2)}_m_rent`],                                                      format: d => `$ ${d[YEAR.slice(-2)+'_m_rent']} pw` },
      { id: 6, display: true,  label: "Affordable Rentals",       tooltip: "", legend: [0,25,50,75,100],        legend_format: d => (d/100).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: c => c == 100 ? [200, 200, 200, 0.5] : chroma.scale('OrRd').domain([0,100]).classes(5)(100-c).rgb(),        value: d => 100 - d[`unaff_${YEAR==2016 ? 2017 : YEAR}`],                                             format: d => { let val = (100 - d[`unaff_${YEAR==2016 ? 2017 : YEAR}`])/100; return val.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2}) } }
    ]
  },
  { "name": "Dwelling Indicators",
    "items": [
      { id: 7, display: true,  label: "Public/Community Housing", tooltip: "", legend: [0,0.025,0.05,0.075,0.10],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.10])(d).rgb(), value: d => d.public_community/d.total_dwellings, format: d => `${d.public_community} (${(d.public_community/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 8, display: true,  label: "Boarding Houses",          tooltip: "", legend: [0,0.0025,0.005,0.0075,0.01], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.01])(d).rgb(), value: d => d.boardinghouse/d.total_dwellings,    format: d => `${d.boardinghouse} (${(d.boardinghouse/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 9, display: true,  label: "Residential Parks",        tooltip: "", legend: [0,0.025,0.05,0.075,0.10],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.10])(d).rgb(), value: d => d.residential_park/d.total_dwellings, format: d => `${d.residential_park} (${(d.residential_park/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 10, display: true, label: "Owner Occupied",           tooltip: "", legend: [0,0.2,0.4,0.6,0.8],          legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.25,0.80])(d).rgb(), value: d => d.own_occ/d.total_dwellings,          format: d => `${d.own_occ} (${(d.own_occ/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 11, display: true, label: "Rented",                   tooltip: "", legend: [0,0.125,0.25,0.375,0.50],    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.50])(d).rgb(), value: d => d.rented/d.total_dwellings,           format: d => `${d.rented} (${(d.rented/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 12, display: true, label: "Other Tenure",             tooltip: "", legend: [0,0.037,0.075,0.112,0.15],   legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.00,0.15])(d).rgb(), value: d => d.other_tenure/d.total_dwellings,     format: d => `${d.other_tenure} (${((d.other_tenure)/d.total_dwellings).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`}
    ]
  },
  { "name": "People Indicators",
    "items": [
      { id: 14, display: true, label: "Younger",               tooltip: "Number of renters aged 15 to 24 (Census)", legend: [0,0.06,0.12,0.19,0.25],                                    legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.young/d.total_renters,         format: d => `${d.young} (${(d.young/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 15, display: true, label: "Older",                 tooltip: "Number of renters aged 65 and over at (Census)", legend: [0,0.06,0.12,0.19,0.25],                              legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.older/d.total_renters,         format: d => `${d.older} (${(d.older/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 16, display: true, label: "Unemployed",            tooltip: "Number of renters unemployed (census)", legend: [0,0.25,0.05,0.07,0.10],                                       legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.10])(d).rgb(), value: d => d.unemployed/d.total_renters,    format: d => `${d.unemployed} (${(d.unemployed/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 17, display: true, label: "Single Parent",         tooltip: "Number of households classified as one parent family (Census)",                                                legend: [0,0.06,0.12,0.19,0.25], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.single_parent/d.total_renters, format: d => `${d.single_parent} (${(d.single_parent/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 18, display: true, label: "Lower Education Level", tooltip: "Number of renters where highest level of education attained is Year 10 or below (Census)",                     legend: [0,0.06,0.12,0.19,0.25], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.25])(d).rgb(), value: d => d.low_ed/d.total_renters,        format: d => `${d.low_ed} (${(d.low_ed/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 19, display: true, label: "Need of Assistance",    tooltip: "Needs assistance with a core activity, because of long-term health condition, disability or old age (Census)", legend: [0,0.05,0.10,0.15,0.20], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.20])(d).rgb(), value: d => d.assist/d.total_renters,        format: d => `${d.assist} (${(d.assist/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 20, display: true, label: "Indigenous",            tooltip: "Household contains at least one person who is Aboriginal or Torres Strait Islander (Census)",                  legend: [0,0.12,0.25,0.37,0.50], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.50])(d).rgb(), value: d => d.indig/d.total_renters,         format: d => `${d.indig} (${(d.indig/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
     ]
  },     
  { "name": "Languages Spoken",
    "items": [
      { id: 21, display: true, label: "English",    tooltip:"Main language used at home (Census)", legend: [0.75,0.837,0.875,0.937,1], legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0.75,1])(d).rgb(),      value: d => d.english/d.total_renters,        format: d => `${d.english} (${(d.english/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 22, display: true, label: "Spanish",    tooltip:"Main language used at home (Census)", legend: [0,0.025,0.05,0.15,0.25],   legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.05,0.25])(d).rgb(), value: d => d.spanish/d.total_renters,        format: d => `${d.spanish} (${(d.spanish/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 23, display: true, label: "Arabic",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.arabic/d.total_renters,         format: d => `${d.arabic} (${(d.arabic/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 24, display: true, label: "Hindi",      tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.hindi/d.total_renters,          format: d => `${d.hindi} (${(d.hindi/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 25, display: true, label: "Punjabi",    tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.punjabi/d.total_renters,        format: d => `${d.pubjabi} (${(d.punjabi/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 26, display: true, label: "Vietnamese", tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.vietnamese/d.total_renters,     format: d => `${d.vietnamese} (${(d.vietnamese/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 27, display: true, label: "Japanese",   tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.japanese/d.total_renters,       format: d => `${d.japanese} (${(d.japanese/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 28, display: true, label: "Korean",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.korean/d.total_renters,         format: d => `${d.korean} (${(d.korean/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 29, display: true, label: "Mandarin",   tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.mandarin/d.total_renters,       format: d => `${d.mandarin} (${(d.mandarin/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 30, display: true, label: "Samoan",     tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.samoan/d.total_renters,         format: d => `${d.samoan} (${(d.samoan/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 31, display: true, label: "Tagalog",    tooltip:"Main language used at home (Census)", legend: [0,0.01,0.02,0.15,0.25],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.02,0.25])(d).rgb(), value: d => d.tagalog/d.total_renters,        format: d => `${d.tagalog} (${(d.tagalog/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`},
      { id: 32, display: true, label: "Other",      tooltip:"Main language used at home (Census)", legend: [0,0.025,0.05,0.275,0.50],  legend_format: d => d.toLocaleString(undefined,{style: 'percent', minimumfractiondigits:1, maximumfractiondigits:1}), color: d => chroma.scale('OrRd').domain([0,0.05,0.50])(d).rgb(), value: d => d.all_other_lang/d.total_renters, format: d => `${d.all_other_lang} (${(d.all_other_lang/d.total_renters).toLocaleString(undefined,{style: 'percent', minimumfractiondigits:2, maximumfractiondigits:2})})`}
    ]
  },
  { "name": "Area Name",
    "items": [
      { id: 33, display: false, label: "SA2 Name", tooltip: "", value: d => d, color: d => d.sa2_name, format: d => d.sa2_name},
    ]
  }
]

let THEME = 1;

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
  draw_legend();
})();
