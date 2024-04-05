import React from 'react'
import styles from "./Skills.module.scss"
import Reveal from '../../ui/Reveal/Reveal'

export default function Skills() {
    return (
        <div id='skills' className={`${styles.skillsPage} page container`}>
            <div className="leftside">
                <div className="lvl">
                    <h2 className="lvl__num">02</h2>
                    <h2 className="lvl__name">SKILLS</h2>
                </div>
            </div>
            <div className={styles.rightside}>
                <div className={styles.skills}>
                    <Reveal>
                        <div className={styles.skills__el}>
                            <div className={`${styles.skills__el_name} ${styles.skills__el_name_80}`}>
                                <h3>JavaScript</h3>
                            </div>
                            <div className={styles.skills__el_prct}>80%</div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.skills__el}>
                            <div className={`${styles.skills__el_name} ${styles.skills__el_name_50}`}>
                                <h3>NodeJS</h3>
                            </div>
                            <div className={styles.skills__el_prct}>50%</div>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className={styles.skills__el}>
                            <div className={`${styles.skills__el_name} ${styles.skills__el_name_60}`}>
                                <h3>ReactJS</h3>
                            </div>
                            <div className={styles.skills__el_prct}>60%</div>
                        </div>
                    </Reveal>
                    
                    <Reveal>
                        <div className={styles.skills__el}>
                            <div className={`${styles.skills__el_name} ${styles.skills__el_name_90}`}>
                                <h3>HTML/CSS</h3>
                            </div>
                            <div className={styles.skills__el_prct}>90%</div>
                        </div>
                    </Reveal>
                </div>
                <div className={styles.languages}>
                    <div className={styles.lang}>
                        <div className={styles.pie}>
                            <div className={styles.lang_lvl}>
                                <span>C1</span>
                            </div>
                        </div>
                        <h3>Armenian</h3>
                    </div>
                    <div className={styles.lang}>
                        <div className={styles.pie}>
                            <div className={styles.lang_lvl}>
                                <span>B1</span>
                            </div>
                        </div>
                        <h3>English</h3>
                    </div>
                    <div className={styles.lang}>
                        <div className={styles.pie}>
                            <div className={styles.lang_lvl}>
                                <span>B2</span>
                            </div>
                        </div>
                        <h3>Russian</h3>
                    </div>
                </div>


            </div>
        </div>
    )
}