import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

import "@material/web/button/filled-button.js";

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
        font-size: 2rem;
      }
    `,
  ];

  render() {
    return html`
        <h1>Home Page</h1>
        <md-filled-button>Complete</md-filled-button>

    `;
  }
}
