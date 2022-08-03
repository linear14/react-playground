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
  padding: 16px 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.div`
  line-height: 1.25;
  text-align: start;
`;

const LearnMoreLink = styled.a`
  &::before {
    content: "Learn More";
    text-decoration: underline;
    cursor: pointer;
    color: #39ac37;
    font-weight: bold;
  }
`;

interface Props {
  list: SubCategory[];
}

const SubCategoryDropdown = ({ list }: Props) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const currentItem = list[currentIdx];
  const hasMoreInfo = currentItem.description && currentItem.icon;

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
      {hasMoreInfo && (
        <Right>
          <Icon src={currentItem.icon} alt={currentItem.name} />
          <Name>{currentItem.name}</Name>
          <Description>{currentItem.description}</Description>
          <LearnMoreLink />
        </Right>
      )}
    </Container>
  );
};

export default SubCategoryDropdown;
