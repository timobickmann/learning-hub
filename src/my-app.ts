import "./styles/theme.css";

import "./components/header-navigation.ts";
import "./components/footer-bar.ts";

import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-app")
export class MyAppElement extends LitElement {
  static styles = css`
    :host {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    main {
      flex: 1;
      margin: 2rem;
    }
  `;

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
