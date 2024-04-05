import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

export default function Reveal({ children }: { children: JSX.Element }) {
  const ref = useRef(null)
  const inView = useInView(ref)

  const mainControls = useAnimation()

  useEffect(() => {
    if (inView) {
      mainControls.start("visible")
    }
  }, [inView])

  return (<div ref={ref}>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >{children}</motion.div></div>
  );
}