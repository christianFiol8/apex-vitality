'use client'

import { motion } from 'framer-motion'

const pasos = [
  { numero: '01', titulo: 'AGENDA', descripcion: 'Selecciona tu horario y modalidad (Presencial u Online).' },
  { numero: '02', titulo: 'CONSULTA', descripcion: 'Evaluación antropométrica y clínica detallada de tus metas.' },
  { numero: '03', titulo: 'PLAN DE PODER', descripcion: 'Entrega de tu plan 100% personalizado listo para ejecutar.' },
]

export default function WorkMethod() {
  return (
    <section id="metodo" className="bg-primary py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-center tracking-wide">
            <span className="text-white">EL MÉTODO </span>
            <span className="text-dark">APEX</span>
          </h2>
        </motion.div>

        {/* Desktop: fila con línea conectora */}
        <div className="hidden md:flex relative items-start justify-between">
          <div className="absolute top-10 left-0 right-0 h-1 bg-dark/20" />
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.numero}
              className="relative flex-1 flex flex-col items-center gap-4 text-center px-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-20 h-20 bg-dark rounded-xl flex items-center justify-center shrink-0 relative z-10">
                <span className="font-anton text-3xl text-primary">{paso.numero}</span>
              </div>
              <h3 className="font-anton text-xl text-white uppercase pt-2">{paso.titulo}</h3>
              <p className="font-hanken text-base text-white/80 leading-relaxed">{paso.descripcion}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: columna apilada */}
        <div className="flex md:hidden flex-col gap-8">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.numero}
              className="flex gap-5 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-16 h-16 bg-dark rounded-xl flex items-center justify-center shrink-0">
                <span className="font-anton text-2xl text-primary">{paso.numero}</span>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-anton text-xl text-white uppercase">{paso.titulo}</h3>
                <p className="font-hanken text-sm text-white/80 leading-relaxed">{paso.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}