'use client'

import { motion } from 'framer-motion'

const planes = [
  {
    id: 'recreativo',
    nombre: 'PLAN NUTRICIONAL RECREATIVO',
    precio: '$550',
    moneda: 'MXN',
    destacado: false,
    items: [
      'Plan nutricional 100% personalizado a tus necesidades y objetivos.',
      'Asesoría nutricional esencial para tomar las mejores decisiones en tu día a día.',
      'Libertad nutricional real y sostenible.',
      'Seguimiento online: aclaración de dudas, ajustes y adecuaciones.',
      'App de control con registro continuo de peso, tallas y fotos.',
    ],
  },
  {
    id: 'deportivo',
    nombre: 'PLAN NUTRICIONAL DEPORTIVO',
    precio: '$600',
    moneda: 'MXN',
    destacado: true,
    items: [
      'Todo lo incluido en el Plan Recreativo.',
      'Adecuaciones específicas para tu disciplina deportiva.',
      'Manejo de electrolitos y sueros para el rendimiento.',
      'Cargas de carbohidratos programadas para tu disciplina.',
      'Gestión de sensaciones en el deporte y progreso deportivo.',
    ],
  },
  {
    id: 'mixto',
    nombre: 'PLAN NUTRICIONAL + ENTRENAMIENTO',
    precio: '$800',
    moneda: 'MXN',
    destacado: false,
    items: [
      'Todo lo incluido en el Plan Deportivo.',
      'Planificación de entrenamiento estructurada en bloques.',
      'Bloque de acondicionamiento físico.',
      'Bloque de fuerza e hipertrofia (hombros, piernas o glúteos).',
      'Todo adecuado a tus objetivos y progreso.',
    ],
  },
]

const promociones = [
  {
    id: 'pareja-nutricional',
    nombre: 'PROMOCIÓN EN PAREJA O AMIGO',
    subtitulo: 'Plan Nutricional para 2 personas',
    precio: '$950',
    moneda: 'MXN',
  },
  {
    id: 'pareja-mixto',
    nombre: 'PROMOCIÓN EN PAREJA O AMIGO',
    subtitulo: 'Plan Mixto (Nutricional + Deportivo) para 2 personas',
    precio: '$1,200',
    moneda: 'MXN',
  },
]

export default function Prices() {
  return (
    <section id="precios" className="bg-cream-2 py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

        {/* Título */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase text-center">
            <span className="text-dark">PLANES Y </span>
            <span className="text-primary">PRECIOS</span>
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </motion.div>

        {/* Cards principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative flex flex-col gap-6 p-8 border-t-4 ${
                plan.destacado
                  ? 'bg-dark border-primary'
                  : 'bg-cream border-dark/20'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Badge destacado */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1">
                  <span className="font-anton text-white text-sm tracking-widest uppercase">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Nombre */}
              <h3 className={`font-anton text-xl uppercase leading-tight ${
                plan.destacado ? 'text-white' : 'text-dark'
              }`}>
                {plan.nombre}
              </h3>

              {/* Precio */}
              <div className="flex items-end gap-2">
                <span className="font-anton text-5xl text-primary leading-none">
                  {plan.precio}
                </span>
                <span className={`font-hanken text-base mb-1 ${
                  plan.destacado ? 'text-white/60' : 'text-dark/50'
                }`}>
                  {plan.moneda}
                </span>
              </div>

              {/* Divisor */}
              <div className={`w-full h-px ${plan.destacado ? 'bg-white/10' : 'bg-dark/10'}`} />

              {/* Items */}
              <ul className="flex flex-col gap-4 flex-1">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-primary shrink-0 mt-1" />
                    <span className={`font-hanken text-sm leading-relaxed ${
                      plan.destacado ? 'text-white/80' : 'text-dark/70'
                    }`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`w-full text-center font-anton text-base tracking-widest uppercase py-4 transition-colors duration-200 ${
                  plan.destacado
                    ? 'bg-primary text-white hover:bg-red-800'
                    : 'bg-dark text-white hover:bg-dark-2'
                }`}
              >
                AGENDAR CONSULTA
              </a>
            </motion.div>
          ))}
        </div>

        {/* Promociones en pareja */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-anton text-2xl md:text-3xl uppercase text-center">
            <span className="text-dark">PROMOCIONES </span>
            <span className="text-primary">EN PAREJA</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promociones.map((promo, index) => (
              <motion.div
                key={promo.id}
                className="bg-dark flex items-center justify-between gap-6 px-8 py-6 border-l-8 border-primary"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-anton text-white text-lg uppercase">
                    {promo.nombre}
                  </span>
                  <span className="font-hanken text-white/60 text-sm">
                    {promo.subtitulo}
                  </span>
                </div>
                <div className="flex items-end gap-1 shrink-0">
                  <span className="font-anton text-primary text-4xl leading-none">
                    {promo.precio}
                  </span>
                  <span className="font-hanken text-white/40 text-sm mb-1">
                    {promo.moneda}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}