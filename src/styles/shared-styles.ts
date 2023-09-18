import { css } from "lit";

export const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  :not(:defined) {
    visibility: hidden;
  }
`;
