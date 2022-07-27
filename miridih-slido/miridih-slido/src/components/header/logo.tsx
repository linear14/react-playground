/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";

const logoStyle = css`
  height: 24px;
  cursor: pointer;
`;

const Logo = () => {
  return <img src="/icons/ic_logo.svg" css={logoStyle} />;
};

export default Logo;
