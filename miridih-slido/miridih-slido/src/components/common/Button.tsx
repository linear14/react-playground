import styled from "@emotion/styled";

const Container = styled.button`
  height: 48px;
  padding: 0 2rem;

  color: white;
  background-color: #39ac37;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    background-color: black;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Button;
