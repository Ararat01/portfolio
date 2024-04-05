import React from 'react'
import styles from "./About.module.scss"
import Reveal from '../../ui/Reveal/Reveal'

export default function About() {
  return (
    <div id='about' className={`${styles.aboutPage} page`}>
      <div className="leftside">
        <div className="lvl">
          <h2 className="lvl__num">01</h2>
          <h2 className="lvl__name">ABOUT</h2>
        </div>
      </div>
      <div className={styles.rightside}>
        <Reveal ><p className={styles.about__main}>
          As a junior web developer, I am passionate about leveraging my skills to contribute to innovative web projects and solutions. With a solid foundation in HTML, CSS, and JavaScript, I am eager to expand my knowledge and expertise in front-end and back-end development.
        </p></Reveal>

        <Reveal ><p className={styles.about__label}>
          Throughout my education and projects, I have gained experience in:
        </p></Reveal>
        <ul className={styles.about__list}>
          <Reveal ><li>Building responsive and accessible web interfaces</li></Reveal>
          <Reveal ><li>Integrating third-party APIs to enhance functionality</li></Reveal>
          <Reveal ><li>Working with frameworks such as React and Node.js</li></Reveal>
          <Reveal ><li>Version control using Git and GitHub</li></Reveal>
        </ul>
      </div>
    </div>
  )
}
