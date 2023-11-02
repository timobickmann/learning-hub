import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

@customElement("pacman-page")
export class PacmanPageElement extends LitElement {
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

      .pacman-container {
        background-color: #000;
        border-radius: 10px;
        border: 2px solid blue;
        padding: 5px;
      }

      .pacman-field {
        width: 500px;
        height: 300px;
        position: relative;
        border-radius: 10px;
        border: 2px solid blue;
      }

      .pacman {
        position: absolute;
        left: 0;
        top: 0;
        border: 16px solid;
        border-radius: 50%;
        border-color: yellow #0000 yellow yellow;
        animation: move 5s step-end infinite, rotate 5s linear infinite,
          eat 0.6s step-end infinite;
      }

      .inner-border {
        border: 2px solid blue;
        border-radius: 10px;
        position: absolute;
        left: 32px;
        top: 32px;
        width: calc(100% - 64px);
        height: calc(100% - 64px);
      }

      .inner-border-2 {
        border: 2px solid blue;
        border-radius: 10px;
        position: absolute;
        left: 42px;
        top: 42px;
        width: calc(100% - 84px);
        height: calc(100% - 84px);
      }

      @keyframes eat {
        0%,
        100% {
          border-color: yellow #0000 yellow yellow;
        }
        50% {
          border-color: yellow yellow yellow yellow;
        }
      }

      @keyframes move {
        0%,
        100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(90deg);
        }
        50% {
          transform: rotate(180deg);
        }
        75% {
          transform: rotate(270deg);
        }
      }

      @keyframes rotate {
        0%,
        100% {
          left: 0;
          top: 0;
        }
        25% {
          left: calc(100% - 32px);
          top: 0;
        }
        50% {
          left: calc(100% - 32px);
          top: calc(100% - 32px);
        }
        75% {
          left: 0;
          top: calc(100% - 32px);
        }
      }
    `,
  ];

  render() {
    return html`
      <h1>Pacman</h1>
      <div class="pacman-container">
        <div class="pacman-field">
          <span class="pacman"></span>
          <span class="inner-border"></span>
          <span class="inner-border-2"></span>
        </div>
      </div>
    `;
  }
}
