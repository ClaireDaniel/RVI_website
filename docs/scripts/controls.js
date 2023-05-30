let CONTROLS = STATE ? draw_controls() : null;

function draw_controls() {
  let controls = document.querySelector('#controls');
  let controls_container;
  (controls_container = document.createElement('div')).setAttribute('class','side-panel-sections');
  controls.appendChild(controls_container);

  let year;
  (year = document.createElement('div')).setAttribute('class','year controls-row');
  year.innerHTML += `<input type="radio" name="year" value="2016" id="year-2016" /><label for="year-2016"> 2016 </label>`;
  year.innerHTML += `<input type="radio" name="year" value="2021" id="year-2021" checked /><label for="year-2021"> 2021 </label>`;
  controls_container.appendChild(year);
  document.querySelectorAll('.year>input').forEach(input => {
    input.addEventListener('change', function() { 
      YEAR = document.querySelector('input[name="year"]:checked').value;
      MAP.setProps( { layers: layer_state() } );
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
  (async () => {
    const response = await fetch("tiles/names.json");
    const options = await response.json();
    options.filter(a => a.state == STATE).forEach((option,i) => {
      search_datalist.innerHTML += `<option value=${option.postcode}>${option.suburbs}</option>`
    });
  })();
  search.appendChild(search_datalist);
  controls_container.appendChild(search);

  controls.style.display = 'block';
  return(document.querySelector('#controls'));
}
