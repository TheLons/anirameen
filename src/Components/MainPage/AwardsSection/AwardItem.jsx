import React from 'react'
import styles from './AwardsSection.module.css'

const AwardItem = ({ award, isActive, onActivate }) => {
  const { id, logo, name, information, description } = award

  return (
    <div
      className={`${styles.award}`}
    >
      <div className={styles.preview}>
        <div className={styles.previewMain}>
          <div className={styles.logoContainer}>
            <img src={logo} alt={`${name} logo`} />
          </div>
          <div className={styles.name}>
            <h3>{name}</h3>
          </div>
        </div>
        <div className={styles.information}>
          <p>{information}</p>
          <span className={`${styles.chevron} ${isActive ? styles.chevronOpen : ''}`} aria-hidden></span>
        </div>
      </div>
      <div className={styles.description} id={`award-desc-${id}`}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AwardItem
