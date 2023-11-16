import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

@customElement("home-page")
export class HomePageElement extends LitElement {
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
    `,
  ];

  render() {
    return html`
      <h1>Home Page</h1>

      <p>Go get some funny Chuck Norris jokes at <a href="/chucknorris">/chucknorris</a>!</p>

      <p>Sorry for the ugly scrollbar btw. Just get a Mac to make it look better.</p>
    `;
  }
}
