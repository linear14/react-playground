/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import AutoPlayVideo from "../components/common/AutoPlayVideo";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import UnderlineLink from "../components/common/UnderlineLink";
import { marginCss } from "../utils/style-util";

const Horizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const H1 = styled.h1`
  font-size: 64px;
  line-height: 1.125;
  font-weight: bold;
  text-align: center;
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
      <Horizontal css={marginCss({ top: 32, bottom: 12 })}>
        <Button>Get started for free</Button>
        <UnderlineLink>Schedule a demo</UnderlineLink>
      </Horizontal>
      <Horizontal css={marginCss({ top: 48, bottom: 32 })}>
        <AutoPlayVideo src="/videos/videos_welcome.mp4" width={800} />
      </Horizontal>
    </>
  );
};

export default Home;
