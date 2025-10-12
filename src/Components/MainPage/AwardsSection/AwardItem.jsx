import React from 'react'
import styles from './AwardsSection.module.css'

const AwardItem = ({ award, isActive, onActivate }) => {
  const { id, logo, name, information, description } = award

  const handleToggle = () => {
    onActivate(isActive ? '' : id)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <div
      className={`${styles.award} ${isActive ? styles.active : ''}`}
      onMouseEnter={() => onActivate(id)}
      onFocus={() => onActivate(id)}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-controls={`award-desc-${id}`}
      onKeyDown={handleKeyDown}
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
