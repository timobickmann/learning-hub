import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

type Variant = "default" | "outlined" | "text";

@customElement("app-button")
export class AppButtonElement extends LitElement {
  @property({ type: String, reflect: true }) variant: Variant = "default";

  static styles = [
    sharedStyles,
    css`
      button {
        padding: 8px 16px;
        border-radius: var(--border-radius);
        cursor: pointer;
        border: none;
        background-color: transparent;
        transition: 0.25s;
      }

      button:hover {
        transform: scale(1.02);
        transition: 0s;
      }

      :host([variant="default"]) button {
        background-color: var(--primary);
        color: var(--primary-foreground);
      }

      :host([variant="default"]) button:hover {
        background-color: var(--primary-hover);
      }

      :host([variant="outlined"]) button {
        border: 1px solid var(--primary);
        color: var(--primary);
      }

      :host([variant="outlined"]) button:hover {
        background-color: var(--primary-hover);
        color: var(--primary-foreground);
      }

      :host([variant="text"]) button {
        color: var(--primary);
      }

      :host([variant="text"]) button:hover {
        color: var(--primary-hover);
      }
    `,
  ];

  render() {
    return html` <button class="${this.variant}"><slot></slot></button> `;
  }
}
