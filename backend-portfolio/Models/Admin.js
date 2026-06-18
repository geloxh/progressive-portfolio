const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // stored hashed, not plain text
})

module.exports = mongoose.model('Admin', AdminSchema)