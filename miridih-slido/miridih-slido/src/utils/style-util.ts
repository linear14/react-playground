import { css } from "@emotion/react";

export const marginCss = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
}: {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}) =>
  css`
    margin: ${top}px ${right}px ${bottom}px ${left}px;
  `;