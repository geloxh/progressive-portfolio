const router = require('express').Router()
const { body } = require('express-validator')
const auth = require('../Middleware/Auth')
const upload = require('../Middleware/Upload')
const validate = require('../Middleware/Validate')
const GalleryService = require('../Services/GalleryService')

const GalleryRules = [
    body('title').trim().notEmpty().isLength({ max: 100 }),
    body('description').optional().trim().isLength({ max: 300 }),
    body('category').optional().isIn(['project', 'certificate', 'event', 'other']),
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

// Protected routes - admin only
router.post('/',
    auth,
    upload.single('image'), // 'image' = form field name
    galleryRules,
    validate,
    async (req, res, next) => {
        try {
            if (!req.file) return res.status(400).json({ error: 'Image file required.'})
            const image = await galleryService.create(req.file, req.body)
            res.status(201).json(image)
        } catch (err) {
            next(err)
        }
    }
)

router.put('/:id', auth, galleryRules, validate, async (req, res, next) => {
    try {
        const image = await galleryService.update(req.params.id, req.body)
        res.json(image)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', auth, async (req, res, next) => {
    try {
        await galleryService.delete(req.params.id)
        res.jswon({ success: true })
    } catch (err) {
        next(err)
    }
})

module.exports = router