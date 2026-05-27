const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, min: 1, max: 100 },
    category: { type: String, enum: [ 'frontend', 'backend', 'database', 'devops' ] },
})

module.exports = mongoose.model('Skill', skillSchema)