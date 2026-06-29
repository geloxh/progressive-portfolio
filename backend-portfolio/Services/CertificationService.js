const Certification = require('../models/Certification')
const { cloudinary } = require('../config/cloudinary')

const certificationService = {

  getAll: async (category) => {
    const filter = category ? { category } : {}
    return await Certification
      .find(filter)
      .sort({ issueDate: -1 })
  },

  getFeatured: async () => {
    return await Certification
      .find({ featured: true })
      .sort({ issueDate: -1 })
  },

  getById: async (id) => {
    const cert = await Certification.findById(id)
    if (!cert) {
      const err = new Error('Certification not found')
      err.status = 404
      throw err
    }
    return cert
  },

  create: async (body, file) => {
    const data = { ...body }

    if (file) {
      data.imageUrl = file.path       // Cloudinary URL
      data.publicId = file.filename   // Cloudinary public_id
    }

    const cert = new Certification(data)
    return await cert.save()
  },

  update: async (id, body, file) => {
    const cert = await Certification.findById(id)
    if (!cert) {
      const err = new Error('Certification not found')
      err.status = 404
      throw err
    }

    // If a new image is uploaded, delete the old one from Cloudinary
    if (file && cert.publicId) {
      await cloudinary.uploader.destroy(cert.publicId)
      body.imageUrl = file.path
      body.publicId = file.filename
    }

    return await Certification.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })
  },

  delete: async (id) => {
    const cert = await Certification.findById(id)
    if (!cert) {
      const err = new Error('Certification not found')
      err.status = 404
      throw err
    }

    if (cert.publicId) {
      await cloudinary.uploader.destroy(cert.publicId)
    }

    await Certification.findByIdAndDelete(id)
    return { success: true }
  },
}

module.exports = certificationService