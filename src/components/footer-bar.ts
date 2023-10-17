import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

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
        display: flex;
        justify-content: center;
      }
    `,
  ];

  render() {
    return html`
      <footer>
        <p>
          Made with <span>❤️</span> by
          <a target="_blank" href="https://github.com/timobickmann">Timo</a>
        </p>
      </footer>
    `;
  }
}
