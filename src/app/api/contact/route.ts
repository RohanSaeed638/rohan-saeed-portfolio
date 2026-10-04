import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: 'Message is too long.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',

      // Email you want contact messages delivered to
      to: ['rohan.saeed.638@gmail.com'],

      subject: `Portfolio message from ${name}`,

      replyTo: email,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 32px;
          background: #111318;
          color: #ffffff;
          border-radius: 12px;
        ">
          <h2 style="color: #F5A623; margin-bottom: 24px;">
            New Portfolio Message
          </h2>

          <p style="color: #aaa;">You received a new message from your portfolio.</p>

          <div style="margin-top: 24px;">
            <p>
              <strong style="color: #F5A623;">Name</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong style="color: #F5A623;">Email</strong><br />
              ${escapeHtml(email)}
            </p>

            <p>
              <strong style="color: #F5A623;">Message</strong>
            </p>

            <div style="
              background: #1a1d24;
              padding: 16px;
              border-radius: 8px;
              line-height: 1.6;
              color: #ddd;
            ">
              ${escapeHtml(message).replace(/\n/g, '<br />')}
            </div>
          </div>

          <p style="
            margin-top: 32px;
            font-size: 12px;
            color: #777;
          ">
            Sent from rohan-saeed.vercel.app
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      return NextResponse.json(
        { message: 'Unable to send message.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully.',
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)

    return NextResponse.json(
      { message: 'Something went wrong.' },
      { status: 500 }
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}