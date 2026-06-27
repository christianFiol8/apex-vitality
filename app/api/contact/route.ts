import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, telefono, tipoConsulta, mensaje } = body

    // Validación básica en el servidor
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Apex Vitality <onboarding@resend.dev>',
      to: 'correo_del_cliente@gmail.com', // ← cambiar al email real del cliente
      subject: `Nueva consulta de ${nombre}`,
      html: `
        <h2>Nueva solicitud de consulta</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Tipo de consulta:</strong> ${tipoConsulta}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}