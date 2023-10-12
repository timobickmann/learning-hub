import toolsData from "../data/tools.json";

import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

import "../components/tool-card.ts";

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
        ${toolsData.map(
          (tool) => html` <tool-card .tool=${tool}></tool-card> `
        )}
      </div>
    `;
  }
}
