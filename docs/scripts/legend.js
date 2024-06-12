function draw_legend(map_variable) {
  let legend = document.querySelector('#legend');
  legend.innerHTML = ''
  if(STATE) { 
    let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0]
    legend.innerHTML = `<span ${theme.tooltip != "" ? 'data-tooltip="'+theme.tooltip+'"' : '' } class="short">${theme.label}</span>`
    let legend_container = document.createElement('div');
    legend_container.setAttribute('id','legend-container');
    theme.legend.forEach(l => {
      let legend_box = document.createElement('div')
      legend_box.style.backgroundColor = chroma.rgb(theme.color(l)).hex()
      legend_box.setAttribute('class','legend-box')
      legend_box.innerHTML = theme.legend_format(l)
      legend_container.append(legend_box)
    })
    legend.append(legend_container)
    legend.style.display = 'block' 
  }
}
