'use client'

import { motion } from 'framer-motion'

const pasos = [
  {
    numero: '01',
    titulo: 'AGENDA',
    descripcion: 'Selecciona tu horario y modalidad (Presencial u Online).',
  },
  {
    numero: '02',
    titulo: 'CONSULTA',
    descripcion: 'Evaluación antropométrica y clínica detallada de tus metas.',
  },
  {
    numero: '03',
    titulo: 'PLAN DE PODER',
    descripcion: 'Entrega de tu plan 100% personalizado listo para ejecutar.',
  },
]

export default function WorkMethod() {
  return (
    <section
      id="metodo"
      className="bg-primary py-24 px-16"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

        {/* Título */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-5xl uppercase text-center tracking-wide">
            <span className="text-white">EL MÉTODO </span>
            <span className="text-dark">APEX</span>
          </h2>
        </motion.div>

        {/* Pasos */}
        <div className="relative flex items-start justify-between">

          {/* Línea conectora horizontal */}
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
              {/* Número */}
              <div className="w-20 h-20 bg-dark rounded-xl flex items-center justify-center shrink-0 relative z-10">
                <span className="font-anton text-3xl text-primary">
                  {paso.numero}
                </span>
              </div>

              {/* Título del paso */}
              <h3 className="font-anton text-xl text-white uppercase pt-2">
                {paso.titulo}
              </h3>

              {/* Descripción */}
              <p className="font-hanken text-base text-white/80 leading-relaxed">
                {paso.descripcion}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}