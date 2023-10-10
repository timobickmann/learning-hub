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
        border-bottom: 1px solid var(--sl-color-border);
        padding-top: 8px;
        padding-bottom: 8px;
        display: flex;
        justify-content: space-between;
      }

      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 32px;
      }

      a {
        text-decoration: none;
        color: var(--sl-color-neutral-600);
      }

      a:hover {
        color: var(--sl-color-neutral-700);
      }

      :host {
        padding-left: 8px;
        padding-right: 8px;
      }

      @media (min-width: 480px) {
        :host {
          padding-left: 16px;
          padding-right: 16px;
        }
      }

      @media (min-width: 768px) {
        :host {
          padding-left: 32px;
          padding-right: 32px;
        }
      }

      @media (min-width: 1024px) {
        :host {
          padding-left: 64px;
          padding-right: 64px;
        }
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
      <div><span>Theme Toggle - </span><span>Github Icon</span></div>
    `;
  }
}
