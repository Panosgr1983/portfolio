// src/utils/sendMail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,     // π.χ. choliasmenos.panos@gmail.com
    pass: process.env.MAIL_PASS,     // το App Password
  },
});

export const sendMail = async ({ name, email, message }) => {
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,  // Σου το στέλνεις εσύ
      subject: '📬 Νέο μήνυμα από το Portfolio',
      html: `
        <h3>Έλαβε νέο μήνυμα!</h3>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Μήνυμα:</strong><br/>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('❌ Αποτυχία αποστολής email:', error);
    return { success: false, error };
  }
};

// server.js ή /api/contact.js ανάλογα με setup
import express from 'express';
import cors from 'cors';
import { sendMail } from './src/utils/sendMail.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const result = await sendMail({ name, email, message });

  if (result.success) {
    res.status(200).json({ ok: true, message: 'Εστάλη επιτυχώς' });
  } else {
    res.status(500).json({ ok: false, message: 'Σφάλμα αποστολής' });
  }
});

app.listen(3001, () => {
  console.log('🚀 Mail server listening on port 3001');
});