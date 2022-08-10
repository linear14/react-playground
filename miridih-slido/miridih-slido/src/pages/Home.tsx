/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import AutoPlayVideo from "../components/common/AutoPlayVideo";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import UnderlineLink from "../components/common/UnderlineLink";
import Integrations from "../components/home/integrations";
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

const H2 = styled.h2`
  font-size: 48px;
  line-height: 1.125;
  font-weight: bold;
  text-align: center;

  span {
    color: #39ac37;
  }
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
        <AutoPlayVideo
          src="/videos/videos_welcome.mp4"
          extraCss={css`
            width: 800px;
          `}
        />
      </Horizontal>
      <Integrations />
      <H2 css={marginCss({ bottom: 24 })}>
        It’s how you <span>include everyone</span>
        <br />
        in your meetings
      </H2>
      <Text>
        Slido gives you everything you need to engage your participants, capture
        their views and make everyone feel
        <br />
        connected – whether you’re running a team call, training or an
        all-company meeting.
      </Text>
    </>
  );
};

export default Home;
