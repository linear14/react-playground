/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "../../common/Text";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

interface Props {
  name: string;
  imgSrc: string;
}

const Item = ({ name, imgSrc }: Props) => {
  return (
    <Container>
      <img src={imgSrc} alt={name} />
      <Text
        css={css`
          font-size: 18px;
        `}
      >
        {name}
      </Text>
    </Container>
  );
};

export default Item;
