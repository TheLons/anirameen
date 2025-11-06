import { useEffect, useState } from 'react'
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css'
import qrCode from '../../../assets/icons/qrcode.svg'
import arrow from '../../../assets/icons/arrow.png'
import Burger from '../../../assets/icons/burger.png'
import Close from '../../../assets/icons/close.png'

const FlipLink = ({ children, href, onClick }) => {
  const MotionLink = motion(Link);
  // Check if device supports hover (not a touch device)
  const isHoverSupported = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
    return (
      <MotionLink
        initial="initial"
        whileHover={isHoverSupported ? "hovered" : "initial"}
        transition={{ staggerChildren: 0.15 }}
        to={href}
        className={styles.headerLink}
        onClick={onClick}
      >
          <motion.div
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
          >{children}</motion.div>
          <motion.div
            className={styles.headerLinkHovered}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
          >{children}</motion.div>
      </MotionLink>
    )
}

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({top: 0,left: 0,behavior: 'instant'});
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.div className={styles.heroSection}>
        <div className={styles.shadowBox}></div>
        <motion.div className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <p><FlipLink href="#">ANIRAMEEN</FlipLink></p>
        </motion.div>
        <header className={styles.headerMenu}>
          <ul>
            <li><FlipLink href="/video">VIDEO_PROJECTS,</FlipLink></li>
            {/* <li><FlipLink href="/photo">GALLERY,</FlipLink></li> */}
            {/* <li><FlipLink href="/contact">CONTACTS,</FlipLink></li> */}
          </ul>
        </header>
        <button
          className={styles.burger}
          style={{display: undefined}} // always rendered, CSS handles hiding
          onClick={()=> setIsMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <img src={Burger} alt="Burger menu icon" />
        </button>
        {/* Overlay drawer */}
        <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}>
          <button className={styles.closeButton} onClick={()=> setIsMenuOpen(false)} aria-label="Close menu" type="button">
            <img src={Close} alt="Close" />
          </button>
          <nav className={styles.overlayLinks}>
            {/* <Link className={styles.headerLink} to="/" onClick={()=>setIsMenuOpen(false)}>HOME</Link> */}
            <Link className={styles.headerLink} to="/video" onClick={()=>setIsMenuOpen(false)}>VIDEOS</Link>
            {/* <Link className={styles.headerLink} to="/contact" onClick={()=>setIsMenuOpen(false)}>CONTACT</Link> */}
          </nav>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.tags}>
            <p>Adobe Premiere Pro</p>
            <p>Adobe After Effects</p>
            <p>Adobe Photoshop</p>
            <p>Photo</p>
            <p>Video</p>
            <p>Motion Design</p>
          </div>
        </div>
        <div className={styles.qrCode}>
          <img src={qrCode} alt="QR code" />
        </div>
        {/* <InfiniteUpDown /> */}
      </motion.div>
    </>
  )
}

export default HeroSection