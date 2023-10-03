
function draw_controls() {
  let controls = document.querySelector('#controls');
  let controls_container;
  (controls_container = document.createElement('div')).setAttribute('class','side-panel-sections');
  controls.appendChild(controls_container);

  let year;
  (year = document.createElement('div')).setAttribute('class','year controls-row');
  year.innerHTML += `<input type="radio" name="year" value="2011" id="year-2011" /><label for="year-2011"> 2011 </label>`;
  year.innerHTML += `<input type="radio" name="year" value="2016" id="year-2016" /><label for="year-2016"> 2016 </label>`;
  year.innerHTML += `<input type="radio" name="year" value="2021" id="year-2021" checked /><label for="year-2021"> 2021 </label>`;
  controls_container.appendChild(year);
  document.querySelectorAll('.year>input').forEach(input => {
    input.addEventListener('change', function() { 
      YEAR = document.querySelector('input[name="year"]:checked').value;
      MAP.setProps( { layers: layer_postcode() } );
      draw_info_panel(SELECTED);
    });
  });


  let search, search_datalist, search_input;
  (search = document.createElement('div')).setAttribute('class','search controls-row');
  (search_datalist = document.createElement('datalist')).setAttribute('id','search-datalist');
  (search_input = document.createElement('input')).setAttribute('id','search');
  search_input.setAttribute('list','search-datalist'); 
  search_input.setAttribute('name','search'); 
  search_input.setAttribute('placeholder','Search Suburbs/Postcodes'); 
  search_input.addEventListener('click',(e) => { e.target.value = '' });
  search.appendChild(search_input);
  DATA.filter(a => a.state == STATE && a.year == YEAR).forEach((option,i) => {
    search_datalist.innerHTML += `<option value=${option.postcode}>${option.suburbs}</option>`
  });
  search_input.addEventListener('change', function(e) { 
    toggle_postcode_selection(this.value);
    e.target.value = '';
  })
  search.appendChild(search_datalist);
  controls_container.appendChild(search);

  let theme_values = [
    {label: "Rental Vulnerability Index", value: "rvi"},
    {label: "Rent Stress", value: "rent_stress"},
    {label: "Number of Renters", value: "total_renters"},
    {label: "Bonds Held", value: `${YEAR}_12`},
    {label: "Median Rent", value: `${YEAR.slice(-2)}_m_rent`},
    {label: "Unaffordable Rentals", value: `unaff_${YEAR==2016 ? 2017 : YEAR}`},
    {label: "Public/Community Housing", value: "public_community"},
    {label: "Boarding Houses", value: "boardinghouse"},
    {label: "Residential Parks", value: "residential_park"},
    {label: "Owner Occupied", value: "own_occ"},
    {label: "Rented", value: "rented"},
    {label: "Other Tenure", value: "other_tenure"},
    {label: "Tenure Not Stated", value: "tenurenotstated"},
    {label: "Younger", value: "young"},
    {label: "Older", value: "older"},
    {label: "Unemployed", value: "unemployed"},
    {label: "Single Parent", value: "single_parent"},
    {label: "Lower Education Level", value: "low_ed"},
    {label: "Need of Assistance", value: "assist"},
    {label: "Indigenous", value: "indig"},
    {label: "English", value:"english"},
    {label: "Spanish", value: "spanish"},
    {label: "Arabic", value: "arabic"},
    {label: "Hindi", value: "hindi"},
    {label: "Punjabi", value: "punjabi"},
    {label: "Vietnamese", value: "vietnamese"},
    {label: "Japanese", value: "japanese"},
    {label: "Korean", value: "korean"},
    {label: "Mandarin", value: "mandarin"},
    {label: "Samoan", value: "samoan"},
    {label: "Tagalog", value: "tagalog"},
    {label: "Other", value: "all_otherlang"}
  ]

  let theme, theme_input;
  (theme = document.createElement('div')).setAttribute('class','theme controls-row');
  (theme_input = document.createElement('select')).setAttribute('id','theme');
  theme_input.setAttribute('name','theme'); 
  theme_values.forEach((theme_value,i) => {
    theme_input.innerHTML += `<option value=${theme_value.value}>${theme_value.label}</option>`
  });
  theme_input.addEventListener('change', function(e) { 
    THEME = e.target.value
    MAP.setProps({layers: layer_postcode()});
  })
  theme.appendChild(theme_input);
  controls_container.appendChild(theme);


  controls.style.display = 'block';
  return(controls);
}
