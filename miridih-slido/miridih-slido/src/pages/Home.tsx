/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { marginCss } from "../utils/style-util";

const H1 = styled.h1`
  font-size: 64px;
  line-height: 1.125;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.5px;
`;

const Home = () => {
  return (
    <>
      <H1>
        Your go-to interaction app
        <br />
        for hybrid meetings
      </H1>
      <Text css={marginCss({ top: 24, bottom: 8 })}>
        Engage your participants with live polls, Q&A, quizzes and word clouds
        <br />— whether you meet in the office, online or in-between.
      </Text>
    </>
  );
};

export default Home;
