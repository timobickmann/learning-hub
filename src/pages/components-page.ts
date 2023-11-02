import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

@customElement("components-page")
export class ComponentsPageElement extends LitElement {
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

      div {
        display: flex;
        gap: 2rem;
        border: 1px solid var(--border);
        border-radius: var(--border-radius);
        padding: 2rem;
        width: 100%;
        justify-content: space-around;
      }
    `,
  ];

  render() {
    return html`
      <h1>Components Testing</h1>
      <div>
        <app-button>Test Button Default</app-button>
        <app-button variant="outlined">Test Button Primary</app-button>
        <app-button variant="text">Test Button Text</app-button>
      </div>
    `;
  }
}
