/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { SubCategory } from "../../../types/category";
import DropdownItem from "./dropdown-item";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 24px 0;

  background-color: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  border-radius: 4px;
  z-index: 99;

  display: flex;
`;

const Left = styled.div`
  border-right: 1px solid #eeeeee;
`;

const Right = styled.div`
  width: 300px;
`;

interface Props {
  list: SubCategory[];
}

const SubCategoryDropdown = ({ list }: Props) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  return (
    <Container>
      <Left>
        {list.map((item, idx) => (
          <DropdownItem
            key={item.id}
            name={item.name}
            selected={currentIdx === idx}
            onSelect={setCurrentIdx.bind(this, idx)}
          />
        ))}
      </Left>
      <Right>{list[currentIdx].name}</Right>
    </Container>
  );
};

export default SubCategoryDropdown;
