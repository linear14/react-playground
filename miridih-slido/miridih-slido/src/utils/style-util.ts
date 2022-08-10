import { css } from "@emotion/react";

export const marginCss = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  vertical,
  horizontal,
}: {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}) =>
  css`
    margin: ${vertical || top}px ${horizontal || right}px
      ${vertical || bottom}px ${horizontal || left}px;
  `;

export const paddingCss = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  vertical,
  horizontal,
}: {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
}) =>
  css`
    padding: ${vertical || top}px ${horizontal || right}px
      ${vertical || bottom}px ${horizontal || left}px;
  `;
