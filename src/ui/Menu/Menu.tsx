import React from 'react'
import styles from "./Menu.module.scss"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_list}>
                <div className={styles.menu_nav}>
                    <a href="#home">
                        <img src="/menu/home.png" alt="" />
                    </a>
                    <p>HOME</p>

                </div>
                <div className={styles.menu_nav}>
                    <a href="#about">
                        <img src="/menu/about.png" alt="" />
                    </a>
                    <p>ABOUT</p>
                </div>
                <div className={styles.menu_nav}>
                    <a href="#skills">
                        <img src="/menu/skills.png" alt="" />
                    </a>
                    <p>SKILLS</p>
                </div>
                <div className={styles.menu_nav}>
                    <a href="#education">
                        <img src="/menu/education.png" alt="" />
                    </a>
                    <p>EDUCATION</p>
                </div>
                <div className={styles.menu_nav}>
                    <a href="#portfolio">
                        <img src="/menu/portfolio.png" alt="" />
                    </a>
                    <p>PORTFOLIO</p>
                </div>
                <div className={styles.menu_nav}>
                    <a href="#contact">
                        <img src="/menu/contact.png" alt="" />
                    </a>
                    <p>CONTACT</p>
                </div>
            </div>
        </div>
    )
}
