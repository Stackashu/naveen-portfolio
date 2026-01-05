import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/SVG/logo.svg";
import myImage from "../assets/SVG/myImage.png";
import leftArrow from "../assets/SVG/leftArrow.svg";
import blueArrrowUp from "../assets/SVG/up_blue_arrow.svg";
import Ps from "../assets/SVG/ps.svg";
import Ae from "../assets/SVG/ae.svg";
import Ai from "../assets/SVG/ai.svg";
import Pr from "../assets/SVG/pr.svg";

const Home = () => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.logo}>
        <img src={logo} alt="naveen" />
      </div>

      <div className={styles.innerDiv}>
        <div className={styles.leftBox}>
          <div className={styles.leftBCon}>
            <div className={styles.topBCont}>
              <h1 className={styles.name}>I'M NAVEEN</h1>
              <h1 className={styles.designation}>GRAPHIC DESIGNER</h1>

              <img
                className={styles.left_arrow}
                src={leftArrow}
                alt="left-arrow"
              />
            </div>

            <div className={styles.midBCont}>
              <p>
                I turn complex ideas into elegant, intuitive designs that engage
                and inspire. Dedicated to high standards and creative
                excellence, I deliver visual solutions that drive your brand
                forward.
              </p>
            </div>

            <div className={styles.blueLine}></div>
            <div className={styles.lastBCont}>
              <h2> More about me </h2>
              {/* <img src="" alt="right-arrow" /> */}
              <div className={styles.circle}>
                <div className={styles.circleIn}>
                  <div className={styles.circleIn1}>
                    <div className={styles.circleIn2}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.rightBCont}>
            <div className={styles.topRight}>
              <img src={Ps} alt="Ps" />
              <img src={Ai} alt="Ai" />
              <img src={Pr} alt="Pr" />
              <img src={Ae} alt="Ae" />
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.arrow_up}>
                <img src={blueArrrowUp} alt="arrowUp" />
              </div>
              <div className={styles.button}>
                <h1>Click on App to Checkout</h1>
                <div className={styles.buttonIn}>
                  <h1>MY WORK PROJECT</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.myImage}>
        <img src={myImage} alt="naveen" />
      </div>
    </div>
  );
};

export default Home;
