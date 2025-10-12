import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import './App.css'

import MainPage from './Components/MainPage/MainPage'
import VideoPage from './Components/VideoPage/VideoPage'
import ContactPage from './Components/ContactPage/ContactPage'
// import PhotoPage from './Components/PhotoPage/PhotoPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<MainPage />} />
        <Route path="/Video" element={<VideoPage />}/>
        {/* <Route path="/contact" element={<ContactPage />}/> */}
        {/* <Route path="/photo" element={<PhotoPage />}/> */}
      </Routes>
    </Router>
  )
}

export default App
