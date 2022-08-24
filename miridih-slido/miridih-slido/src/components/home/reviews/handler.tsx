/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";

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
  const [buttonActive, setButtonActive] = useState<boolean>(true);
  const throttle = useCallback(
    (callback: () => void) => {
      if (buttonActive) {
        setButtonActive(false);
        callback();

        setTimeout(() => {
          setButtonActive(true);
        }, 550);
      }
    },
    [buttonActive]
  );

  return (
    <Container>
      <Button onClick={throttle.bind(this, toPrevious)} dir="left">
        <img src={"/icons/ic_arrow_down.svg"} />
      </Button>
      <Indicator>
        {current}/{total}
      </Indicator>
      <Button onClick={throttle.bind(this, toNext)} dir="right">
        <img src={"/icons/ic_arrow_down.svg"} />
      </Button>
    </Container>
  );
};

export default Handler;
