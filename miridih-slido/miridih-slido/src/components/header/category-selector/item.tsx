/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { Category } from "../../../types/category";
import SubCategoryDropdown from "./sub-category-dropdown";

const Container = styled.button<{ anchor: boolean }>`
  position: relative;

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
  const [onHover, setHover] = useState<boolean>(false);

  const tagName: ElementTagName = item.subCategories.length ? "button" : "a";
  const hasAnchor = tagName === "a";

  return (
    <Container
      as={tagName}
      anchor={hasAnchor}
      onMouseEnter={setHover.bind(this, true)}
      onMouseLeave={setHover.bind(this, false)}
    >
      {item.name}
      {onHover && !hasAnchor && <SubCategoryDropdown />}
    </Container>
  );
};

export default Item;
