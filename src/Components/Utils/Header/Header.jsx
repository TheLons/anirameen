import styles from './Header.module.css'
import React from 'react'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <section className={styles.header}>
            <div className={styles.backOpacity}></div>
            <ul className={styles.container}>
                <li>HOME</li>
                <li>ABOUT ME</li>
                <li>VIDEOS</li>
                <li>PHOTOS</li> 
            </ul>
        </section>
    </header>
  )
}

export default Header