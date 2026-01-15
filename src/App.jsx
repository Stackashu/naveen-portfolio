import React, { useState } from "react";
import Home from "./sections/Home";
import Career from "./sections/Career";
import MenuBar from "./comoponents/MenuBar";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

const renderSection = (idx) => {
  switch (idx) {
    case 3: return <Contact/>
    case 2:
      return <Portfolio/>
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
