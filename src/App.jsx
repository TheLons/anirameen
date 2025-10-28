import { useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom" 
import './App.css'

import MainPage from './Components/MainPage/MainPage'
import VideoPage from './Components/VideoPage/VideoPage'
// import ContactPage from './Components/ContactPage/ContactPage'
// import PhotoPage from './Components/PhotoPage/PhotoPage'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/video" element={<VideoPage />}/>
        {/* <Route path="/contact" element={<ContactPage />}/> */}
        {/* <Route path="/photo" element={<PhotoPage />}/> */}
      </Routes>
    </HashRouter>
  )
}

export default App
