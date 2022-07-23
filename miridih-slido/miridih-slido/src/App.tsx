import React, { useEffect, useState } from "react";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default App;
