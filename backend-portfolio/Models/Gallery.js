const mongoose = require('mongoose')

const GallerySchema = new mongoose.Schema({
    title: { type: String, require: true, trim: true, maxLength: 100 },
    description: { type: String, trim: true, maxLength: 300 },
    imageUrl: { type: String, required: true }, // Cloudinary URL
    publicId: { type: String, required: true }, // CLoudinary ID (for deletion)
    category: {
        type: String,
        enum: ['project', 'certificate', 'event', 'other'],
        default: 'other'
    },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }, // For Manual Sorting
}, { timestamps: true })

module.exports = mongoose.model('Gallery', gallerySchema)