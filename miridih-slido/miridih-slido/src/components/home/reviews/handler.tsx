/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  bottom: 36px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button<{ dir: string }>`
  width: 48px;
  height: 48px;

  border-radius: 90px;
  border: 1px solid black;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ dir }) =>
    dir === "left" ? css`rotate(90deg)` : css`rotate(-90deg)`};
`;

const Indicator = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

interface Props {
  current: number;
  total: number;
  toPrevious: () => void;
  toNext: () => void;
}

const Handler = ({ current, total, toPrevious, toNext }: Props) => {
  return (
    <Container>
      <Button onClick={toPrevious} dir="left">
        <img src={"/icons/ic_arrow_down.svg"} />
      </Button>
      <Indicator>
        {current}/{total}
      </Indicator>
      <Button onClick={toNext} dir="right">
        <img src={"/icons/ic_arrow_down.svg"} />
      </Button>
    </Container>
  );
};

export default Handler;
