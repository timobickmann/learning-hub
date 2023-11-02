import toolsData from "../data/tools.json";

import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

@customElement("tools-page")
export class ToolsPageElement extends LitElement {
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

      .tool-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
    `,
  ];

  render() {
    return html`
      <h1>Tools Page</h1>
      <div class="tool-cards">
        ${toolsData.map((tool) => html` <app-card .tool=${tool}></app-card> `)}
      </div>
    `;
  }
}
