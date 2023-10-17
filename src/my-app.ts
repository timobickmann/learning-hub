import "./css/theme.css";
import { sharedStyles } from "./css/shared-styles";

import "./components/header-navigation.ts";
import "./components/footer-bar.ts";

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
        background-color: var(--md-ref-palette-neutral95);
        color: var(--md-sys-color-on-background);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          background-color: var(--md-ref-palette-neutral20);
        }
      }

      main {
        flex-grow: 1;
        padding-bottom: 2rem;
        background-color: var(--md-sys-color-surface);
        border-radius: 32px;
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
      <header-navigation></header-navigation>

      <!-- main content -->
      <main><slot></slot></main>

      <!-- footer -->
      <footer-bar></footer-bar>
    `;
  }
}
