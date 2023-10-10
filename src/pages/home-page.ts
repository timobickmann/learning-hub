import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

import lit from "../assets/logos/lit.svg";
import vite from "../assets/logos/vite.svg";
import shoelace from "../assets/logos/shoelace.svg";

import "@shoelace-style/shoelace/dist/components/button/button.js";

@customElement("home-page")
export class HomePageElement extends LitElement {
  static styles = [
    sharedStyles,
    css`

    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
      h1 {
        font-size: var(--sl-font-size-3x-large);
      }

      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
      }

      

      .logo {
        height: 128px;
        width: auto;
      }

      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
    `,
  ];

  render() {
    return html`
        <div class="image-container">
          <a href="https://vitejs.dev/">
            <img class="logo" src="${vite}" alt="Vite Logo"
          /></a>
          <a href="https://lit.dev/">
            <img class="logo" src="${lit}" alt="Lit Logo"
          /></a>
          <a href="https://shoelace.style/"
            ><img class="logo" src="${shoelace}" alt="Shoelace Logo"
          /></a>
        </div>
        <h1>Vite + Lit + Shoelace</h1>
        <p>Click on the logos to learn more</p>
        <sl-button>Shoelace Button</sl-button>
     
    `;
  }
}
