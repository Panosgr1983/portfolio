// backend/contactMailer.js
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export async function sendContactEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // Χρησιμοποίησε App Password (όχι το κανονικό password)
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.MAIL_RECEIVER,
    subject: `📩 Νέο μήνυμα από ${name}`,
    text: `Όνομα: ${name}\nEmail: ${email}\nΜήνυμα: ${message}`,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log('📬 Email στάλθηκε:', info.messageId)
}