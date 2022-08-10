import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { SubFeature } from "../../../types/feature";
import Item from "./item";

const ItemContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SubFeatures = () => {
  const [featureList, setFeatureList] = useState<SubFeature[]>([]);

  useEffect(() => {
    async function fetchSubFeatureList() {
      const response = await fetch("/mock/sub-features.json");
      const result = await response.json();
      setFeatureList(result.result);
    }

    fetchSubFeatureList();
  }, []);

  return (
    <>
      <ItemContainer>
        {featureList.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ItemContainer>
    </>
  );
};

export default SubFeatures;
