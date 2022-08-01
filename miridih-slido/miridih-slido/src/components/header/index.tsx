/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../types/category";
import AuthList from "./auth-list";
import CategorySelector from "./category-selector";
import Logo from "./logo";

const Container = styled.div`
  padding: 16px 0;
  background-color: #dddddd;
`;

const NavContainer = styled.nav`
  position: relative;
  width: 1280px;
  max-width: 1280px;
  padding: 0 32px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  categoryList: Category[];
}

const Header = ({ categoryList }: Props) => {
  return (
    <Container>
      <NavContainer>
        <Logo />
        <CategorySelector list={categoryList} />
        <AuthList />
      </NavContainer>
    </Container>
  );
};

export default Header;
