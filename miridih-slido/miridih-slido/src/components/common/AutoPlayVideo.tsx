/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from "@emotion/react";

interface Props {
  src: string;
  extraCss?: SerializedStyles;
}

// 고민 : 여기 props 명칭을 extraCss가 아니라 css로 받고 싶은데, 그렇게하면 인식을 못함. 해결 방법은?
const AutoPlayVideo = ({ src, extraCss }: Props) => {
  return <video src={src} css={extraCss} autoPlay loop playsInline muted />;
};

export default AutoPlayVideo;
