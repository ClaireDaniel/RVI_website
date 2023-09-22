function draw_branding(state) {
  let branding = document.querySelector('#branding');
  let title, about, data, logos;
  (title = document.createElement('div')).setAttribute('id','branding-title');
  (about = document.createElement('div')).setAttribute('id','branding-about');
  (data = document.createElement('div')).setAttribute('id','branding-data');
  (logos = document.createElement('div')).setAttribute('id','branding-logos');
  title.setAttribute('class','side-panel-sections');
  about.setAttribute('class','side-panel-sections');
  data.setAttribute('class','side-panel-sections');
  logos.setAttribute('class','side-panel-sections');
  title.innerHTML = state.title;
  about.innerHTML = `<details${STATE?'':'open'}><summary>About</summary><p id="about-content">${state.about}<br><br></p></details>`;
  data.innerHTML = `<details${STATE?'':'open'}><summary>Data Sources</summary><p>${state.data}</p></details>`;
  branding.appendChild(title);
  branding.appendChild(about);
  branding.appendChild(data);

  state.logos.forEach((url, i) => { document.querySelector("#about-content").innerHTML += `<img class='branding-logo' src="${url}"></img>`; });
  // branding.appendChild(logos);

  let instruction = document.createElement('div');
  instruction.setAttribute('id','branding-instruction');
  instruction.setAttribute('class','side-panel-sections');
  instruction.innerHTML = state.instruction;
  branding.appendChild(instruction);
  
  
  branding.style.display = 'block';
  if(STATE) {
    let home
    (home = document.createElement('a')).setAttribute('id','branding-home');
    home.href = './'
    title.appendChild(home);
  }
  return(branding)
}
