import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactPage.module.css'
import ContactSection from '../MainPage/ContactSection/ContactSection'
import Burger from '../../assets/icons/burger.png'
import Close from '../../assets/icons/close.png'

const ContactPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.shadowBox}></div>
                <h1>CONTACT</h1>
                <div 
                    className={styles.burger} 
                    onClick={toggleMenu}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleMenu();
                        }
                    }}
                >
                    <img src={Burger} alt="Burger menu" />
                </div>
            </div>
            
            <main className={styles.mainContent}>
                <ContactSection />
            </main>

            {/* Overlay Menu */}
            <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}>
                <div className={styles.closeButton} onClick={toggleMenu}>
                    <img src={Close} alt="Close menu" />
                </div>
                <nav className={styles.overlayLinks}>
                    <Link to="/" onClick={toggleMenu}>HOME</Link>
                    <Link to="/Video" onClick={toggleMenu}>VIDEO</Link>
                    {/* <Link to="/photo" onClick={toggleMenu}>PHOTO</Link> */}
                    <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
                </nav>
            </div>
        </div>
    )
}

export default ContactPage
