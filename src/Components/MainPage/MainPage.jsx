import styles from './MainPage.module.css'

import HeroSection from './HeroSection/HeroSection';
import About from './AboutSection/About';
import VideoSection from './VideoSection/VideoSection';
import PhotoSection from './PhotoSection/PhotoSection';
import PartnerSection from './PartnerSection/PartnerSection';
import ReviewsSection from './PartnerSection/ReviewsSection';
import AwardsSection from './AwardsSection/AwardsSection';
import ContactSection from './ContactSection/ContactSection';

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from 'react';
// import Lenis from 'lenis'

const SECTION_HEIGHT = 1500;

const MainPage = () => {
    // const lenisRef = useRef(null);
    // const { scrollY } = useScroll();

    // const opacity = useTransform(scrollY, [0, SECTION_HEIGHT], [1, 0]);
    // const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT], ["100%", "60%"]);

    // useEffect(() => {
    //     // Initialize Lenis smooth scrolling
    //     lenisRef.current = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    //         orientation: 'vertical',
    //         gestureOrientation: 'vertical',
    //         smoothWheel: true,
    //         wheelMultiplier: 1,
    //         smoothTouch: false,
    //         touchMultiplier: 2,
    //         infinite: false,
    //     });

    //     // RAF loop for Lenis
    //     function raf(time) {
    //         lenisRef.current?.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);

    //     // Cleanup
    //     return () => {
    //         if (lenisRef.current) {
    //             lenisRef.current.destroy();
    //         }
    //     };
    // }, []);

    return (
        <div className={styles.global}>
            {/* <motion.div
                style={{
                    opacity,
                    backgroundSize,
                }}
            > */}
                <HeroSection />
            {/* </motion.div> */}
            <About />
            <VideoSection />
            {/* <PhotoSection /> */}
            <PartnerSection />
            <ReviewsSection />
            <AwardsSection />
            {/* <ContactSection /> */}
        </div>
    )
}

export default MainPage;