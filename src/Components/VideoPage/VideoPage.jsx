import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import Lenis from 'lenis'

import styles from './VideoPage.module.css'
import Burger from '../../assets/icons/burger.png'
import Close from '../../assets/icons/close.png'
import playLogo from '../../assets/icons/playLogo.svg'

const videos_list = [
    {
        id: 'vct-pacific',
        video_prev : "src/assets/videoPreview/riot.jpg",
        video_url: "https://www.youtube.com/embed/gp0TV-b1XaM?si=AvHn1fiqvy9ziTb_",
        video_heading: "VCT Pacific Trophy",
        video_text: "Video Editor",
        hasVideo: true
    },
    {
        id: 'koru-pharma',
        video_prev: "src/assets/videoPreview/koru-pharma.jpg",
        video_url: "https://www.youtube.com/embed/GTUBLc3nyyc?si=dqQRWuWOrSkn4WB7",
        video_heading: "Koru Pharma",
        video_text: "Video Director / Video Editor",
        hasVideo: true
    },
    {
        id: 'vbi',
        video_prev: "src/assets/videoPreview/vbi.jpg",
        video_url: "https://player.vimeo.com/video/1019736661?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_heading: "VBI Promotional Video",
        video_text: "Video Editor",
        hasVideo: true
    },
    {
        id: 'jhope',
        video_prev: "src/assets/videoPreview/jhope.jpg",
        video_url: "https://www.youtube.com/embed/JDaGyzKCfYg?si=sUvwiQpPZ6o4Gd5B",
        video_heading: "j-hope (제이홉) 'MONA LISA' ",
        video_text: "Video Director / Videographer / Video Editor",
        hasVideo: true
    },
    {
        id: 'suidae',
        video_prev: "src/assets/videoPreview/suidae.jpg",
        video_url: "https://player.vimeo.com/video/915087036?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_heading: "Suidae Short Film",
        video_text: "Video Director / Video Editor",
        hasVideo: true
    },
    {
        id: 'techlado',
        video_prev: "src/assets/videoPreview/techlado.jpg",
        video_url: "https://player.vimeo.com/video/800079014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        video_heading: "TechLado Project Example",
        video_text: "Video Editor",
        hasVideo: true
    },
]

// Use a separate data source for reels. Fill with real items as needed.
const reels_list = [
    {
        id: 'tattoo',
        video_prev: 'src/assets/videoPreview/tattoo.jpg',
        video_url: 'https://player.vimeo.com/video/913238608?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Tattoo Studio Promo',
        video_text: 'Video Director / Videographer / Video Editor',
        hasVideo: true
    },
    {
        id: 'foundation',
        video_prev: 'src/assets/videoPreview/foundation.jpg',
        video_url: 'https://player.vimeo.com/video/1108342002?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Promo Foundation',
        video_text: 'Video Director / Videographer / Video Editor',
        hasVideo: true
    },
    {
        id: 'lounge',
        video_prev: 'src/assets/videoPreview/lounge.jpg',
        video_url: 'https://player.vimeo.com/video/929306447?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Lounge Bar Promo',
        video_text: 'Video Director / Videographer / Video Editor',
        hasVideo: true
    },
    {
        id: 'painter',
        video_prev: 'src/assets/videoPreview/painter.jpg',
        video_url: 'https://player.vimeo.com/video/848638896?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Painter Social Promo',
        video_text: 'Video Director / Videographer / Video Editor',
        hasVideo: true
    },
    {
        id: 'wonhwa1',
        video_prev: 'src/assets/videoPreview/wonhwa1.jpg',
        video_url: 'https://player.vimeo.com/video/1122561736?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Beauty box promotion at London Hallyu Festival',
        video_text: 'Video Director / Video Editor',
        hasVideo: true
    },
    {
        id: 'wonhwa2',
        video_prev: 'src/assets/videoPreview/wonhwa2.jpg',
        video_url: 'https://player.vimeo.com/video/1122573461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        video_heading: 'Beauty box promotion at London Hallyu Festival',
        video_text: 'Video Director / Videographer / Video Editor',
        hasVideo: true
    },
]

