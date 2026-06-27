'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  {label: 'Transformaciones', href: '#transformacion'},
  { label: 'Proceso', href: '#metodo' },
  { label: 'Testimonios', href: '#testimonios' },
  
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-cream border-b-2 border-dark ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-16 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <span className="font-anton text-primary text-xl tracking-tight uppercase">
          APEX VITALITY
        </span>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-hanken font-medium text-dark text-base hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#contacto"
            className="ml-4 bg-primary text-white font-anton text-base tracking-wide uppercase px-6 py-2 hover:bg-red-800 transition-colors duration-200"
          >
            CONTACTO
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-dark px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-hanken font-medium text-dark text-base hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white font-anton text-base tracking-wide uppercase px-6 py-2 text-center hover:bg-red-800 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  )
}