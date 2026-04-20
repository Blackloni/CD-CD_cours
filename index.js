const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello DevOps ! Version 2',
    status: 'ok',
    version: '1.0.0',
    deploye_par: 'GitHub Actions + Render'
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() })
})

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`)
})
