import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ReviewsSection.module.css'
import { reviewsData } from './reviewsData'
import ReviewCard from './ReviewCard'
import ReviewModal from './ReviewModal'
import { useBodyLock } from '../../Utils/useBodyLock'

const ReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  useBodyLock(isModalOpen)

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

  const handleCardClick = (review) => {
    setSelectedReview(review)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedReview(null)
  }

  return (
    <section className={styles.reviewContainer} aria-labelledby="reviews-title">
      <motion.div 
        className={styles.title} 
        ref={ref}
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        <motion.h2 id="reviews-title" variants={itemVariants}>reviews.</motion.h2>
      </motion.div>
      
      <motion.div 
        className={styles.reviewContent} 
        role="region" 
        aria-label="Customer reviews"
        initial="hidden" 
        animate={inView ? 'visible' : 'hidden'} 
        variants={containerVariants}
      >
        {reviewsData.map((review, index) => (
          <motion.div
            key={review.id}
            variants={itemVariants}
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <ReviewCard
              review={review}
              onCardClick={handleCardClick}
            />
          </motion.div>
        ))}
      </motion.div>

      <ReviewModal
        review={selectedReview}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default ReviewsSection