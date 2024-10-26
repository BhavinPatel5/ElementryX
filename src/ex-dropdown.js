class ExDropdown extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Create a container for the dropdown
    const container = document.createElement('div');
    container.classList.add('dropdown-container');

    // Display element with arrow
    const display = document.createElement('div');
    display.classList.add('dropdown-display', 'closed'); // Initial class for closed state

    const displayText = document.createElement('span');
    displayText.classList.add('dropdown-placeholder');
    displayText.textContent = 'Select an option'; // Placeholder text

    // Arrow element as a triangle
    const arrow = document.createElement('span');
    arrow.classList.add('dropdown-arrow');

    display.appendChild(displayText);
    display.appendChild(arrow);

    // Options list container
    const optionsList = document.createElement('div');
    optionsList.classList.add('dropdown-options');

    // Populate options
    const options = this.getAttribute('options').split(',');
    options.forEach(optionText => {
      const option = document.createElement('div');
      option.classList.add('dropdown-option');
      option.textContent = optionText.trim();

      // Option click event to set selected value
      option.addEventListener('click', () => {
        displayText.textContent = option.textContent; // Update display with selected option
        displayText.classList.remove('dropdown-placeholder'); // Remove placeholder style
        optionsList.classList.remove('open'); // Hide options list
        arrow.classList.remove('open'); // Reset arrow rotation
        display.classList.add('closed'); // Apply closed styling to display
      });

      // Append each option to options list
      optionsList.appendChild(option);
    });

    // Toggle dropdown on click
    display.addEventListener('click', () => {
      const isOpen = optionsList.classList.toggle('open'); // Show/hide options list
      arrow.classList.toggle('open'); // Rotate arrow
      display.classList.toggle('closed', !isOpen); // Toggle closed styling based on list state
    });

    // Append elements to the container
    container.appendChild(display);
    container.appendChild(optionsList);

    // Style for the component
    const style = document.createElement('style');
    style.textContent = `
      /* Main container styling */
      .dropdown-container {
        position: relative;
        width: 200px;
        font-family: Arial, sans-serif;
      }

      /* Display (button) styling for light and dark modes */
      .dropdown-display {
        background-color: var(--background, #F2F2F2);
        color: var(--text, black);
        padding: 10px;
        border-radius: 4px; /* Full rounded corners when closed */
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 2; /* Higher than options list */
        transition: box-shadow 0.3s, background-color 0.3s, border-radius 0.3s;
      }

      /* When the list is open, remove bottom radius for a seamless look */
      .dropdown-display:not(.closed) {
        border-radius: 4px 4px 0 0; /* Rounded top, flat bottom when list is open */
      }

      /* Placeholder text */
      .dropdown-placeholder {
        color: rgba(0, 0, 0, 0.5); /* Dimmer color for placeholder */
      }

      /* Display hover effect */
      .dropdown-display:hover {
        background-color: var(--hover-background, #FFFFFF);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      /* Arrow as a CSS triangle */
      .dropdown-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid black; /* Color of the triangle */
        transition: transform 0.3s ease;
      }

      /* Rotate arrow on open */
      .dropdown-arrow.open {
        transform: rotate(180deg);
      }

      /* Options list styling for light mode */
      .dropdown-options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--dropdown-background, #FFFFFF);
        border-radius: 0 0 4px 4px; /* Rounded bottom only to align with display */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        z-index: 1; /* Lower than display */
        transform: translateY(-2px); /* Slight overlap with display */
        transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
      }

      /* Open class to show dropdown */
      .dropdown-options.open {
        max-height: 150px;
        opacity: 1;
        transform: translateY(0); /* Align normally when open */
      }

      /* Individual options styling */
      .dropdown-option {
        padding: 10px;
        color: var(--option-color, black);
        transition: color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }

      /* Hover effect on options */
      .dropdown-option:hover {
        color: rgba(26, 92, 255, 0.8);
        transform: translateX(5px);
      }

      /* Dark mode styling */
      :host([dark]) .dropdown-display {
        background-color: #353739;
        color: #FFFFFF;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      :host([dark]) .dropdown-placeholder {
        color: rgba(255, 255, 255, 0.6); /* Dimmer color for dark mode placeholder */
      }

      :host([dark]) .dropdown-display:hover {
        background-color: #626365;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      }

      :host([dark]) .dropdown-options {
        background-color: #626365;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      :host([dark]) .dropdown-option {
        color: #FFFFFF;
      }

      :host([dark]) .dropdown-option:hover {
        color: rgba(26, 92, 255, 0.8);
        transform: translateX(5px);
      }
    `;

    // Append styles and container to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define('ex-dropdown', ExDropdown);
export default ExDropdown;
