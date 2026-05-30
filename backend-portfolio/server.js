const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
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