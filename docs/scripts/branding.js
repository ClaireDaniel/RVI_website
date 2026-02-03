function draw_branding(state) {
  let branding = document.querySelector('#branding');
  let title, about, data;

  (title = document.createElement('div')).setAttribute('id','branding-title');
  (about = document.createElement('div')).setAttribute('id','branding-about');
  (data = document.createElement('div')).setAttribute('id','branding-data');

  title.setAttribute('class','side-panel-sections');
  about.setAttribute('class','side-panel-sections');
  data.setAttribute('class','side-panel-sections');

  // Retrieve logo urls to add to about section
  let logos = '';
  state.logos.forEach((url, i) => {
    logos += `<img class="branding-logo" src="${url}" alt="logo-${i + 1}">`;
  });

  // Populate HTML for info sections
  title.innerHTML = state.title;
  about.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">About</summary><p id="about-content">${state.about}<br>${logos}</p></details>`;
  data.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">Data Sources</summary><p>${state.data}</p></details>`;
 
  branding.appendChild(title);
  let instruction = document.createElement('div');
  instruction.setAttribute('id','branding-instruction');
  instruction.setAttribute('class','side-panel-sections');
  instruction.innerHTML = state.instruction;
  branding.appendChild(instruction);
  branding.appendChild(about);
  branding.appendChild(data);

  branding.style.display = 'block';

  if(STATE) {
    let home
    (home = document.createElement('a')).setAttribute('id','branding-home');
    home.href = './'
    title.appendChild(home);
  }
  return(branding)
}
