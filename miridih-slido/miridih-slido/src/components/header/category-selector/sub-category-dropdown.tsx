/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { SubCategory } from "../../../types/category";
import UnderlineLink from "../../common/UnderlineLink";

// Container

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
  width: 340px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`;

// Component

const SubCategoryItem = styled.div<{ selected: boolean }>`
  height: 48px;
  padding: 0 32px;

  white-space: nowrap;
  cursor: pointer;

  display: flex;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #f4f4f4;
    `}
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
  line-height: 1.5;
  text-align: start;
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
          <SubCategoryItem
            key={item.id}
            selected={currentIdx === idx}
            onMouseEnter={setCurrentIdx.bind(this, idx)}
          >
            {item.name}
          </SubCategoryItem>
        ))}
      </Left>
      {hasMoreInfo && (
        <Right>
          <Icon src={currentItem.icon} alt={currentItem.name} />
          <Name>{currentItem.name}</Name>
          <Description>{currentItem.description}</Description>
          <UnderlineLink>Learn More</UnderlineLink>
        </Right>
      )}
    </Container>
  );
};

export default SubCategoryDropdown;
