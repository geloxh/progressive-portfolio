const router = require('express').Router()
const { body } = require('express-validator')
const auth = require('../Middleware/Auth')
const upload = require('../Middleware/Upload')
const validate = require('../Middleware/Validate')
const GalleryService = require('../Services/GalleryService')

const GalleryRules = [
    body('title').trim().notEmpty().isLength({ max: 100 }),
    body('description').optional().trim().isLength({ max: 300 }),
    body('category').optional().isIn(['project', 'certificate', 'event', 'other']);
]

// Public routes
router.get('/', async (req, res, next) => {
    try {
        const { category } = req.query
        const images = await galleryService.getALl(category)
        res.json(images)
    } catch (err) {
        next(err)
    }
})

router.get('/featured', async (req, res, next) => {
    try {
        const images = await galleryService.getFeatures()
        res.json(images)
    } catch (err) {
        next(err)
    }
})

//