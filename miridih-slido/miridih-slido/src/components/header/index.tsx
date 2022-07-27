/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../types/category";
import CategoryList from "./category-list";
import Logo from "./logo";

const Container = styled.div`
  padding: 16px 0;
  background-color: #dddddd;
`;

const NavContainer = styled.nav`
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
        <CategoryList list={categoryList} />
      </NavContainer>
    </Container>
  );
};

export default Header;
