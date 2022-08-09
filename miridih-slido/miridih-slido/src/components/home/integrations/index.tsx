import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Integration } from "../../../types/integration";
import Text from "../../common/Text";
import Item from "./item";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 56px 32px;
  gap: 32px;
`;

const ItemContainer = styled.div`
  display: flex;
`;

const Integrations = () => {
  const [integrationList, setIntegrationList] = useState<Integration[]>([]);

  // 만약에 통신이 실패할수도 있잖아? 예외처리 보통 어떻게 하는지 궁금
  useEffect(() => {
    async function fetchIntegrationList() {
      const response = await fetch("/mock/integrations.json");
      const result = await response.json();
      setIntegrationList(result.result);
    }

    fetchIntegrationList();
  }, []);

  return (
    <Container>
      <Text>You can use Slido with</Text>
      <ItemContainer>
        {integrationList.map((item) => (
          <Item key={item.id} name={item.name} imgSrc={item.icon} />
        ))}
      </ItemContainer>
    </Container>
  );
};

export default Integrations;
