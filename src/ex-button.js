class ExButton extends HTMLElement {
  constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const button = document.createElement('button');
      button.classList.add('ex-button');

      // Set button label
      button.textContent = this.getAttribute('label') || 'Click Me';

      // Event listener for button click
      button.addEventListener('click', (event) => {
          this.createRipple(event);
      });

      const style = document.createElement('style');
      style.textContent = `
          :host {
              --primary-color: #1a5cff; /* Button color */
              --text-color-light: white; /* Text color for light mode */
              --transition-duration: 0.3s;
          }

          :host([dark]) {
              --primary-color: #005bb5; /* Darker shade for dark mode */
              --text-color-light: white; /* Text color for dark mode */
          }

          .ex-button {
              position: relative;
              overflow: hidden;
              background-color: var(--primary-color);
              color: var(--text-color-light);
              border: none;
              border-radius: 4px;
              padding: 10px 15px;
              cursor: pointer;
              font-size: 16px;
              transition: box-shadow var(--transition-duration);
              box-shadow: 0 10px 20px -10px rgba(26, 92, 255, 0.5);
          }

          .ex-button:active {
              box-shadow: none;
          }

          .ripple {
              position: absolute;
              background: rgba(0, 0, 0, 0.3);
              border-radius: 50%;
              transform: scale(0);
              animation: ripple-animation 0.8s linear;
              pointer-events: none;
          }

          @keyframes ripple-animation {
              to {
                  transform: scale(4);
                  opacity: 0;
              }
          }
      `;

      shadow.appendChild(style);
      shadow.appendChild(button);
  }

  createRipple(event) {
      const button = this.shadowRoot.querySelector('.ex-button');
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      button.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
          ripple.remove();
      });
  }
}

customElements.define('ex-button', ExButton);
export default ExButton;
