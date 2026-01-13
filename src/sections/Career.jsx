import React from "react";
import styles from "../styles/Career.module.css";
import RESUMEIMG from "../assets/resume/resumePic.png";
import RIGHTARROW from "../assets/SVG/leftArrow.svg";


const EXPERIENCE = [
  {
    name: "ADG ONLINE SOLUTION",
    duration: "2023-2025",
    text: `Graphic Designer at ADG Online Solution Pvt Ltd, where I
            craft dynamic visual assets to enhance user interfaces and
           elevate digital experiences in the IT sector, blending
           creative design with cutting-edge technology.`,
  },
  {
    name: "IMAGE IMPACT PVT LTD",
    duration: "2021-2023",
    text: `Graphic Designer at Image Impact Pvt Ltd, where I created
           visually impactful designs for print media, delivering
           compelling and effective visual solutions that enhance
           brand identity and communication.`,
  },
  {
    name: "POSITIVE IMAGES PVT LTD",
    duration: "2019-2020",
    text: `Graphic Designer at Image Impact Pvt Ltd, where I created
           visually impactful designs for print media, delivering
           compelling and effective visual solutions that enhance
           brand identity and communication.`,
  },
];

const CAREER = [
  {
    name: "MASTER DEGREE",
    duration: "2023-2025",
    text: `Graphic Designer at ADG Online Solution Pvt Ltd, where I
            craft dynamic visual assets to enhance user interfaces and
            elevate digital experiences in the IT sector, blending
            creative design with cutting-edge technology.`,
  },
  {
    name: "BACHELOR'S DEGREE",
    duration: "2021-2023",
    text: `Graphic Designer at Image Impact Pvt Ltd, where I created
            visually impactful designs for print media, delivering
            compelling and effective visual solutions that enhance
            brand identity and communication.`,
  },
  {
    name: "SENIOR SECONDARY",
    duration: "2019-2020",
    text: `Graphic Designer at Image Impact Pvt Ltd, where I created
            visually impactful designs for print media, delivering
            compelling and effective visual solutions that enhance
            brand identity and communication.`,
  },
];
const Career = () => {
 
  const downloadCv = () => {
    const cvUrl = "/naveenResume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Naveen_Kumar_Yadav_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.leftDiv}>
          <div className={styles.resumeHeading}>
            <h1>RESUME</h1>
            <h2>RESUME</h2>
          </div>

          <div className={styles.career}>
            <h1 className={styles.personalHead}>Personal infos</h1>
            <div className={styles.whiteLine}></div>

            <div className={styles.personlDetails}>
              <div className={styles.leftD}>
                <div className={styles.info}>
                  <h1>Name :</h1>
                  <h1>Naveen Kumar Yadav</h1>
                </div>
                <div className={styles.info}>
                  <h1>Gender :</h1>
                  <h1>Male</h1>
                </div>
                <div className={styles.info}>
                  <h1>Contact :</h1>
                  <h1>+91 9718884248</h1>
                </div>
              </div>
              <div className={styles.rightD}>
                <div className={styles.info}>
                  <h1>Email :</h1>
                  <h1>naveenyadavfbd@gmail.com</h1>
                </div>
                <div className={styles.info}>
                  <h1>Designation :</h1>
                  <h1>Graphic Designer</h1>
                </div>
                <div className={styles.info}>
                  <h1>Address :</h1>
                  <h1>Roshan Nagar Faridabad Harayana</h1>
                </div>
              </div>
            </div>

            <div className={styles.Experience}>
              <div>
                <h1>Experience & Education</h1>
                <div className={styles.whiteLine}></div>
              </div>

              <div className={styles.exp}>
                <div className={styles.leftExp}>
                  {EXPERIENCE.map((itm, idx) => (
                    <div className={styles.card} key={idx}>
                      <div className={styles.topBar}>
                        <h2>{itm.name}</h2>
                        <h2>{itm.duration}</h2>
                      </div>
                      <div className={styles.para}>
                        <p>{itm.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.rightCar}>
                  {CAREER.map((itm, idx) => (
                    <div className={styles.card} key={idx}>
                      <div className={styles.topBar}>
                        <h2>{itm.name}</h2>
                        <h2>{itm.duration}</h2>
                      </div>
                      <div className={styles.para}>
                        <p>{itm.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.resumeBox}>
            <img src={RESUMEIMG} alt="resume" />
          </div>

          <div className={styles.bottomBut}>
            <img src={RIGHTARROW} alt="rightArrow" />

            <div onClick={downloadCv} className={styles.cvButton}>
              <h1>Download CV</h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Career;