const MediaCard = ({ variant, video_prev, video_heading, video_text, hasVideo, onClick }) => {
    const heading = video_heading.split('\n').map((item, i) => (
        <p className={styles.videoHeading} key={i}>{item}</p>
    ));
    const text = video_text.split('\n').map((item, i) => (
        <p className={styles.videoText} key={i}>{item}</p>
    ));

    const isReel = variant === 'reels';
    const cardClass = isReel ? styles.reelCard : styles.video;
    const contentClass = isReel ? styles.reelContent : styles.videoContent;

    return (
        <div
            className={`${cardClass} ${hasVideo ? styles.clickable : ''}`}
            onClick={onClick}
        >
            <div
                className={contentClass}
                style={{ backgroundImage: `url(${video_prev})` }}
            >
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
    );
}

const VideoModal = ({ video, isReel, onClose }) => {
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
            <div className={`${styles.videoModalContent} ${isReel ? styles.reelModalContent : ''}`}>
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
                <div className={`${styles.videoWrapper} ${isReel ? styles.reelWrapper : ''}`}>
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

// Removed VideosComponent and ReelsComponent in favor of inline rendering with MediaCard

const VideoPage = () => {
    const [isActive, setIsActive] = useState('videos');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const routePath = useLocation();
    // const lenisRef = useRef(null);

    // Scroll to top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath])

    // Initialize Lenis smooth scrolling
    // useEffect(() => {
    //     lenisRef.current = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         orientation: 'vertical',
    //         gestureOrientation: 'vertical',
    //         smoothWheel: true,
    //         wheelMultiplier: 1,
    //         smoothTouch: false,
    //         touchMultiplier: 2,
    //         infinite: false,
    //     });

    //     function raf(time) {
    //         lenisRef.current?.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);

    //     return () => {
    //         if (lenisRef.current) {
    //             lenisRef.current.destroy();
    //         }
    //     };
    // }, []);

    const handleMenuClick = (menu) => {
        setIsActive(menu);
    };

    const handleVideoClick = (video) => {
        if (video.hasVideo) {
            setSelectedVideo(video);
        }
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
        setIsMenuOpen(false);
        navigate("/"); // переход после закрытия меню
      };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <div className={styles.shadowBox}></div>
                <h1>VIDEO PROJECTS</h1>
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
            
            <nav className={styles.subMenu} role="tablist">
                <button 
                    className={`${styles.tabButton} ${isActive === 'videos' ? styles.active : ''}`}
                    onClick={() => handleMenuClick('videos')}
                    role="tab"
                    aria-selected={isActive === 'videos'}
                >
                    videos
                </button>
                <button 
                    className={`${styles.tabButton} ${isActive === 'reels' ? styles.active : ''}`}
                    onClick={() => handleMenuClick('reels')}
                    role="tab"
                    aria-selected={isActive === 'reels'}
                >
                    reels
                </button>
            </nav>
            
            <main className={styles.mainContent}>
                <div className={isActive === 'reels' ? styles.reelsComponent : styles.videoComponent}>
                    {(isActive === 'reels' ? reels_list : videos_list).map((video) => (
                        <MediaCard
                            key={video.id}
                            variant={isActive}
                            {...video}
                            onClick={() => handleVideoClick(video)}
                        />
                    ))}
                    {(isActive === 'reels' ? reels_list : videos_list).length === 0 && (
                        <p style={{ color: '#ccc' }}>No {isActive} to display yet.</p>
                    )}
                </div>
            </main>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal video={selectedVideo} isReel={isActive === 'reels'} onClose={closeVideo} />
            )}

            {/* Overlay Menu */}
            <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}>
                <div className={styles.closeButton} onClick={toggleMenu}>
                    <img src={Close} alt="Close menu" />
                </div>
                <nav className={styles.overlayLinks}>
                    <button onClick={handleHomeClick} className={styles.overlayLink}>
                        HOME
                    </button>
                    {/* <Link to="/video" onClick={toggleMenu}>VIDEO</Link> */}
                    {/* <Link to="/photo" onClick={toggleMenu}>PHOTO</Link> */}
                    {/* <Link to="/contact" onClick={toggleMenu}>CONTACT</Link> */}
                </nav>
            </div>
        </div>
    )
}

export default VideoPage