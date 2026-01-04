import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/SVG/logo.svg";
import myImage from "../assets/SVG/myImage.png";
import leftArrow from "../assets/SVG/leftArrow.svg"

const Home = () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.logo}>
        <img src={logo} alt="naveen" />
      </div>

      <div className={styles.innerDiv}>
        <div className="leftBox">
          <div className={styles.leftBCon}>

            <div className="topBCont">
              <h1>I'M NAVEEN</h1>
              <h1>GRAPHIC DESIGNER</h1>

              <img className={styles.left_arrow} src={leftArrow} alt="left-arrow" />
            </div>

            <div className="midBCont">
              <p>
                I turn complex ideas into elegant, intuitive designs that engage
                and inspire. Dedicated to high standards and creative
                excellence, I deliver visual solutions that drive your brand
                forward.
              </p>
            </div>
            
            <div className="blueLine"></div>
            <div className="lastBCont">
                <h2> More about me </h2>
                {/* <img src="" alt="right-arrow" /> */}
                <div className="circle"></div>
            </div>

          </div>
        </div>

        <div className="rightBox">

        </div>
      </div>

      <div className={styles.myImage}>
        <img src={myImage} alt="naveen" />
      </div>
    </div>
  );
};

export default Home;
