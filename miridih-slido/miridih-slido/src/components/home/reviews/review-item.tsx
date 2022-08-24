/** @jsxImportSource @emotion/react */

import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Review } from "../../../types/review";
import { marginCss } from "../../../utils/style-util";
import Text from "../../common/Text";

const slideToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const slideToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const Container = styled.div<{
  isCurrentData: boolean;
  dir?: "left" | "right";
}>`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  ${({ isCurrentData, dir }) =>
    dir === "left" && isCurrentData
      ? css`
          top: 0;
          left: 0;
        `
      : dir === "left" && !isCurrentData
      ? css`
          top: 0;
          left: -100%;
        `
      : dir === "right" && isCurrentData
      ? css`
          top: 0;
          right: 0;
        `
      : dir === "right" && !isCurrentData
      ? css`
          top: 0;
          right: -100%;
        `
      : css`
          top: 0;
          left: 0;
        `}

  ${({ dir }) =>
    dir === "left"
      ? css`
          animation: ${slideToLeft} 0.5s;
        `
      : dir === "right"
      ? css`
          animation: ${slideToRight} 0.5s;
        `
      : css`
          animation: none;
        `}
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
  isCurrentData?: boolean;
  dir?: "left" | "right";
}

const ReviewItem = ({ item, isCurrentData = false, dir }: Props) => {
  return (
    <Container isCurrentData={isCurrentData} dir={dir} key={item.id}>
      <Left>
        <Logo src={item.companyLogo} alt={item.company} />
        <Comment css={marginCss({ top: 24 })}>"{item.comment}"</Comment>
        <Staff css={marginCss({ top: 16 })}>{item.staff}</Staff>
      </Left>
      <Right>
        <StaffImg
          css={marginCss({ right: 16 })}
          src={item.staffPhoto}
          alt={item.staff}
        />
      </Right>
    </Container>
  );
};

export default ReviewItem;
