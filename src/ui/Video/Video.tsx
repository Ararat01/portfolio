import React, { useRef, useState } from 'react'
import styles from "./Video.module.scss"

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className={styles.videoPage}>
      <video ref={videoRef} loop muted playsInline autoPlay className={`${styles.video} ${isPlaying ? styles.active : ""}`} src="https://framerusercontent.com/assets/zCdUrfzQ3JjiJqNofUe0mW4.mp4">
        Your browser does not support the video tag.
      </video>
      <div onClick={handleVideoClick} className={`${styles.dark} ${isPlaying ? styles.active : ""}`}></div>
    </div>
  )
}
