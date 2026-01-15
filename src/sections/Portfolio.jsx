import React, { useState } from "react";
import styles from "../styles/Portfolio.module.css";
import Ps from "../assets/SVG/ps.svg";
import Ae from "../assets/SVG/ae.svg";
import Ai from "../assets/SVG/ai.svg";
import Pr from "../assets/SVG/pr.svg";

const TOOLS = [
  { name: "Photoshop", icon: Ps },
  { name: "After Effects", icon: Ae },
  { name: "Illustrator", icon: Ai },
  { name: "Premiere Pro", icon: Pr },
];

const portfolioItems = [
  {
    type: "img",
    posttype: "Banner",
    tools: [Ps, Ai], // Photoshop, Illustrator
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSlA1Utrn3gnSntUoMv3-Nv47Qt3O0EGoFjjhf-z8JdlzCn7dOamHrvBPNal8mZ1gDboG1tJS0bpSzn3cVXMWRhP7bBVyxbRfL6TrB5pzMzsXWDmxYZYwq4lALPPgtrQelHpNaFVkpy4BzK_0iF9aX-IMVzcWI8_ygSo0PQkfb6ZdbTIjMKoTDhJJM4sc7/s1600/3.jpg",
    alt: "Youtube Project",
    text: "Youtube Project"
  },
  {
    type: "img",
    posttype: "Banner",
    tools: [Ps, Pr], // Photoshop, Premiere Pro
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBZAVQ53Y7y9meXIbC_wsS5sQoJcn7-gaHWu7MhBk_qKguSpPkKA35-gE_IKJbvFMuHkk3X8SEoLtUXoWjZ3yd_tORgdAicAOw3R6LvExSXsv4y77msK1Z8tkIfHnDjfK7K9Lf2WV94sGB5DYoAwymV0deW3HkhvT4Bts6lXXNvCNogQDHL8lCltWVJVzl/s1600/4.jpg",
    alt: "Slider Project",
    text: "Slider Project"
  },
  {
    type: "img",
    posttype: "InstaPost",
    tools: [Ai], // Illustrator
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoYAWA3b2nZN8NySzx9QjueDXShCajgROKZv5TOtRWr8Z44HpfmjVoKnteAngBFsCUljywGDq7q4XlMipHAXi-8lWw1s8GyR63vVW8Vs7qYY_iW8uFA3tESP6VbYyHO32JfcxDIqOEiHuvf92V7AyYB8Tqlml9Z8C4kAVT_JAEQRxM_7fnUla7ZEaymxLQ/s1600/6.jpeg",
    alt: "Image Project",
    text: "Image Project"
  },
  {
    type: "img",
    posttype: "Template",
    tools: [Ai, Ps], // Illustrator, Photoshop
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWq1xDqGxdC-EuJbc6nJtmn4iKGbO6k7Xc7O6wUrBrBtFGMrOQjDFmH4XGLFR5tL-J0ZM6abC7-jLoZEMADh2sa22hyphenhyphenImKxXjF1wL8cDMDHPUkVURWPGY6PFvqZHBIE0nnea4qUhgLgy1KUQIbUztwEpWFTMJh0ILPAGtHIgrfXxa28FH0nf2EHmrcB6Jf/s1600/10.jpeg",
    alt: "Image Project",
    text: "Image Project"
  },
  {
    type: "img",
    posttype: "Pemplate",
    tools: [Pr], // Premiere Pro
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRiMkmwd1H-YmmjTfYwMiPADgImSOc8Nya-QhnVSZN0Ajdrxv5qoBSXnEk7JQoK_tEklEn3Gpor3nE4jTBqmV14Ma2AnwDSb1fUit7mBftSlQWxbz_RTQnAdpD0FVtYAyn-oj8OKO1LGQkXS2Z4Rf0zXgnlLNdgnDyPZ0Lp4xLJOlhoAawvpfIvZsskFoF/s1600/8.jpg",
    alt: "Image Project",
    text: "Image Project"
  },
  {
    type: "img",
    posttype: "Template",
    tools: [Pr, Ae], // Premiere Pro, After Effects
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTas3x4_CenaY2mVJ3uUdBzbX-QUkbE_xwE7Jw6_e2vxnUicfaJEk7GvWwrtXGjKaNncIC9R2-G3tiVMadxqAcEI5rSsPQHInhDYkO9_lcb_k3ZNeHo685sCl6aFnTZx6vAyCnkmSlxEnTtF12CrgLheIJTjXfLB2ktWgInJp7ZHwEmbxeQZSEUy9STTpu/s1600/9.jpeg",
    alt: "Image Project",
    text: "Image Project"
  },
  {
    type: "img",
    posttype: "InstaPost",
    tools: [Ae, Ai], // After Effects, Illustrator
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicEW-jQK0JvAO9agVv0W-4Ic5dkkI0dcrti-SAOU8TznenQyYizjOWUJONmKRdhqaMNRpn8t1lS14vor5lES3HRyJPxpPaZgoajQkbe3SGGZVDW0AJOKk6rl23D01J8dFVgKQYTRPHpvTdCCxEuGTz9tsw8EPslBL1671Fyuqn1UJkaAV4QkieDTNBq8pb/s1600/Post%203.jpg",
    alt: "Image Project",
    text: "Image Project"
  },
  {
    type: "img",
    posttype: "Banner",
    tools: [Ps, Pr], // Photoshop, Premiere Pro
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik0-QQwAdgVxRKW5GiAxONEW0ou5IbqIJNycCuccl4iBTB-UD_4bp8JrxxxHIk1A4_wJ5MmzsxLeEgI7PetUq700FY6AFBGFIpkeJ9AC6j52h1DbgOmlxhhEYLhG-9aEe_OJsxiOjxukpMiQ_KafVIMkQIrOI_8auSIxJNbvZW6q3KSmEZQvcIYEknv27Z/s1600/7.jpg",
    alt: "Image Project",
    text: "Image Project"
  },
  
];

