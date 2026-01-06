import React, { useState } from "react";
import Home from "./sections/Home";
import Career from "./sections/Career";
import MenuBar from "./comoponents/MenuBar";

const renderSection = (idx) => {
  switch (idx) {
    case 1:
      return <Career />;
    case 0:
      return <Home />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <div style={{ position: "relative" }}>

      {renderSection(index)}

      {/* This is right Side menuBar */}
      <MenuBar setIndex={setIndex} index={index} />
    </div>
  );
};

export default App;
