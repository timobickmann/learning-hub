import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

import "@shoelace-style/shoelace/dist/components/icon/icon.js";

@customElement("footer-bar")
export class FooterBarElement extends LitElement {
  static styles = [
    sharedStyles,
    css`
      p {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        gap: 0.25rem;
      }
      footer {
        padding-bottom: 0.25rem;
        display: flex;
        justify-content: center;
      }
      sl-icon {
        color: var(--sl-color-red-500);
      }
    `,
  ];

  render() {
    return html`
      <footer>
        <p>
          Made with <sl-icon name="suit-heart-fill"></sl-icon> by
          <a target="_blank" href="https://github.com/timobickmann">Timo</a>
        </p>
      </footer>
    `;
  }
}