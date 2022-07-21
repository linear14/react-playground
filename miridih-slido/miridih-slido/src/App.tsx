import React, { useEffect, useState } from "react";

interface Feature {
  id: number;
  title: string;
  content: string;
  iconPath: string;
  videoPath: string;
}

function App() {
  const [featureList, setFeatureList] = useState<Feature[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("/mock/main-features.json");
      const { result } = await response.json();
      setFeatureList(result);
    }

    fetchItems();
  }, []);

  if (featureList.length > 0) {
    return (
      <>
        <div>미리디 slido 클론코딩 시작</div>
        <img src="https://blog.slido.com/wp-content/uploads/2020/04/blog-slido-QA-header-1200x800.jpg" />
        <video src={featureList[0].videoPath} autoPlay loop playsInline muted />
      </>
    );
  } else {
    return <div>안뇽</div>;
  }
}

export default App;
