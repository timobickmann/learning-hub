import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

@customElement("howtos-page")
export class HowtosPageElement extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
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
    return html` <h1>Howtos Page</h1> `;
  }
}
