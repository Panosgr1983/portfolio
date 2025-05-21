import express from 'express'
import cors from 'cors'
import { sendContactEmail } from './contactMailer.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  try {
    await sendContactEmail({ name, email, message })
    res.status(200).json({ success: true })
  } catch (error) {
    console.error('❌ Σφάλμα αποστολής email:', error)
    res.status(500).json({ success: false, error: 'Σφάλμα αποστολής email' })
  }
})

app.listen(3001, () => {
  console.log('🚀 Backend listening on http://localhost:3001')
})