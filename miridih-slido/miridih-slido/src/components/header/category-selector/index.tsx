/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../../types/category";
import MainCategoryItem from "./main-category-item";

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 32px;
`;

interface Props {
  list: Category[];
}

const CategorySelector = ({ list }: Props) => {
  return (
    <Container>
      {list.map((item) => (
        <MainCategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default CategorySelector;
