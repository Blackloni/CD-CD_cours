const request = require('supertest')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: '🚀 Hello DevOps !',
    status: 'ok',
    version: '1.0.0',
    deploye_par: 'GitHub Actions + Render'
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() })
})

describe('Tests de l API', () => {
  test('GET / retourne un message de bienvenue', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('ok')
    expect(res.body.message).toBe('🚀 Hello DevOps !')
  })

  test('GET /health retourne un statut healthy', async () => {
    const res = await request(app).get('/health')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('healthy')
  })
})
