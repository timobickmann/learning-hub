import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

@customElement("header-navigation")
export class HeaderNavigationElement extends LitElement {
  @property({ type: Array }) menuItems = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "How-Tos", path: "/howtos" },
  ];

  static styles = [
    sharedStyles,
    css`
      :host {
        background-color: white;
      }

      ul {
        list-style: none;
        padding: 0;
        display: flex;
      }

      li {
        margin-right: 20px;
      }

      a {
        text-decoration: none;
      }
    `,
  ];

  render() {
    return html`
      <nav>
        <ul>
          ${this.menuItems.map(
            (item) => html`
              <li>
                <a href="${item.path}">${item.label}</a>
              </li>
            `
          )}
        </ul>
      </nav>
    `;
  }
}
