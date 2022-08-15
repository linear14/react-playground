import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MainFeature } from "../../../types/feature";

const Container = styled.div<{ expand: boolean }>`
  cursor: pointer;

  ${({ expand }) =>
    expand
      ? css`
          height: auto;
          box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 15%);
          border-radius: 4px;
        `
      : css`
          height: 105px;
          border: none;
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
      {item.title}
    </Container>
  );
};

export default ExpandableItem;
