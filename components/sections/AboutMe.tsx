'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="bg-cream py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        <motion.div
          className="flex-1 flex flex-col gap-6 relative w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary pointer-events-none" />

          <h2 className="font-anton text-4xl md:text-5xl uppercase tracking-wide leading-tight">
            <span className="text-dark block">COMPROMISO CON</span>
            <span className="text-primary block">TU RESULTADO</span>
          </h2>

          <p className="font-hanken text-dark text-base leading-relaxed">
            Mi especialidad es la nutrición deportiva y tu rendimiento deportivo, con experiencia en bodybuilding,
            mi compromiso con tus resultados es un enfoque directo en tus objetivos y tus metas, alejado a dietas genéricas,
            entrenamientos genéricos, garantizándote resultados a cambio de tu confianza y constancia.
          </p>

          <p className="font-hanken text-dark text-base leading-relaxed font-semibold">
            Mi metodología en{' '}
            <span className="text-primary font-bold">APEX VITALITY</span>
            {' '}se basa en la ciencia del rendimiento humano para optimizar tu
            composición corporal sin sacrificar tu salud ni tu estilo de vida.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 h-[350px] md:h-[500px] relative w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="absolute bottom-0 right-0 w-full h-full border-b-[12px] border-r-[12px] border-primary translate-x-3 translate-y-3" />
          <div className="relative w-full h-full">
            <Image
              src="/images/sobre-mi.jpg"
              alt="Lic. Erick Cosío Romero"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}