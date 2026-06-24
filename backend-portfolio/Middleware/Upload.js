const multer = require('multer')
const { storage } = require('../config/cloudinary')

const upload = multer ({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB Max
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp']
        if (!allowed.includes(file.mimetype)) {
            return cb(new Error('ONly JPG, PNG, and WebP images are allowed.'))
        }
        cb(null, true)
    },
})

module.exports = upload