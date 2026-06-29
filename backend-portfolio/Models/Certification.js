const mongoose = require('mongoose')

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 150 },
  issuer: { type: String, required: true, trim: true, maxlength: 100 },
  issueDate: { type: Date, required: true },
  credentialId: { type: String, trim: true },   
  credentialUrl:{ type: String, trim: true },   
  imageUrl: { type: String },               
  publicId: { type: String },                
  skills: [String],                       
  category: {
    type: String,
    enum: ['frontend', 'backend', 'cloud', 'devops', 'database', 'other'],
    default: 'other',
  },
  featured: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Certification', certificationSchema)