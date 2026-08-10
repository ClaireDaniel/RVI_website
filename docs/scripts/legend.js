function draw_legend(map_variable) {
  console.log(map_variable);
  let legend = document.querySelector('#legend');
  legend.innerHTML = '';

  // Legend is only rendered when a specific state view is active
  if (STATE) {

    // Find the currently active theme indicator from the global THEMES list
    let theme = THEMES.map(a => a.items).flat().filter(f => f.id == THEME)[0];

    // Set the legend title and optional tooltip
    legend.innerHTML = `<span ${theme.tooltip != "" ? 'data-tooltip="'+theme.tooltip+'"' : '' } class="short">${theme.label}</span>`;

    let legend_container = document.createElement('div');
    legend_container.setAttribute('id', 'legend-container');

    // Apply a stacked vertical layout if the indicator is categorical
    if (theme.type === 'categorical') {
      legend_container.style.display = 'flex';
      legend_container.style.flexDirection = 'column';
      legend_container.style.alignItems = 'flex-start';
    }

    // Generate the color keys based on the theme's legend data
    theme.legend.forEach(l => {
      let legend_box = document.createElement('div');

      // Categorical themes use their own colour function
      if (theme.type === 'categorical') {
        legend_box.style.backgroundColor =
          chroma.rgb(theme.color(l)).hex();
      }

      // Numerical themes use the same class breaks as the map
      else {
        legend_box.style.backgroundColor =
          chroma.rgb(classColor(l, theme.legend, theme.reverse)).hex();
      }

      legend_box.setAttribute('class', 'legend-box');

      // Ensure consistent width for categorical labels
      if (theme.type === 'categorical') {
        legend_box.style.minWidth = '140px';
      }

      // Format the label text
      legend_box.innerHTML = theme.legend_format(l);

      legend_container.append(legend_box);
    });

    legend.append(legend_container);
    legend.style.display = 'block';
  }
}
