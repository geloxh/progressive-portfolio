const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()

app.use(cors({ 
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
}))

app.use(helmet())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: { error: 'Too many requests, slow down.' },
})
app.use('/api/', limiter)

app.use(express.json())

app.use('/api/projects', require('./Routes/Projects'))
app.use('/api/skills', require('./Routes/Skills'))
app.use('/api/contact', require('./Routes/Contact'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000, () =>
            console.log('Server running on port 5000')
        )
    })

    .catch(err => console.log(err))