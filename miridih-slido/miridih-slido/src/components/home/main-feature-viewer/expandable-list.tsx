import styled from "@emotion/styled";
import { useState } from "react";
import { MainFeature } from "../../../types/feature";
import ExpandableItem from "./expandable-item";

const Container = styled.div`
  width: calc(40% - 32px);
  margin-right: 32px;
`;

interface Props {
  listItem: MainFeature[];
}

const ExpandableList = ({ listItem }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <Container>
      {listItem.map((item, idx) => (
        <ExpandableItem
          key={item.id}
          item={item}
          expand={selectedIdx === idx}
          handleExpandState={setSelectedIdx.bind(this, idx)}
        />
      ))}
    </Container>
  );
};

export default ExpandableList;
