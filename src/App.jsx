import React, { useState, useRef } from "react";
import Home from "./sections/Home";
import Career from "./sections/Career";
import MenuBar from "./comoponents/MenuBar"; // Note: preserving typo in path 'comoponents' as per file system
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import PageTransition from "./comoponents/PageTransition";
import Blog from "./sections/Blog";

const renderSection = (idx) => {
  switch (idx) {
    case 4 : return <Blog/>
    case 3: return <Contact />
    case 2:
      return <Portfolio />
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
  const transitionRef = useRef(null);

  const handleNavigation = (newIndex) => {
    if (newIndex === index) return;

    // Play Enter Animation
    if (transitionRef.current) {
      transitionRef.current.animateIn(() => {
        // Once covered, change the section
        setIndex(newIndex);

        // Play Exit Animation
        transitionRef.current.animateOut();
      });
    } else {
      // Fallback if ref not ready
      setIndex(newIndex);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <PageTransition ref={transitionRef} />

      {renderSection(index)}

      {/* This is right Side menuBar */}
      <MenuBar setIndex={handleNavigation} index={index} />
    </div>
  );
};

export default App;
