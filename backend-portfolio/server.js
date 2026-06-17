const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const ErrorHandler = require('./middleware/ErrorHandler')

require('dotenv').config()

const app = express()

// HTTPS - handled by livehost in production

// CORS - only allow the frontend
app.use(cors({ 
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
}))

// Security headers - blocks XSS, clickjacking, MIME sniffing
app.use(helmet())

/**
 * Rate limiting - Max 50 requests per 15 min per IP
 */
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: { error: 'Too many requests, slow down.' },
})
app.use('/api/', limiter)

const ContactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: { error: 'Too many messages sent.' },
})
app.use('/Api/Contact', ContactLimiter)

// Prevent huge payloads
app.use(express.json({ limit: '10kb' }))

app.use('/Api/Projects', require('./Routes/Projects'))
app.use('/Api/Skills', require('./Routes/Skills'))
app.use('/Api/Contact', require('./Routes/Contact'))

// Middleware - ErrorHandler
app.use(ErrorHandler)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000, () =>
            console.log('Server running on port 5000')
        )
    })

    .catch(err => console.log(err))