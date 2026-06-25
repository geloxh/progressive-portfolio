const Gallery = require('../Models/Gallery')
const { cloudinary } = require('../Config/Cloudinary')

const GalleryService = {
    getAll: async (category) => {
        const filter = category ? { category } : {}
        return await Gallery
            .find(filter)
            .sort({ order: 1, createdAt: -1 })
    },

    getFeatured: async () => {
        return await Gallery.find({ featured: true }).sort({ order: 1 })
    },

    create: async (file, body) => {
        const image = new Gallery({
            title: body.title,
            description: body.description,
            category: body.category,
            featured: body.featured === 'true',
            imageUrl: file.path, // Cloudinary URL from multer-storage-cloudinary
            publicId: file.filename, // Cloudinary public_id
        })
        return await image.save()
    },
    update: async (id, body) => {
        return await Gallery.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })
    },

    delete: async (id) => {
        const image = await Gallery.findById(id)
        if (!image) {
            const err = new Error('Image not found')
            err.status = 404
            throw err
        }

        // Delete from Cloudinary first
        await cloudinary.uploader.destroy(image.publicId)
        await Gallery.findByIdAndDelete(id)
        return { success: true }
    },
}

module.exports = galleryService