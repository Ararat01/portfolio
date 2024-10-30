import React from 'react'
import styles from "./Education.module.scss"
import Reveal from '../../ui/Reveal/Reveal'

export default function Education() {
  return (
    <div id='education' className={`${styles.educationPage} page container`}>
      <div className="leftside">
        <div className="lvl">
          <h2 className="lvl__num">03</h2>
          <h2 className="lvl__name">EDUCATION</h2>
        </div>
      </div>
      <div className={styles.rightside}>
        <Reveal >
          <table>
            <thead>
              <tr>
                <th>Company / Year</th>
                <th>Course Title</th>
                <th>Skills Gained</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TUMO Gyumri 2016-2019</td>
                <td>Web and Game Dev</td>
                <td>HTML/CSS, JS, C#, Unity</td>
              </tr>
              <tr>
                <td>Yandex school 2019</td>
                <td>Python base</td>
                <td>Python</td>
              </tr>
              <tr>
                <td>GITC 2021</td>
                <td>Frontend Dev</td>
                <td>JS, AngularJS, SASS, Npm</td>
              </tr>
              <tr>
                <td>Engineering school 2021-23</td>
                <td>ML, Electronics, 3D</td>
                <td>Python, C++, Sodivdworks, Git</td>
              </tr>
              <tr>
                <td>Internship at Fambox 2023</td>
                <td>Intern Frontend Dev</td>
                <td>Angular JS</td>
              </tr>
              <tr>
                <td>Midivtary service 2023-25</td>
                <td>Shooter ツ</td>
                <td>ReactJS, NodeJS (MERN)</td>
              </tr>
              <tr>
                <td>Polytechnic University 2025-...</td>
                <td>Information Technology</td>
                <td>University knowledge</td>
              </tr>
            </tbody>
          </table>
        </Reveal>
        <Reveal >
          <div className={styles.ul}>
            <div className={styles.li}>
              <strong>TUMO Gyumri 2016-2019</strong><br />
              <strong>Course Title:</strong> Web and Game Dev<br />
              <strong>Skills Gained:</strong> HTML/CSS, JS, C#, Unity
            </div>
            <div className={styles.li}>
              <strong>Yandex school 2019</strong><br />
              <strong>Course Title:</strong> Python base<br />
              <strong>Skills Gained:</strong> Python
            </div>
            <div className={styles.li}>
              <strong>GITC 2021</strong><br />
              <strong>Course Title:</strong> Frontend Dev<br />
              <strong>Skills Gained:</strong> JS, AngularJS, SASS, Npm
            </div>
            <div className={styles.li}>
              <strong>Engineering school 2020-22</strong><br />
              <strong>Course Title:</strong> ML, Electronics, 3D<br />
              <strong>Skills Gained:</strong> Python, C++, Sodivdworks, Git
            </div>
            <div className={styles.li}>
              <strong>Internship at Fambox 2022</strong><br />
              <strong>Course Title:</strong> Intern Frontend Dev<br />
              <strong>Skills Gained:</strong> Angular JS
            </div>
            <div className={styles.li}>
              <strong>Military service 2022-24</strong><br />
              <strong>Course Title:</strong> Shooter ツ<br />
              <strong>Skills Gained:</strong> ReactJS, NodeJS (MERN)
            </div>
            <div className={styles.li}>
              <strong>Polytechnic University 2024-...</strong><br />
              <strong>Course Title:</strong> Information Technology<br />
              <strong>Skills Gained:</strong> University knowledge
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}