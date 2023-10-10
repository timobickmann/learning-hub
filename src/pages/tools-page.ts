import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

@customElement("tools-page")
export class ToolsPageElement extends LitElement {
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
    `,
  ];

  render() {
    return html`
      <h1>Tools Page</h1>
    `;
  }
}