const POSTTYPE = ["All" ,"Banner", "InstaPost", "Template", "Pemplate"];

const Portfolio = () => {
  const [selectedToolIcon, setSelectedToolIcon] = useState(null);
  const [selectedPostType, setSelectedPostType] = useState("");

  // Filtering logic
  const filteredItems = portfolioItems.filter((item) => {
    let toolMatch = true;
    let postTypeMatch = true;

    // If a tool is selected, item.tools must include the icon src of that tool
    if (selectedToolIcon ) {
      toolMatch = item.tools.includes(selectedToolIcon);
    }

    // If a posttype is selected, must match
    if (selectedPostType && selectedPostType != "All") {
      postTypeMatch = item.posttype === selectedPostType;
    }

    return toolMatch && postTypeMatch;
  });

  // UI handling for tool selection
  const handleToolClick = (icon) => {
    // Toggle unselect if already selected
    setSelectedToolIcon((prev) => (prev === icon ? null : icon));
  };

  // UI handling for posttype
  const handlePostTypeChange = (e) => {
    setSelectedPostType(e.target.value === "content" ? "" : e.target.value);
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.topBar}>
          <div className={styles.topLeft}>
            <div className={styles.portfolioHead}>
              <h1>PORTFOLIO</h1>
              <h3>PORTFOLIO</h3>
            </div>

            <select
              className={styles.selectType}
              name="content"
              value={selectedPostType ? selectedPostType : "content"}
              onChange={handlePostTypeChange}
            >
              {POSTTYPE.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.topRight}>
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className={styles.imgCont1}
                style={{
                  border:
                    selectedToolIcon === tool.icon
                      ? "2px solid #33a8ff"
                      : "2px solid transparent",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
                onClick={() => handleToolClick(tool.icon)}
                tabIndex={0}
                aria-pressed={selectedToolIcon === tool.icon}
              >
                <img
                  className={styles.filterTools}
                  src={tool.icon}
                  alt={tool.name}
                />
                <h1>{tool.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.imgCont}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt || `Portfolio ${idx}`}
                  className={styles.portfolioImg}
                />
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  color: "#888",
                  margin: "2rem auto",
                  width: "100%",
                  fontSize: "1.2rem",
                }}
              >
                No projects found matching your filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
