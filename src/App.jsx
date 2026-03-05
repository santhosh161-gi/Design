import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
  <Navbar/>
  <Hero/>
  <Footer/>
  </>
  )
}

export default App
