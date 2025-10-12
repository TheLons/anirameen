import React from 'react'
import styles from './ReviewsSection.module.css'

const ReviewModal = ({ review, isOpen, onClose }) => {
  if (!isOpen || !review) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 id="modal-title">{review.name}</h2>
        <p>{review.content.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}</p>
      </div>
    </div>
  )
}

export default ReviewModal
