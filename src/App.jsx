import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

import Pattern from './animation/Pattern'
import Visual from './animation/Visual'
import Creative from './animation/Creative'
import Caruosel from './animation/Caruosel'
import Collections from './animation/Collections'
import Connect from './animation/Connect'

import SupimaCotton from './pages/SupimaCotton'



function HomePage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <div><hr className='border-white/20'/></div>

      <div className='w-full overflow-hidden'>
        <Pattern />
      </div>
      <div><hr className='border-white/20'/></div>

      {/* <div className='w-full overflow-hidden'>
        <Pattern />
      </div> */}

      <section id="customization">
        <Creative />
      </section>
      
       <section id="fabrics">
        <Visual />
      </section>

      <section id="fabrics-carousel">
        <Caruosel />
      </section>

      <div><hr className='border-white/20'/></div>

      <section id="collections">
        <Collections />
      </section>

      <section id="contact">
        <Connect />
      </section>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/supimacotton" element={<SupimaCotton />} />
        {/* <Route path="/organiccotton" element={<OrganicCotton />} />
        <Route path="/highqualitybamboocotton" element={<HighQualityBambooCotton />} />
        <Route path="/suvincotton" element={<SUVICotton />} />
        <Route path="/australiancotton" element={<AustralianCotton />} />
        <Route path="/premiumtencellyocell" element={<PremiumTenCelllyOCell />} />
        <Route path="/premiummercerizedcotton" element={<PremiumMercerizedCotton />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
