let INFO_PANEL = draw_info_panel(SELECTED);

function draw_info_panel (postcodes) {
  let info_panel = document.querySelector('#info-panel');
  info_panel.innerHTML = '';
  let info_panel_container;
  (info_panel_container = document.createElement('div')).setAttribute('class','side-panel-sections');
  info_panel.appendChild(info_panel_container);


  info_panel.style.display = postcodes.length > 0 ? 'block' : 'none';
  return(info_panel);
}
