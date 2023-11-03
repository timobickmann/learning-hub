import "./css/styles.css";
import { sharedStyles } from "./css/shared-styles";

import "./components/index";

import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-app")
export class MyAppElement extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--background);
        color: var(--neutral-foreground);
      }

      main {
        flex-grow: 1;
        padding-bottom: 2rem;
        background-color: var(--neutral);
        border-radius: calc(var(--border-radius) * 2);
        overflow-y: auto;
        margin-left: 2rem;
        margin-right: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }
    `,
  ];

  render() {
    return html`
      <!-- header -->
      <app-header></app-header>

      <!-- main content -->
      <main><slot></slot></main>

      <!-- footer -->
      <app-footer></app-footer>
    `;
  }
}
