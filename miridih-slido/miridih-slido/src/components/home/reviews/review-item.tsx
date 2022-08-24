/** @jsxImportSource @emotion/react */

import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Review } from "../../../types/review";
import { marginCss } from "../../../utils/style-util";
import Text from "../../common/Text";

const slideToLeft = keyframes`

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  max-width: 580px;
`;

const Right = styled.div``;

const Logo = styled.img`
  height: 32px;
`;

const Comment = styled(Text)`
  font-size: 28px;
  line-height: 40px;
  text-align: start;
`;

const Staff = styled(Text)`
  text-align: start;
`;

const StaffImg = styled.img`
  height: 522px;
`;

interface Props {
  item: Review;
  // handleRouter: (dir: "left" | "right") => void;
}

const ReviewItem = ({ item }: Props) => {
  return (
    <Container>
      <Left>
        <Logo src={item.companyLogo} alt={item.company} />
        <Comment css={marginCss({ top: 24 })}>"{item.comment}"</Comment>
        <Staff css={marginCss({ top: 16 })}>{item.staff}</Staff>
      </Left>
      <Right>
        <StaffImg src={item.staffPhoto} alt={item.staff} />
      </Right>
    </Container>
  );
};

export default ReviewItem;
