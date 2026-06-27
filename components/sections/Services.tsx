'use client'

import { motion } from 'framer-motion'

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
      'PLANIFICACIÓN POR APP DE CONTROL',
      'AJUSTES SEMANALES SEGÚN PROGRESO',
      'SOPORTE TÉCNICO DE EJECUCIÓN',
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
      'NUTRICIÓN CLÍNICA ESPECIALIZADA',
      'CÁLCULO PRECISO DE MACRONUTRIENTES',
      'SUPLEMENTACIÓN BASADA EN EVIDENCIA',
      'FLEXIBILIDAD Y SOSTENIBILIDAD',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-dark py-24 px-16 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

        {/* Encabezado */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-5xl uppercase text-center">
            <span className="text-white">SERVICIOS DE </span>
            <span className="text-primary">ALTO NIVEL</span>
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              className="bg-[rgba(229,226,225,0.05)] border-l-8 border-primary flex flex-col gap-6 pl-14 pr-12 py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Ícono */}
              {servicio.icon}

              {/* Título */}
              <h3 className="font-anton text-3xl text-white uppercase">
                {servicio.titulo}
              </h3>

              {/* Lista */}
              <ul className="flex flex-col gap-4">
                {servicio.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary shrink-0" />
                    <span className="font-hanken text-white text-base tracking-wide uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}