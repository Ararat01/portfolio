import React, { useEffect, useState } from 'react'
import styles from "./Background.module.scss"

export default function Background() {  
    const [randomX, setRandomX] = useState<Number>(Math.random() * 10)
    useEffect(() => {
        setTimeout(() => {
            setRandomX(Math.random() * 10)
        }, 100)
    },[randomX])

  return (
    <div className={styles.out}>
        <div className={styles.bgImg}></div>
        <div 
            className={styles.bg}
            style={{"transform": `translateY(${randomX}%) translate(${randomX}%)`}}
        ></div>
    </div>
  )
}
