'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
  { numero: '1', titulo: 'SIN DIETAS RESTRICTIVAS', descripcion: 'Aprende a comer lo que te gusta mientras alcanzas tus objetivos físicos.' },
  { numero: '2', titulo: 'MANTÉN TU VIDA SOCIAL', descripcion: 'El plan se adapta a tus eventos, no al revés. No más llevar recipientes a las fiestas.' },
  { numero: '3', titulo: 'ENTRENAMIENTOS EFICIENTES', descripcion: 'No necesitas pasar 3 horas en el gimnasio. Calidad sobre cantidad.' },
  { numero: '4', titulo: 'SALUD HORMONAL', descripcion: 'Priorizamos tu energía y bienestar interno tanto como tu aspecto externo.' },
  { numero: '5', titulo: 'RESULTADOS PERPETUOS', descripcion: 'Creamos hábitos que puedas mantener toda la vida, no solo por un mes.' },
]

export default function Transformations() {
  return (
    <section id="transformacion" className="bg-dark py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-end">

        <div className="flex-1 flex flex-col gap-10 md:gap-12 w-full">
          <motion.h2
            className="font-anton text-4xl md:text-5xl uppercase tracking-wide leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">TRANSFORMACIÓN </span>
            <span className="text-primary">SIN</span>
            <br />
            <span className="text-primary">SACRIFICIOS</span>
          </motion.h2>

          <div className="flex flex-col gap-6 md:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.numero}
                className="flex gap-5 md:gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 bg-primary shrink-0 flex items-center justify-center"
                >
                  <span className="font-anton text-2xl md:text-3xl text-white">{item.numero}</span>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="font-anton text-lg md:text-xl text-white uppercase">{item.titulo}</h4>
                  <p className="font-hanken text-sm md:text-base text-white/70 leading-relaxed">{item.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="flex-1 relative w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative w-full h-[400px] md:h-[700px]"
            style={{ boxShadow: '8px 8px 0px #fcf9f8' }}
          >
            <Image
              src="/images/transformacion.jpg"
              alt="Transformación sin sacrificios"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}