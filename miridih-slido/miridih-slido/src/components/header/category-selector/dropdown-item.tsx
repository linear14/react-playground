import styled from "@emotion/styled";

const Container = styled.div`
  height: 48px;

  &:hover {
    background-color: #dddddd;
  }
`

interface Props {
  name: string;
}

const DropdownItem = ({ name }: Props) => {
  return <Container>{name}</Container>
}

export default DropdownItem;