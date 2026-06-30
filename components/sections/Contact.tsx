'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono inválido'),
  tipoConsulta: z.string().min(1, 'Selecciona un tipo de consulta'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

const inputClass = "bg-cream-2 px-4 py-4 font-hanken text-sm text-dark/60 tracking-widest uppercase placeholder:text-dark/40 outline-none focus:ring-2 focus:ring-primary transition-all w-full"

export default function Contact() {
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setEnviando(true)
    setErrorEnvio(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setExito(true); reset() }
      else setErrorEnvio(true)
    } catch { setErrorEnvio(true) }
    finally { setEnviando(false) }
  }

  return (
    <section id="contacto" className="bg-dark py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Info */}
        <motion.div
          className="flex-1 flex flex-col gap-6 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-anton text-4xl md:text-5xl uppercase leading-tight">
            <span className="text-white">COMIENZA </span>
            <span className="text-primary">HOY</span>
          </h2>
          <p className="font-hanken text-white/80 text-base leading-relaxed">
            ¿Listo para llevar tu rendimiento al siguiente nivel? Completa el
            formulario o contáctame directamente por WhatsApp.
          </p>
          <a
            href="https://wa.me/526121009398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25d366] text-white font-anton text-base tracking-widest uppercase px-8 py-4 hover:bg-[#1da851] transition-colors duration-200 w-fit"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0C4.48 0 0 4.48 0 10c0 1.77.46 3.43 1.27 4.87L0 20l5.27-1.24C6.68 19.56 8.31 20 10 20c5.52 0 10-4.48 10-10S15.52 0 10 0zm4.93 14.07c-.2.57-1.18 1.09-1.62 1.15-.44.07-.99.1-1.59-.1-.37-.12-.84-.28-1.44-.55-2.53-1.09-4.18-3.64-4.31-3.81-.13-.17-1.04-1.38-1.04-2.63s.66-1.87.9-2.13c.23-.26.5-.32.67-.32h.48c.15 0 .36-.06.56.43l.8 1.94c.07.17.11.37.01.58l-.3.57-.43.51c-.14.14-.29.3-.12.58.17.28.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.3 1.41.28.14.44.12.6-.07l.74-.87c.19-.23.38-.15.63-.06l1.82.86c.26.12.43.18.5.28.06.1.06.57-.14 1.13z"/>
            </svg>
            WHATSAPP DIRECTO
          </a>
        </motion.div>

        {/* Formulario */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white p-6 md:p-10 flex flex-col gap-4 md:gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input {...register('nombre')} placeholder="NOMBRE COMPLETO" className={inputClass} />
                {errors.nombre && <span className="font-hanken text-primary text-xs">{errors.nombre.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <input {...register('email')} placeholder="EMAIL" type="email" className={inputClass} />
                {errors.email && <span className="font-hanken text-primary text-xs">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input {...register('telefono')} placeholder="TELÉFONO" type="tel" className={inputClass} />
                {errors.telefono && <span className="font-hanken text-primary text-xs">{errors.telefono.message}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <select {...register('tipoConsulta')} className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">TIPO DE CONSULTA</option>
                  <option value="online">ONLINE</option>
                  <option value="nutricion">SOLO NUTRICIÓN</option>
                  <option value="entrenamiento">SOLO ENTRENAMIENTO</option>
                </select>
                {errors.tipoConsulta && <span className="font-hanken text-primary text-xs">{errors.tipoConsulta.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <textarea {...register('mensaje')} placeholder="MENSAJE / OBJETIVOS" rows={5} className={`${inputClass} resize-none`} />
              {errors.mensaje && <span className="font-hanken text-primary text-xs">{errors.mensaje.message}</span>}
            </div>

            {exito && <p className="font-hanken text-sm text-green-600 text-center">¡Solicitud enviada! Te contactaremos pronto.</p>}
            {errorEnvio && <p className="font-hanken text-sm text-primary text-center">Hubo un error al enviar. Intenta de nuevo.</p>}

            <button
              onClick={handleSubmit(onSubmit)}
              disabled={enviando}
              className="w-full bg-primary text-white font-anton text-base tracking-widest uppercase py-4 hover:bg-red-800 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {enviando ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}