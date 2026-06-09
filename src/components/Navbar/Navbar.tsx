'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience & Education', href: '/#experience' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 mix-blend-difference text-white">
        <Link href="/" className="text-3xl font-bold tracking-tighter hover:scale-105 transition-transform uppercase">
          NA.
        </Link>
        <button 
          onClick={() => setIsOpen(true)}
          className="text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-3 uppercase tracking-widest"
        >
          Menu
          <div className="w-8 flex flex-col gap-1.5 items-end">
            <div className="h-[2px] w-full bg-white"></div>
            <div className="h-[2px] w-2/3 bg-white"></div>
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] text-white flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-3 uppercase tracking-widest"
            >
              Close
              <div className="w-8 h-8 relative flex items-center justify-center">
                <div className="absolute h-[2px] w-full bg-white rotate-45"></div>
                <div className="absolute h-[2px] w-full bg-white -rotate-45"></div>
              </div>
            </button>
            
            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
