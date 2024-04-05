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
                <td>Python, C++, Solidworks, Git</td>
              </tr>
              <tr>
                <td>Internship at Fambox 2023</td>
                <td>Intern Frontend Dev</td>
                <td>Angular JS</td>
              </tr>
              <tr>
                <td>Military service 2023-25</td>
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
      </div>
    </div>
  )
}