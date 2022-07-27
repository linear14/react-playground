/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../../types/category";

const Container = styled.div``;

interface Props {
  item: Category;
}

const Item = ({ item }: Props) => {
  return <Container>{item.name}</Container>;
};

export default Item;
