import React from 'react'


import styles from "./Portfolio.module.scss"

export default function Portfolio() {
  return (
    <div id='portfolio' className={`${styles.portfolioPage} page container`}>
      <div className="leftside">
        <div className="lvl">
          <h2 className="lvl__num">04</h2>
          <h2 className="lvl__name">PORTFOLIO</h2>
        </div>
      </div>
      <div className={styles.rightside}>
        <a href='https://w2w-frontend.vercel.app/home/' target='_blank' rel="noreferrer" className={styles.block}>
          <img src="/w2w.png" alt="" />
          <div className={styles.block_hover}>
            <div className={styles.block_hover_text}>
              <h4>What2Watch</h4>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0a0f0e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#0a0f0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
          </div>
        </a>
        <a href='https://w2w-frontend.vercel.app/home/' target='_blank' rel="noreferrer" className={styles.block}>
          <img src="/init.png" alt="" />
          <div className={styles.block_hover}>
            <div className={styles.block_hover_text}>
              <h4>inIT</h4>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0a0f0e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#0a0f0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
          </div>
        </a>
        <a href='https://easyword.vercel.app/' target='_blank' rel="noreferrer" className={styles.block}>
          <img src="/ew.png" alt="" />
          <div className={styles.block_hover}>
            <div className={styles.block_hover_text}>
              <h4>EasyWord</h4>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0a0f0e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#0a0f0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
          </div>
        </a>
        <a href='https://ararat01.github.io/game-store/' target='_blank' rel="noreferrer" className={styles.block}>
          <img src="/gamestore.png" alt="" />
          <div className={styles.block_hover}>
            <div className={styles.block_hover_text}>
              <h4>Game Store</h4>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0a0f0e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#0a0f0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}