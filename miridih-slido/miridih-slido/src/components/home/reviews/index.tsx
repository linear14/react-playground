import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Review } from "../../../types/review";
import ReviewItem from "./review-item";

const Container = styled.div`
  overflow: hidden;
`;

type AnimationMeta = {
  isLoading: boolean;
  before?: number;
  current?: number;
  dir?: "left" | "right";
};

const Reviews = () => {
  const [customerList, setCustomerList] = useState<Review[]>([]);
  const [animationMeta, setAnimationMeta] = useState<AnimationMeta>({
    isLoading: true,
  });

  useEffect(() => {
    async function fetchReviewList() {
      const response = await fetch("/mock/customers.json");
      const result = await response.json();
      setCustomerList(result.reviewList);
      setAnimationMeta({ isLoading: false, before: undefined, current: 0 });
    }

    fetchReviewList();
  }, []);

  if (animationMeta.isLoading) return null;

  return (
    <Container>
      {animationMeta.before !== undefined && (
        <ReviewItem item={customerList[animationMeta.before]} />
      )}
      {animationMeta.current !== undefined && (
        <ReviewItem item={customerList[animationMeta.current]} />
      )}
    </Container>
  );
};

export default Reviews;
