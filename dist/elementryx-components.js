!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).ElementryX={})}(this,(function(t){"use strict";class n extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),n=document.createElement("button");n.classList.add("ex-button"),n.textContent=this.getAttribute("label")||"Click Me",n.addEventListener("click",(t=>{this.createRipple(t),this.toggleDarkMode()}));const e=document.createElement("style");e.textContent="\n      :host {\n        --primary-color: #1a5cff; /* Button color */\n        --text-color-light: white; /* Text color for light mode */\n        --text-color-dark: black; /* Text color for dark mode */\n        --transition-duration: 0.3s;\n      }\n\n      :host([dark]) {\n        --primary-color: #005bb5; /* Darker shade for dark mode */\n        --text-color-light: white; /* Text color for dark mode */\n        --text-color-dark: white; /* Text color for dark mode */\n      }\n\n      .ex-button {\n        position: relative;\n        overflow: hidden;\n        background-color: var(--primary-color);\n        color: var(--text-color-light);\n        border: none;\n        border-radius: 4px;\n        padding: 10px 15px;\n        cursor: pointer;\n        font-size: 16px;\n        transition: box-shadow var(--transition-duration);\n        box-shadow: 0 10px 20px -10px rgba(26, 92, 255, 0.5);\n      }\n\n      .ex-button.dark {\n        background-color: var(--primary-color);\n        color: var(--text-color-dark);\n      }\n\n      .ripple {\n        position: absolute;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 50%;\n        transform: scale(0);\n        animation: ripple-animation 0.8s linear;\n        pointer-events: none;\n      }\n\n      @keyframes ripple-animation {\n        to {\n          transform: scale(4);\n          opacity: 0;\n        }\n      }\n    ",t.appendChild(e),t.appendChild(n)}createRipple(t){const n=this.shadowRoot.querySelector(".ex-button"),e=document.createElement("span");e.classList.add("ripple");const o=n.getBoundingClientRect(),r=Math.max(o.width,o.height);e.style.width=e.style.height=`${r}px`,e.style.left=t.clientX-o.left-r/2+"px",e.style.top=t.clientY-o.top-r/2+"px",n.appendChild(e),e.addEventListener("animationend",(()=>{e.remove()}))}toggleDarkMode(){const t=document.body.classList.toggle("dark-mode");this.toggleAttribute("dark",t)}}customElements.define("ex-button",n);class e extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),n=document.createElement("select");this.getAttribute("options").split(",").forEach((t=>{const e=document.createElement("option");e.textContent=t.trim(),n.appendChild(e)}));const e=document.createElement("style");e.textContent="\n      :host {\n        --background-light: rgba(26, 92, 255, 0.05); /* Light mode background */\n        --text-light: black;\n        --background-dark: rgba(0, 0, 0, 0.6); /* Dark mode background */\n        --text-dark: white;\n        --border-color: rgba(0, 0, 0, 0.2);\n      }\n\n      :host([dark]) {\n        --background: var(--background-dark);\n        --text: var(--text-dark);\n      }\n\n      :host(:not([dark])) {\n        --background: var(--background-light);\n        --text: var(--text-light);\n      }\n\n      select {\n        background-color: var(--background);\n        color: var(--text);\n        border: 2px solid var(--border-color);\n        border-radius: 4px;\n        padding: 10px;\n        transition: background-color 0.3s, color 0.3s, border-color 0.3s;\n      }\n\n      select:hover {\n        border-color: rgba(26, 92, 255, 0.5);\n      }\n\n      .vs-select__label {\n        color: var(--text);\n      }\n\n      .vs-icon-arrow {\n        color: var(--text);\n      }\n\n      .vs-select__options {\n        background: var(--background);\n        border-radius: 4px;\n        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n      }\n\n      .vs-select__option:hover {\n        background: rgba(26, 92, 255, 0.2);\n        color: var(--text);\n      }\n    ",t.appendChild(e),t.appendChild(n)}toggleDarkMode(){this.toggleAttribute("dark")}}customElements.define("ex-dropdown",e),t.ExButton=n,t.ExDropdown=e,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=elementryx-components.js.map