/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div<{ selected: boolean }>`
  height: 48px;
  padding: 0 24px;

  white-space: nowrap;
  cursor: pointer;

  display: flex;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #eeeeee;
    `}
`;

interface Props {
  name: string;
  selected: boolean;
  onSelect: () => void;
}

const DropdownItem = ({ name, selected, onSelect }: Props) => {
  return (
    <Container onMouseEnter={onSelect} selected={selected}>
      {name}
    </Container>
  );
};

export default DropdownItem;