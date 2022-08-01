/** @jsxImportSource @emotion/react */

import { Global, css, jsx } from "@emotion/react";
import resetLib from "emotion-reset";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";

const resetCss = css`
  ${resetLib}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    font-size: 16px;
    background: none;
    border: none;
  }
`;

function App() {
  return (
    <>
      <Global styles={resetCss} />
      <PageLayout>
        <Home />
      </PageLayout>
    </>
  );
}

export default App;
