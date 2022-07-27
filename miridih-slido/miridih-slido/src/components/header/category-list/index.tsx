/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../../types/category";
import Item from "./item";

const Container = styled.div`
  display: flex;
  justify-self: center;
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
        <Item key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default CategorySelector;
