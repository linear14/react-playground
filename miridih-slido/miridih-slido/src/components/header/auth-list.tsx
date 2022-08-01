/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../common/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const AuthList = () => {
  return (
    <Container>
      <div>Log In</div>
      <Button>Sign Up</Button>
    </Container>
  );
};

export default AuthList;
