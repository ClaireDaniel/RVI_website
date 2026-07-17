function draw_branding(state) {
  let branding = document.querySelector('#branding');
  let title, about, data;

  // Initialize main section containers
  (title = document.createElement('div')).setAttribute('id','branding-title');
  (about = document.createElement('div')).setAttribute('id','branding-about');
  (data = document.createElement('div')).setAttribute('id','branding-data');

  // Apply consistent layout classes
  title.setAttribute('class','side-panel-sections');
  about.setAttribute('class','side-panel-sections');
  data.setAttribute('class','side-panel-sections');

  // Retrieve logo urls to add to about section
  let logos = '';
  state.logos.forEach((url, i) => {
    logos += `<img class="branding-logo" src="${url}" alt="logo-${i + 1}">`;
  });

  // Populate content using collapsible <details> elements
  // Default open/closed state is determined by the global STATE variable
  title.innerHTML = state.title;
  about.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">About</summary><p id="about-content">${state.about}<br>${logos}</p></details>`;
  data.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">Data Sources</summary><p>${state.data}</p></details>`;
 
  // Construct and append the branding structure to the DOM
  branding.appendChild(title);

  let instruction = document.createElement('div');
  instruction.setAttribute('id','branding-instruction');
  instruction.setAttribute('class','side-panel-sections');
  instruction.innerHTML = state.instruction;
  branding.appendChild(instruction);
  branding.appendChild(about);
  branding.appendChild(data);

  // Make the panel visible
  branding.style.display = 'block';

  // Conditionally add home link based on global STATE configuration
  if(STATE) {
    let home
    (home = document.createElement('a')).setAttribute('id','branding-home');
    home.href = './'
    title.appendChild(home);
  }
  return(branding)
}
