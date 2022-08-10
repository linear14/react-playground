/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SubFeature } from "../../../types/feature";
import Text from "../../common/Text";

const Container = styled.div`
  padding: 40px;
  background-color: #f5f5f5;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

interface Props {
  item: SubFeature;
}

const Item = ({ item: { title, description, icon } }: Props) => {
  return (
    <Container>
      <img src={icon} alt={title} width={48} />
      <Text
        css={css`
          font-size: 24px;
          font-weight: bold;
          text-align: start;
        `}
      >
        {title}
      </Text>
      <Text
        css={css`
          font-size: 18px;
          text-align: start;
        `}
      >
        {description}
      </Text>
    </Container>
  );
};

export default Item;
