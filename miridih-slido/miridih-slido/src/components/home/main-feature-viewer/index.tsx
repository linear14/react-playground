/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MainFeature } from "../../../types/feature";
import AutoPlayVideo from "../../common/AutoPlayVideo";
import ExpandableList from "./expandable-list";

const HorizontalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const MainFeatureViewer = () => {
  const [featureList, setFeatureList] = useState<MainFeature[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  useEffect(() => {
    async function fetchMainFeatureList() {
      const response = await fetch("/mock/main-features.json");
      const result = await response.json();
      setFeatureList(result.result);
    }

    fetchMainFeatureList();
  }, []);

  if (!featureList.length) return null;
  return (
    <HorizontalContainer>
      <AutoPlayVideo
        src={featureList[selectedIdx].video}
        extraCss={css`
          width: 50%;
        `}
      />
      <ExpandableList
        listItem={featureList}
        selectedIdx={selectedIdx}
        handleSelect={setSelectedIdx}
      />
    </HorizontalContainer>
  );
};

export default MainFeatureViewer;
