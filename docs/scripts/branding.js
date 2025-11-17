function draw_branding(state) {
  let branding = document.querySelector('#branding');
  let title, about, data, logos;
  (title = document.createElement('div')).setAttribute('id','branding-title');
  (about = document.createElement('div')).setAttribute('id','branding-about');
  (data = document.createElement('div')).setAttribute('id','branding-data');
  (logos = document.createElement('div')).setAttribute('id','branding-logos');
  (funding = document.createElement('div')).setAttribute('id','branding-logos');
  title.setAttribute('class','side-panel-sections');
  about.setAttribute('class','side-panel-sections');
  data.setAttribute('class','side-panel-sections');
  logos.setAttribute('class','side-panel-sections');
  
  title.innerHTML = state.title;
  about.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">About</summary><p id="about-content">${state.about}</p></details>`;
  data.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">Data Sources</summary><p>${state.data}</p></details>`;
  funding.innerHTML = `<details${STATE?'':'open'}><summary id="panel-subtitle">Funding</summary><p>This research was funded through Australian Research Council (ARC) Linkage Grant (GA388185)</p></details>`;
 
  branding.appendChild(title);
  let instruction = document.createElement('div');
  instruction.setAttribute('id','branding-instruction');
  instruction.setAttribute('class','side-panel-sections');
  instruction.innerHTML = state.instruction;
  branding.appendChild(instruction);
 
  branding.appendChild(about);

  // Populate logos container
  // (clear in case draw_branding is called multiple times)
  logos.innerHTML = '';
  state.logos.forEach((url, i) => {
    const img = document.createElement('img');
    img.className = 'branding-logo';
    img.src = url;
    img.alt = `logo-${i+1}`;
    logos.appendChild(img);
  });



  // Append logos block right 
 // Then append Data block
  branding.appendChild(data);
 // Append logos block right after About

 if (state == 'default'){
    branding.appendChild(logos);
    funding.setAttribute('class','side-panel-sections');
    branding.append(funding);
 }

  
  branding.style.display = 'block';
  if(STATE) {
    let home
    (home = document.createElement('a')).setAttribute('id','branding-home');
    home.href = './'
    title.appendChild(home);
  }
  return(branding)
}
