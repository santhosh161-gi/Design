import { useState } from 'react'

import { motion } from "framer-motion";

function Navbar() {
 
  return (
    <>
    <div className='w-full fixed top-0 left-0 z-50 bg-black/50'>
      <div className='flex items-center justify-between px-5 py-4 lg:px-8'>
        <motion.h1
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='text-white font-bold text-[12px]'
        >
         SHOP
        </motion.h1>
        <div className='hidden md:flex items-center gap-12 text-white opacity-60 text-[8px]'>
          <motion.h1
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className='hover:opacity-100 transition-opacity duration-300'
          >
            HOME
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            PROJECTS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            SERVICE
          </motion.h1>
        </div>
        <div className='hidden md:block text-xs opacity-70 text-white leading-relaxed'>
          <motion.h1
            initial={{ opacity: 0, x: 1100 }}
            animate={{ opacity: 1, x: 1000 }}
            transition={{ duration: 1, delay: 1 }}
          >
            BOOK
          </motion.h1>
        </div>
        <MobileMenu />
      </div>
    </div>
    
    </>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className='md:hidden'>
      <button
        aria-label='Toggle menu'
        onClick={() => setOpen(!open)}
        className='text-white p-2 rounded-md border border-white'
      >
        <span className={open ? 'hidden' : 'block'}>☰</span>
        <span className={open ? 'block' : 'hidden'}>✕</span>
      </button>
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed top-16 left-0 w-screen bg-black/80 backdrop-blur-md border-t border-white/10`}
      >
        <div className='flex flex-col gap-4 px-6 py-6 text-white text-sm'>
          <button className='text-left opacity-80 hover:opacity-100'>HOME</button>
          <button className='text-left opacity-80 hover:opacity-100'>PROJECTS</button>
          <button className='text-left opacity-80 hover:opacity-100'>SERVICE</button>
          <hr className='border-white/10' />
          <button className='text-left opacity-80 hover:opacity-100'>BOOK</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
