import React from 'react'
import HOME from "../assets/SVG/home.svg"
import PROFILEICON from "../assets/SVG/profile_icon.svg"
import SUITCASE from "../assets/SVG/suitcase.svg"
import CONTACT from "../assets/SVG/customer_support.svg"
import styles from "../styles/MenuBar.module.css"
const ICONS = [
  HOME , PROFILEICON , SUITCASE , CONTACT
]
const MenuBar = ({setIndex , index}) => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        {ICONS.map((icon , idx)=>(
          <div onClick={()=>setIndex(idx)} key={idx} className={`${styles.imgCont} ${index == idx ? styles.activeTab : ""}`}>
            <img className={` ${index == idx ? styles.activeImgColor : styles.imgColor}`} src={icon} alt={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuBar
 