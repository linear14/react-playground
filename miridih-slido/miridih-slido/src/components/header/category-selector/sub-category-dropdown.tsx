/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { SubCategory } from "../../../types/category";
import DropdownItem from "./dropdown-item";

const Container = styled.div`
  position: absolute;
  width: 300px;
  left: 0;
  top: calc(100% + 8px);

  background-color: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  border-radius: 4px;
  z-index: 99;
`;

interface Props {
  list: SubCategory[]
}

const SubCategoryDropdown = ({ list }: Props) => {
  return <Container>
    {list.map(item => <DropdownItem key={item.id} name={item.name}/>)}
  </Container>;
};

export default SubCategoryDropdown;
