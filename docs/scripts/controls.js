
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

  controls.style.display = 'block';
  return(controls);
}
