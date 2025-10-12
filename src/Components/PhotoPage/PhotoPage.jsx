// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// // import styles from './VideoPage.module.css'
// import Burger from '../../assets/icons/burger.png'
// import Close from '../../assets/icons/close.png'

// const photo_preview_urls = [
//     {
//         video_prev : "src/assets/videoPreview/riot.png",
//         video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
//         video_heading: "VCT Pacific Trophy",
//         video_text: "Video Editor"
//     },
//     {
//         video_prev: "src/assets/videoPreview/koru.png",
//         video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
//         video_heading: "Koru Pharma",
//         video_text: "Video Director / Video Editor"
//     },
//     {
//         video_prev: "src/assets/videoPreview/car.png",
//         video_url: "https://www.youtube.com/watch?v=89BG9hEGI04&ab_channel=VALORANTEsportsSouthAsia",
//         video_heading: "BMW Racing",
//         video_text: "Video Director / Video Editor"
//     }
// ]

// const PhotoCard = ({ photo_prev, video_url, video_heading, video_text }) => {
//     const heading = video_heading.split('\n').map((item, i) => {
//         return (
//             <p className={styles.videoHeading} key={i}>{item}</p>
//         )
//     })
//     const text = video_text.split('\n').map((item, i) => {
//         return (
//             <p className={styles.videoText} key={i}>{item}</p>
//         )
//     })

//     return (
//         <div className={styles.video}>
//             <div className={styles.videoContent} style={{
//                 backgroundImage: `url(${video_prev})`,
//             }}>
//                 <div className={styles.description}>
//                     {heading}
//                     {text}
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ReelCard = ({ video_prev, video_url, video_heading, video_text }) => {
//     const heading = video_heading.split('\n').map((item, i) => {
//         return (
//             <p className={styles.videoHeading} key={i}>{item}</p>
//         )
//     })
//     const text = video_text.split('\n').map((item, i) => {
//         return (
//             <p className={styles.videoText} key={i}>{item}</p>
//         )
//     })

//     return (
//         <div className={styles.reelCard}>
//             <div className={styles.reelContent} style={{
//                 backgroundImage: `url(${video_prev})`,
//             }}>
//                 <div className={styles.description}>
//                     {heading}
//                     {text}
//                 </div>
//             </div>
//         </div>
//     )
// }

// const VideosComponent = ({ setIsActive }) => {
//     return (
//         <>
//             <div className={styles.videoComponent}>
//                 {video_preview_urls.map((url) => {
//                     return (
//                         <>
//                             <VideoCard video_prev={url.video_prev} video_heading={url.video_heading} video_text={url.video_text} />
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// const ReelsComponent = ({ setIsActive }) => {
//     return (
//         <>
//             <div className={styles.reelsComponent}>
//                 {video_preview_urls.map((url) => {
//                     return (
//                         <>
//                             <ReelCard video_prev={url.video_prev} video_heading={url.video_heading} video_text={url.video_text} />
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// const ShortFilmComponent = ({ setIsActive }) => {
//     return (
//         <>
//             <div className={styles.shortFilmComponent}>
//                 {video_preview_urls.map((url, index) => {
//                     return (
//                         <VideoCard 
//                             key={index}
//                             video_prev={url.video_prev} 
//                             video_heading={url.video_heading} 
//                             video_text={url.video_text} 
//                         />
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// const PhotoPage = () => {
//     const [isActive, setIsActive] = useState('videos');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleMenuClick = (menu) => {
//         setIsActive(menu);
//     };

//     const toggleMenu = () => {
//         console.log('Menu toggle clicked, current state:', isMenuOpen);
//         setIsMenuOpen(!isMenuOpen);
//         console.log('New menu state:', !isMenuOpen);
//     };

//     return (
//         <div className={styles.mainContainer}>
//             <div className={styles.header}>
//                 <div className={styles.shadowBox}></div>
//                 <h1>VIDEO PROJECTS</h1>
//                 <div 
//                     className={styles.burger} 
//                     onClick={() => {
//                         console.log('Burger clicked');
//                         toggleMenu();
//                     }}
//                     role="button"
//                     tabIndex={0}
//                 >
//                     <img src={Burger} alt="Burger menu" />
//                 </div>
//             </div>
//             <ul className={styles.subMenu}>
//                 <li 
//                     className={isActive === 'videos' ? styles.active : ''} 
//                     onClick={() => handleMenuClick('videos')}
//                 >
//                     videos
//                 </li>
//                 <li 
//                     className={isActive === 'reels' ? styles.active : ''} 
//                     onClick={() => handleMenuClick('reels')}
//                 >
//                     reels
//                 </li>
//                 <li 
//                     className={isActive === 'film' ? styles.active : ''} 
//                     onClick={() => handleMenuClick('film')}
//                 >
//                     short film
//                 </li>
//             </ul>
//             <div className={styles.mainContent}>
//                 {isActive === 'videos' && <VideosComponent setIsActive={setIsActive} />}
//                 {isActive === 'reels' && <ReelsComponent setIsActive={setIsActive} />}
//                 {isActive === 'film' && <ShortFilmComponent setIsActive={setIsActive}/>}
//             </div>

//             {/* Overlay Menu */}
//             <div className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}>
//                 <div className={styles.closeButton} onClick={toggleMenu}>
//                     <img src={Close} alt="Close menu" />
//                 </div>
//                 <nav className={styles.overlayLinks}>
//                     <Link to="/" onClick={toggleMenu}>HOME</Link>
//                     <Link to="/video" onClick={toggleMenu}>VIDEO</Link>
//                     <Link to="/photo" onClick={toggleMenu}>PHOTO</Link>
//                     <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
//                 </nav>
//             </div>
//         </div>
//     )
// }

// export default VideoPage