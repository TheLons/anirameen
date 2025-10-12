import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import styles from './AwardsSection.module.css'

import { awardsData } from './awardsData'
import AwardItem from './AwardItem'

const AwardsSection = () => {
  const [activeId, setActiveId] = useState('tokyo')
  const ref = useRef(null)
  const inView = useInView(ref, { 
    once: true, 
    amount: 0.4
  })

  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, // Add delay to prevent conflicts
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
    <section className={styles.awardsContainer} aria-labelledby="awards-title">
      <motion.div 
        className={styles.title} 
        ref={ref}
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        <motion.h2 id="awards-title" variants={itemVariants}>awards.</motion.h2>
      </motion.div>
      
      <motion.div 
        className={styles.awardsContent} 
        role="list" 
        aria-label="Awards list"
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        {awardsData.map((award, index) => (
          <motion.div
            key={award.id}
            variants={itemVariants}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <AwardItem
              award={award}
              isActive={activeId === award.id}
              onActivate={setActiveId}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default AwardsSection