import { css } from "lit";

export const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :not(:defined) {
    visibility: hidden;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--md-sys-color-primary);
  }
`;
