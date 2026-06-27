'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay oscuro sobre la imagen */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Gradiente radial rojo — efecto sutil del diseño */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(171,0,1,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto px-16 flex flex-col items-center gap-6 text-center">

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="font-anton text-[96px] leading-[0.9] uppercase">
            <span className="text-white block">TU MEJOR VERSIÓN</span>
            <span className="text-primary block">EMPIEZA AQUÍ</span>
          </h1>
        </motion.div>

        {/* Subtítulo con borde izquierdo rojo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="border-l-4 border-primary pl-5"
        >
          <p className="font-hanken text-text-light text-base tracking-[1.6px] uppercase">
            LIC. ERICK COSÍO ROMERO — NUTRICIÓN CLÍNICA Y ALTO RENDIMIENTO
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="#contacto"
            className="inline-block bg-primary text-white font-anton text-xl tracking-[2px] uppercase px-10 py-4 hover:bg-red-800 transition-colors duration-200"
          >
            AGENDA TU CONSULTA
          </Link>
        </motion.div>

      </div>
    </section>
  )
}