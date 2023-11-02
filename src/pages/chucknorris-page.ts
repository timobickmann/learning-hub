import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { sharedStyles } from "../css/shared-styles";

interface ChuckNorrisJoke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
  categories: string[];
  created_at: string;
  updated_at: string;
}

@customElement("chucknorris-page")
export class ChuckNorrisPageElement extends LitElement {
  @property({ type: Object }) chuckNorrisJoke: ChuckNorrisJoke | null = null;
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

      button {
        padding: 8px 16px;
        border-radius: var(--border-radius);
        cursor: pointer;
        background-color: var(--primary);
        color: var(--primary-foreground);
        border: none;
      }

      button:hover {
        background-color: var(--primary-hover);
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchJoke();
  }

  async fetchJoke(): Promise<void> {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const jokeData = await response.json();
    this.chuckNorrisJoke = jokeData;
  }

  render() {
    return html`
      <h1>Chuck Norris Jokes</h1>

      ${this.chuckNorrisJoke
        ? html` <p>${this.chuckNorrisJoke.value}</p> `
        : html`<p>Loading Chuck Norris joke...</p>`}

      <button @click="${this.fetchJoke}">Get New Joke</button>
    `;
  }
}
