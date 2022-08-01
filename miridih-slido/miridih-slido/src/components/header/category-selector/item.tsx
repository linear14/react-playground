/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../../types/category";

const Container = styled.button<{ anchor: boolean }>`
  ${({ anchor }) =>
    anchor &&
    css`
      cursor: pointer;

      &:hover {
        color: #39ac37;
        text-decoration: underline;
      }
    `}
`;

type ElementTagName = "button" | "a";

interface Props {
  item: Category;
}

const Item = ({ item }: Props) => {
  const tagName: ElementTagName = item.subCategories.length ? "button" : "a";
  const hasAnchor = tagName === "a";

  return (
    <Container as={tagName} anchor={hasAnchor}>
      {item.name}
    </Container>
  );
};

export default Item;
