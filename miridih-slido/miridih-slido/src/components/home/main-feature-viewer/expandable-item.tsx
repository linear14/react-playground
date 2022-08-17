import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MainFeature } from "../../../types/feature";

const Container = styled.div<{ expand: boolean }>`
  padding: 32px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  ${({ expand }) =>
    expand
      ? css`
          gap: 24px;
          box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
          border-radius: 4px;
        `
      : css`
          border: none;
        `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Body = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const Arrow = styled.img<{ expand: boolean }>`
  ${({ expand }) =>
    expand &&
    css`
      transform: rotate(180deg);
    `}
`;

interface Props {
  item: MainFeature;
  expand: boolean;
  handleExpandState: () => void;
}

const ExpandableItem = ({ item, expand, handleExpandState }: Props) => {
  return (
    <Container expand={expand} onClick={handleExpandState}>
      <Header>
        <Flex>
          <img src={item.icon} />
          <Title>{item.title}</Title>
        </Flex>
        <Arrow src={"/icons/ic_arrow_down.svg"} expand={expand} />
      </Header>
      {expand && (
        <Body>
          <Description>{item.description}</Description>
        </Body>
      )}
    </Container>
  );
};

export default ExpandableItem;
