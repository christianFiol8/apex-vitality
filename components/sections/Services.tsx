'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const servicios = [
  {
    id: 'entrenamiento',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="2" y="22" width="8" height="6" rx="2" fill="#ab0001"/>
        <rect x="40" y="22" width="8" height="6" rx="2" fill="#ab0001"/>
        <rect x="10" y="18" width="6" height="14" rx="2" fill="#ab0001"/>
        <rect x="34" y="18" width="6" height="14" rx="2" fill="#ab0001"/>
        <rect x="16" y="24" width="18" height="4" rx="2" fill="#ab0001"/>
      </svg>
    ),
    titulo: 'ENTRENAMIENTO PERSONALIZADO',
    items: [
      'PROTOCOLOS DE HIPERTROFIA Y FUERZA',
      'AJUSTES SEMANALES SEGÚN PROGRESO',
      'SOPORTE TÉCNICO DE EJECUCIÓN',
    ],
    extra: [
      'Entrenamiento enfocado en rendimiento y fuerza: dirigido a disciplinas como artes marciales, atletismo, running, ciclismo o natación.',
  'Entrenamiento bodybuilding, fuerza e hipertrofia: rutina personalizada para gimnasio o entrenamiento mixto, adaptada a tus necesidades, enfoque y objetivo.',
    ],
  },
  {
    id: 'nutricion',
    icon: (
      <svg viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-12">
        <path d="M18 2C10 2 4 10 4 18C4 28 10 36 18 46C26 36 32 28 32 18C32 10 26 2 18 2Z" fill="#ab0001"/>
        <path d="M18 10C14 10 11 14 11 18C11 22 14 26 18 26C22 26 25 22 25 18C25 14 22 10 18 10Z" fill="#1c1b1b"/>
      </svg>
    ),
    titulo: 'PLAN NUTRICIONAL',
    items: [
      'NUTRICIÓN DEPORTIVA Y RECREATIVA',
      'CÁLCULO PRECISO DE MACRONUTRIENTES',
      'SUPLEMENTACIÓN BASADA EN EVIDENCIA',
      'FLEXIBILIDAD Y SOSTENIBILIDAD',
    ],
    extra: [
      'Entrenamiento enfocado en rendimiento y fuerza: aumento de masa muscular y disminución de grasa simultáneamente.',
      'Especialización en nutrición con ciclo menstrual y afecciones hormonales.',
      'Educación nutricional real — aprendes a comer, no solo a seguir un menú.',
      'Plan 100% adaptado a tus gustos, necesidades y estilo de vida.',
      'Mejora tu relación con la comida y tratamiento de síntomas digestivos.',
    ],
  },
]

export default function Servicios() {
  const [expandido, setExpandido] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpandido(prev => prev === id ? null : id)
  }

  return (
    <section id="servicios" className="bg-dark py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-center">
            <span className="text-white">SERVICIOS DE </span>
            <span className="text-primary">ALTO NIVEL</span>
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {servicios.map((servicio, index) => {
            const abierto = expandido === servicio.id

            return (
              <motion.div
                key={servicio.id}
                className="bg-[rgba(229,226,225,0.05)] border-l-8 border-primary flex flex-col gap-6 pl-8 md:pl-14 pr-6 md:pr-12 py-10 md:py-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {servicio.icon}

                <h3 className="font-anton text-2xl md:text-3xl text-white uppercase">
                  {servicio.titulo}
                </h3>

                <ul className="flex flex-col gap-4">
                  {servicio.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-primary shrink-0" />
                      <span className="font-hanken text-white text-sm md:text-base tracking-wide uppercase">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Botón expandir */}
                <button
                  onClick={() => toggle(servicio.id)}
                  className="flex items-center gap-3 text-primary font-anton text-base uppercase tracking-widest hover:text-red-400 transition-colors duration-200 w-fit pt-2"
                >
                  <span>{abierto ? 'VER MENOS' : 'VER MÁS'}</span>
                  <motion.svg
                    animate={{ rotate: abierto ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 10.5L2 4.5H14L8 10.5Z"/>
                  </motion.svg>
                </button>

                {/* Contenido expandido */}
                <AnimatePresence initial={false}>
                  {abierto && (
                    <motion.div
                      key="extra"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
                        {servicio.extra.map((punto, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2" />
                            <p className="font-hanken text-white/70 text-sm leading-relaxed">
                              {punto}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}