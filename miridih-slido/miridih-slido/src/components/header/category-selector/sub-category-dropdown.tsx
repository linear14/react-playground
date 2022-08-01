/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 0;
  top: calc(100% + 8px);

  background-color: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  border-radius: 4px;
  z-index: 99;
`;

const SubCategoryDropdown = () => {
  return <Container />;
};

export default SubCategoryDropdown;
