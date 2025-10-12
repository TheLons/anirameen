import React from 'react'
import styles from './ReviewsSection.module.css'

const ReviewCard = ({ review, onCardClick }) => {
  const { name, content } = review

  return (
    <article
      className={styles.contentCard}
      onClick={() => onCardClick(review)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onCardClick(review)
        }
      }}
      aria-label={`Click to read full review from ${name}`}
    >
      <h3>{name}</h3>
      <p className={styles.cardText}>{content.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}</p>
      <div className={styles.readMore}>
        <span>Click to read more</span>
      </div>
    </article>
  )
}

export default ReviewCard
