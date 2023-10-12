import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { sharedStyles } from "../styles/shared-styles.ts";

interface ITool {
  name: string;
  description: string;
  link: string;
}

@customElement("tool-card")
export class ToolCardElement extends LitElement {
  @property({ type: Object }) tool: ITool = {
    name: "",
    description: "",
    link: "",
  };

  static styles = [
    sharedStyles,
    css`
      .tool-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; 
        height: 100%;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--sl-panel-background-color);
        box-shadow: var(--sl-shadow-large);
      }
    `,
  ];

  render() {
    return html`
      <div class="tool-card">
        <h3>${this.tool.name}</h3>
        <p>${this.tool.description}</p>
        <a href="${this.tool.link}">Link</a>
      </div>
    `;
  }
}
