function draw_legend(map_variable) {
  console.log(map_variable);
  let legend = document.querySelector('#legend');
  legend.innerHTML = ''
  if(STATE) { 
    let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0]
    console.log(theme)
    legend.innerHTML = `<span ${theme.tooltip != "" ? 'data-tooltip="'+theme.tooltip+'"' : '' } class="short">${theme.label}</span>`
    let legend_container = document.createElement('div');
    legend_container.setAttribute('id','legend-container');

    // 👇 tiny addition for stacked layout
    if (theme.type === 'categorical') {
      legend_container.style.display = 'flex';
      legend_container.style.flexDirection = 'column';
      legend_container.style.alignItems = 'flex-start';
    }

    theme.legend.forEach(l => {
      let legend_box = document.createElement('div')
      legend_box.style.backgroundColor = chroma.rgb(theme.color(l)).hex()
      legend_box.setAttribute('class','legend-box')
      if (theme.type === 'categorical') legend_box.style.minWidth = '140px'; 
      legend_box.innerHTML = theme.legend_format(l)
      legend_container.append(legend_box)
    })
    legend.append(legend_container)
    legend.style.display = 'block' 
  }
}
