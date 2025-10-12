import React, { useRef } from 'react'
import styles from './PhotoSection.module.css'
import { motion, useInView } from 'framer-motion'

import horizontal_1 from '../../../assets/photo/horizontal_1.png'
import horizontal_2 from '../../../assets/photo/horizontal_2.png'

import vertical_1 from '../../../assets/photo/vertical_1.png'
import vertical_2 from '../../../assets/photo/vertical_2.png'
import vertical_3 from '../../../assets/photo/vertical_3.png'
import vertical_4 from '../../../assets/photo/vertical_4.png'

const PhotoSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={styles.photoSection}>
      <motion.div 
        className={styles.photoContent} 
        ref={ref} 
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        <motion.div className={styles.title} variants={itemVariants}>
          <h2>photo gallery.</h2>
        </motion.div>
        <motion.div className={styles.photoContainer} variants={itemVariants}>
          <div className={styles.photoSubContainer}>
            <img className={styles.horizontalPhoto} src={horizontal_1} alt="Photo of a man" />
            <img className={styles.verticalPhoto} src={vertical_1} alt="Photo" />
            <img src={vertical_2} alt="Photo" />
          </div>
          <div className={styles.photoSubContainer}>
            <img className={styles.verticalPhoto} src={vertical_3} alt="Photo" />
            <img className={styles.verticalPhoto} src={vertical_4} alt="Photo" />
            <img className={styles.horizontalPhoto} src={horizontal_2} alt="Photo of a woman" />
          </div>
        </motion.div>
      </motion.div>
      <motion.a 
        className={styles.showMore}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 1.2, // Appears after all photos
        }}
      >
        <p>Show more</p>
      </motion.a>
    </div>
  )
}

export default PhotoSection