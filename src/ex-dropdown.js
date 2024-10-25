class ExDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const select = document.createElement('select');
    const options = this.getAttribute('options').split(',');

    options.forEach(optionText => {
      const option = document.createElement('option');
      option.textContent = optionText.trim();
      select.appendChild(option);
    });

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --background-light: rgba(26, 92, 255, 0.05); /* Light mode background */
        --text-light: black;
        --background-dark: rgba(0, 0, 0, 0.6); /* Dark mode background */
        --text-dark: white;
        --border-color: rgba(0, 0, 0, 0.2);
      }

      :host([dark]) {
        --background: var(--background-dark);
        --text: var(--text-dark);
      }

      :host(:not([dark])) {
        --background: var(--background-light);
        --text: var(--text-light);
      }

      select {
        background-color: var(--background);
        color: var(--text);
        border: 2px solid var(--border-color);
        border-radius: 4px;
        padding: 10px;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
      }

      select:hover {
        border-color: rgba(26, 92, 255, 0.5);
      }

      .vs-select__label {
        color: var(--text);
      }

      .vs-icon-arrow {
        color: var(--text);
      }

      .vs-select__options {
        background: var(--background);
        border-radius: 4px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      }

      .vs-select__option:hover {
        background: rgba(26, 92, 255, 0.2);
        color: var(--text);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(select);
  }

  toggleDarkMode() {
    this.toggleAttribute('dark');
  }
}

customElements.define('ex-dropdown', ExDropdown);
export default ExDropdown;
