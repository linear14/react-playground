import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Badge } from "../../../types/badge";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

const Badges = () => {
  const [badgeList, setBadgeList] = useState<Badge[]>([]);

  useEffect(() => {
    async function fetchBadgeList() {
      const response = await fetch("/mock/badges.json");
      const result = await response.json();
      setBadgeList(result.result);
    }

    fetchBadgeList();
  }, []);

  return (
    <>
      <ItemContainer>
        {badgeList.map((item) => (
          <img key={item.id} src={item.badge} alt={item.title} />
        ))}
      </ItemContainer>
    </>
  );
};

export default Badges;
