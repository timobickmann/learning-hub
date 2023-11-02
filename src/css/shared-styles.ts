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

  a {
    color: var(--link);
  }
`;
