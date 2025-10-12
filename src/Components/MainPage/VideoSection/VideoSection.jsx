import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './VideoSection.module.css'
import playLogo from '../../../assets/icons/playLogo.svg'
import { motion, useInView } from 'framer-motion'

import ArrowRight from '../../../assets/icons/arrowRight.png'

const VideoSection = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.4 });
    const [selectedVideo, setSelectedVideo] = useState(null);

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

    const video_preview_urls = [
        {
            id: 'showreel',
            video_prev : "src/assets/videoPreview/showreel.jpg",
            video_url: "https://player.vimeo.com/video/1108432715?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
            video_heading: "Showreel 2025",
            video_text: "Director / Video Editor / Videographer",
            hasVideo: true
        },
        {
            id: 'riot',
            video_prev: "src/assets/videoPreview/riot.jpg",
            video_url: "https://www.youtube.com/embed/gp0TV-b1XaM?si=GT0yKfr2Xa8H8OK_",
            video_heading: "The making of VCT Pacific Trophy",
            video_text: "Video Editor",
            hasVideo: true
        },
        {
            id: 'koru-pharma',
            video_prev: "src/assets/videoPreview/koru-pharma.jpg",
            video_url: "https://www.youtube.com/embed/GTUBLc3nyyc?si=-YyuALxNJ37CoQDR",
            video_heading: "Koru Pharma",
            video_text: "Video Director / Video Editor / Videographer",
            hasVideo: true
        }
    ]

    const handleVideoClick = (video) => {
        if (video.hasVideo) {
            setSelectedVideo(video);
        }
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className={styles.videoSection}>
            <motion.div 
                className={styles.container} 
                ref={ref} 
                initial="hidden" 
                animate={inView ? 'visible' : 'hidden'} 
                variants={containerVariants}
            >
                <motion.div className={styles.title} variants={itemVariants}>
                    <h2>video projects.</h2>
                </motion.div>
                <div className={styles.videoContainer}>
                    {video_preview_urls.map((video, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            style={{ display: 'inline-block' }}
                        >
                            <VideoCard 
                                {...video} 
                                onClick={() => handleVideoClick(video)}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div 
                className={styles.showMore}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 1.2, // Appears after all videos
                }}
            >
                <Link 
                    to="/Video" 
                    className={styles.link}
                >
                    <p>Show more</p>
                </Link>
            </motion.div>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={closeVideo} />
            )}
        </div>
    )
}

const VideoCard = ({ video_prev, video_heading, video_text, hasVideo, onClick }) => {
    const heading = video_heading.split('\n').map((item, i) => {
        return (
            <p className={styles.videoHeading} key={i}>{item}</p>
        )
    })
    const text = video_text.split('\n').map((item, i) => {
        return (
            <p className={styles.videoText} key={i}>{item}</p>
        )
    })

    return (
        <div 
            className={`${styles.video} ${hasVideo ? styles.clickable : ''}`}
            onClick={onClick}
        >
            <div className={styles.videoContent} style={{
                backgroundImage: `url(${video_prev})`,
            }}>
                {hasVideo && (
                    <div className={styles.playOverlay}>
                        <img src={playLogo} alt="Play" />
                    </div>
                )}
                <div className={styles.description}>
                    {heading}
                    {text}
                </div>
            </div>
        </div>
    )
}

const VideoModal = ({ video, onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <div 
            className={styles.videoModalOverlay}
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
        >
            <div className={styles.videoModalContent}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close video"
                >
                    ×
                </button>
                <h2 id="video-modal-title" className={styles.videoModalTitle}>
                    {video.video_heading}
                </h2>
                <div className={styles.videoWrapper}>
                    <iframe 
                        src={video.video_url}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={video.video_heading}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoSection