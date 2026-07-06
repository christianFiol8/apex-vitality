'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const planes = [
  {
    id: 'recreativo',
    nombre: 'PLAN NUTRICIONAL RECREATIVO',
    precios: { mensual: '$550', trimestral: '$1,400' },
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
    precios: { mensual: '$600', trimestral: '$1,600' },
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
    precios: { mensual: '$800', trimestral: '$2,100' },
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

export default function Precios() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [periodo, setPeriodo] = useState<'mensual' | 'trimestral'>('mensual')

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

        {/* Toggle mensual / trimestral */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center bg-dark/10 p-1">
            <button
              onClick={() => setPeriodo('mensual')}
              className={`font-anton text-sm tracking-widest uppercase px-6 py-2.5 transition-colors duration-200 ${
                periodo === 'mensual'
                  ? 'bg-dark text-white'
                  : 'text-dark/50 hover:text-dark'
              }`}
            >
              1 MES
            </button>
            <button
              onClick={() => setPeriodo('trimestral')}
              className={`font-anton text-sm tracking-widest uppercase px-6 py-2.5 transition-colors duration-200 ${
                periodo === 'trimestral'
                  ? 'bg-primary text-white'
                  : 'text-dark/50 hover:text-dark'
              }`}
            >
              3 MESES
            </button>
          </div>
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
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <motion.span
                    key={periodo}
                    className="font-anton text-5xl text-primary leading-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.precios[periodo]}
                  </motion.span>
                  <span className={`font-hanken text-base mb-1 ${
                    plan.destacado ? 'text-white/60' : 'text-dark/50'
                  }`}>
                    MXN
                  </span>
                </div>
                <span className={`font-hanken text-xs uppercase tracking-widest ${
                  plan.destacado ? 'text-white/40' : 'text-dark/40'
                }`}>
                  {periodo === 'mensual' ? 'por mes' : '3 meses'}
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

        {/* Botón políticas */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setModalAbierto(true)}
            className="flex items-center gap-3 border border-dark/30 text-dark font-hanken text-sm tracking-widest uppercase px-8 py-3 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 4a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 2.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7.5z"/>
            </svg>
            VER POLÍTICAS DE PAGO
          </button>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {modalAbierto && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-dark/80"
                onClick={() => setModalAbierto(false)}
              />

              {/* Contenido */}
              <motion.div
                className="relative bg-cream max-w-lg w-full p-8 flex flex-col gap-6 z-10"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-anton text-2xl text-dark uppercase">
                    POLÍTICAS DE <span className="text-primary">PAGO</span>
                  </h3>
                  <button
                    onClick={() => setModalAbierto(false)}
                    className="text-dark/40 hover:text-primary transition-colors duration-200 shrink-0"
                    aria-label="Cerrar"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                    </svg>
                  </button>
                </div>

                {/* Políticas */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-primary shrink-0 mt-1" />
                    <p className="font-hanken text-dark/80 text-sm leading-relaxed">
                      Para confirmar tu consulta se debe liquidar el <strong>50% del total</strong> al menos 1 día antes y enviar el comprobante vía WhatsApp.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-primary shrink-0 mt-1" />
                    <p className="font-hanken text-dark/80 text-sm leading-relaxed">
                      Métodos de pago aceptados: <strong>transferencia bancaria</strong> o <strong>efectivo</strong> (solo presencial).
                    </p>
                  </div>
                </div>

                {/* Info de pago */}
                <div className="bg-dark p-6 flex flex-col gap-3">
                  <span className="font-anton text-primary text-base uppercase tracking-widest">
                    DATOS DE TRANSFERENCIA
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-hanken text-white/50 text-sm">Banco</span>
                      <span className="font-hanken text-white text-sm font-semibold">BBVA</span>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex justify-between items-center">
                      <span className="font-hanken text-white/50 text-sm">Titular</span>
                      <span className="font-hanken text-white text-sm font-semibold">Erick Jaziel Cosío Romero</span>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex justify-between items-center">
                      <span className="font-hanken text-white/50 text-sm">CLABE</span>
                      <span className="font-hanken text-white text-sm font-semibold">Pendiente</span>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex justify-between items-center">
                      <span className="font-hanken text-white/50 text-sm">Motivo de pago</span>
                      <span className="font-hanken text-white text-sm font-semibold">Tu nombre completo</span>
                    </div>
                  </div>
                </div>

                {/* Botón cerrar */}
                <button
                  onClick={() => setModalAbierto(false)}
                  className="w-full bg-primary text-white font-anton text-base tracking-widest uppercase py-3 hover:bg-red-800 transition-colors duration-200"
                >
                  ENTENDIDO
                </button>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}