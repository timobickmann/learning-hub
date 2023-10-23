import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

interface ITool {
  name: string;
  description: string;
  link: string;
}

@customElement("app-card")
export class AppCardElement extends LitElement {
  @property({ type: Object }) tool: ITool = {
    name: "",
    description: "",
    link: "",
  };

  static styles = [
    sharedStyles,
    css`
      .card {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        background-color: var(--md-sys-surface-container-highest);
        border-radius: var(--border-radius);
        box-shadow: 0px 1px 8px var(--md-sys-color-shadow);
      }
    `,
  ];

  render() {
    return html`
      <div class="card">
        <h3>${this.tool.name}</h3>
        <p>${this.tool.description}</p>
        <a href="${this.tool.link}">Link</a>
      </div>
    `;
  }
}
