/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Category } from "../../types/category";

const Container = styled.div`
  height: 700px;
  border-top: 1px solid #dddddd;
`;

interface Props {
  categoryList: Category[];
}

const Footer = ({ categoryList }: Props) => {
  return <Container />;
};

export default Footer;
