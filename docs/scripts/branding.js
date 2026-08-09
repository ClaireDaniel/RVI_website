function draw_branding(state) {
    const branding = document.querySelector('#branding');

     // Use national/default content when it isn't defined for a state
    const main = state.main || SETTINGS.default.main;
    const about = state.about || SETTINGS.default.about;
    const data = state.data || SETTINGS.default.data;
    const howTo = state.howTo || SETTINGS.default.howTo;
    const credits = state.credits || SETTINGS.default.credits;

    // Clear existing content
    branding.innerHTML = '';

    // ----- Title -----
    const title = document.createElement('div');
    title.setAttribute('id', 'branding-title');
    title.setAttribute('class', 'side-panel-sections');
    title.innerHTML = state.title;

    branding.appendChild(title);

    // Add home link if using a state-specific page
    if (STATE) {
        const home = document.createElement('a');
        home.setAttribute('id', 'branding-home');
        home.href = './';
        title.appendChild(home);
    }

    // ----- Instruction box -----
    const instruction = document.createElement('div');
    instruction.setAttribute('id', 'branding-instruction');
    instruction.setAttribute('class', 'side-panel-sections');
    instruction.innerHTML = state.instruction;

    branding.appendChild(instruction);

    // ----- Tab navigation -----
    const tabs = document.createElement('div');
    tabs.setAttribute('class', 'branding-tabs');

   tabs.innerHTML = `
    <button class="branding-tab" data-tab="about">About</button>
    <button class="branding-tab" data-tab="data">Data</button>
    <button class="branding-tab" data-tab="instructions">How to</button>
    <button class="branding-tab" data-tab="credits">Credits</button>
    `;

    branding.appendChild(tabs);

    // ----- Tab content -----
    const tabContent = document.createElement('div');
    tabContent.setAttribute('class', 'branding-tab-content');

    // Logos
    let logos = '';
    state.logos.forEach((url, i) => {
        logos += `<img class="branding-logo" src="${url}" alt="logo-${i + 1}">`;
    });

    tabContent.innerHTML = `
        <div class="branding-tab-panel active" id="tab-main">
            <div id="branding-main">
                <p>${main}</p>
            </div>
        </div>

        <div class="branding-tab-panel" id="tab-about">
            <button class="tab-back" aria-label="Back to main">←</button>
            <div id="about-content">
                ${about}
            </div>
        </div>

        <div class="branding-tab-panel" id="tab-data">
            <button class="tab-back" aria-label="Back to main">←</button>
            ${data}
        </div>

        <div class="branding-tab-panel" id="tab-instructions">
            <button class="tab-back" aria-label="Back to main">←</button>
            ${howTo}
        </div>

        <div class="branding-tab-panel" id="tab-credits">
            <button class="tab-back" aria-label="Back to main">←</button>
            ${credits}
        </div>
    `;

    branding.appendChild(tabContent);

    // ----- Partner logos -----
    const logoBox = document.createElement('div');
    logoBox.setAttribute('id', 'branding-logos-box');

    if (state.partner) {
        logoBox.classList.add('state-logos-box');
    }

    logoBox.innerHTML = `
        ${state.partner ? `
            <p class="branding-partner">
                ${state.partner}
            </p>
        ` : ''}

        <div class="branding-logos">
            ${logos}
        </div>
    `;

    branding.appendChild(logoBox);

    // ----- Tab behaviour -----
    const tabButtons = branding.querySelectorAll('.branding-tab');
    const tabPanels = branding.querySelectorAll('.branding-tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {

            const selectedTab = button.dataset.tab;
            const isActive = button.classList.contains('active');

            // Clear everything
            tabButtons.forEach(tab => tab.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Clicking the active tab again returns to Main
            if (isActive) {
                document.querySelector('#tab-main').classList.add('active');
                return;
            }

            // Otherwise open selected tab
            button.classList.add('active');

            document
                .querySelector(`#tab-${selectedTab}`)
                .classList.add('active');
        });
    });

    // ----- Back buttons -----
    branding.querySelectorAll('.tab-back').forEach(button => {
        button.addEventListener('click', () => {

            // Remove selected state from tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));

            // Hide all panels
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Return to main/front page
            branding.querySelector('#tab-main').classList.add('active');
        });
    });

    // Make panel visible
    branding.style.display = 'block';

    return branding;
}

