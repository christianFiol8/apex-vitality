'use client'

import { motion } from 'framer-motion'

const testimonios = [
  { id: 1, cita: 'Gracias a Erick he podido encontrar balance entre la comida y una vida saludable. Logrando un mayor rendimiento en mis entrenamientos y alcanzar mis objetivos', nombre: 'PAMELA M.', rol: 'ATLETA DE GIMNASIO' },
  { id: 2, cita: 'Erick me enseñó que comer sano y llevar una dieta no son restricción en un estilo de vida que se puede disfrutar para superar tus límites, gracias!!.', nombre: 'JESÚS P.', rol: 'ATLETA DE GIMNASIO' },
  { id: 3, cita: 'Muy buena atención. Adaptable a todo tipo de estilo de vida y preferencias alimenticias. Recomendado al 100%.', nombre: 'MARIA JOSE V.', rol: 'ATLETA DE GIMNASIO' },
]

function Estrellas() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-primary" viewBox="0 0 20 19" fill="currentColor">
          <path d="M10 0L12.9 6.6L20 7.6L14.9 12.5L16.2 19L10 15.6L3.8 19L5.1 12.5L0 7.6L7.1 6.6L10 0Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-cream-2 py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-center tracking-wide">
            <span className="text-dark">CLIENTES EN </span>
            <span className="text-primary">LA CIMA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              className="bg-cream border-t-4 border-primary flex flex-col gap-4 px-8 pt-9 pb-8 drop-shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Estrellas />
              <p className="font-hanken text-dark text-base italic leading-relaxed flex-1">
                &ldquo;{testimonio.cita}&rdquo;
              </p>
              <h4 className="font-anton text-dark text-xl uppercase pt-6">{testimonio.nombre}</h4>
              <p className="font-hanken text-primary text-base uppercase">{testimonio.rol}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}