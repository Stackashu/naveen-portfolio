import React, { useEffect, useState } from 'react'
import HOME from "../assets/SVG/home.svg"
import PROFILEICON from "../assets/SVG/profile_icon.svg"
import SUITCASE from "../assets/SVG/suitcase.svg"
import CONTACT from "../assets/SVG/customer_support.svg"
import styles from "../styles/MenuBar.module.css"
import Assets from "../assets/SVG2/Assets.svg"
const ITEMS = [
  { icon: HOME, label: "Home" },
  { icon: PROFILEICON, label: "Career" },
  { icon: SUITCASE, label: "Portfolio" },
  { icon: CONTACT, label: "Contact" },
  { icon: Assets, label: "Assets" },
]
const MenuBar = ({setIndex , index}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1200);

  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= 1200;
      setIsDesktop(desktop);
      if (desktop) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleTabClick = (idx) => {
    if (idx === 4) {
      const password = window.prompt("Enter password to open Assets");
      if (password !== "Airtel@123") {
        window.alert("Wrong password");
        return;
      }
    }
    setIndex(idx);
    if (!isDesktop) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={styles.outerDiv}>
      {!isDesktop && (
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <div className={`${styles.innerDiv} ${!isDesktop && menuOpen ? styles.showMenu : ""}`}>
        {ITEMS.map((item , idx)=>(
          <div onClick={()=>handleTabClick(idx)} key={idx} className={`${styles.imgCont} ${index == idx ? styles.activeTab : ""}`}>
            <img className={` ${index == idx ? styles.activeImgColor : styles.imgColor}`} src={item.icon} alt={item.label} />
            {!isDesktop && <span className={styles.label}>{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuBar
 