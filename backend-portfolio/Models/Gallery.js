const mongoose = require('mongoose')

const GallerySchema = new mongoose.Schema({
    description: { type: String, required: true, unique: true },
    file
})