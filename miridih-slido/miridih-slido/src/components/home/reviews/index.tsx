import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Review } from "../../../types/review";
import Handler from "./handler";
import ReviewItem from "./review-item";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 522px;
  overflow: hidden;
`;

type AnimationMeta = {
  isLoading: boolean;
  before: number;
  current: number;
  dir?: "left" | "right";
};

const Reviews = () => {
  const [customerList, setCustomerList] = useState<Review[]>([]);
  const [animationMeta, setAnimationMeta] = useState<AnimationMeta>({
    isLoading: true,
    before: -1,
    current: -1,
  });

  const toPrevious = () => {
    setAnimationMeta((prev) => ({
      ...prev,
      before: prev.current,
      current: prev.current === 0 ? customerList.length - 1 : prev.current - 1,
      dir: "right",
    }));
  };

  const toNext = () => {
    setAnimationMeta((prev) => ({
      ...prev,
      before: prev.current,
      current: prev.current === customerList.length - 1 ? 0 : prev.current + 1,
      dir: "left",
    }));
  };

  useEffect(() => {
    async function fetchReviewList() {
      const response = await fetch("/mock/customers.json");
      const result = await response.json();
      setCustomerList(result.reviewList);
      setAnimationMeta({ isLoading: false, before: -1, current: 0 });
    }

    fetchReviewList();
  }, []);

  if (animationMeta.isLoading) return null;

  return (
    <Container>
      {animationMeta.before >= 0 && (
        <ReviewItem
          item={customerList[animationMeta.before]}
          dir={animationMeta.dir}
        />
      )}
      {animationMeta.current >= 0 && (
        <ReviewItem
          item={customerList[animationMeta.current]}
          dir={animationMeta.dir}
          isCurrentData
        />
      )}
      <Handler
        current={animationMeta.current + 1}
        total={customerList.length}
        toPrevious={toPrevious}
        toNext={toNext}
      />
    </Container>
  );
};

export default Reviews;
