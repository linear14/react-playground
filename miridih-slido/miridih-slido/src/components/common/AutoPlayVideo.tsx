import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  src: string;
  width?: number;
  maxWidth?: number;
}

const AutoPlayVideo = ({ src, width = 800, maxWidth = width }: Props) => {
  return (
    <video
      src={src}
      style={{ width, maxWidth }}
      autoPlay
      loop
      playsInline
      muted
    />
  );
};

export default AutoPlayVideo;
