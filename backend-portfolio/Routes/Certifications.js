const router = require('express').Router()
const { body } = require('express-validator')
const auth = require('../middleware/auth')
const upload  = require('../middleware/upload')
const validate = require('../middleware/validate')
const certificationService = require('../services/certificationService')

const certRules = [
  body('title').trim().notEmpty().isLength({ max: 150 }),
  body('issuer').trim().notEmpty().isLength({ max: 100 }),
  body('issueDate').notEmpty().isISO8601().withMessage('Valid date required'),
  body('expiryDate').optional({ nullable: true }).isISO8601(),
  body('credentialUrl').optional().isURL(),
  body('category')
    .optional()
    .isIn(['frontend', 'backend', 'cloud', 'devops', 'database', 'other']),
]

// Public routes
router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query
    const certs = await certificationService.getAll(category)
    res.json(certs)
  } catch (err) { next(err) }
})

router.get('/featured', async (req, res, next) => {
  try {
    const certs = await certificationService.getFeatured()
    res.json(certs)
  } catch (err) { next(err) }
})

router.get('/:id', async (req, res, next) => {
  try {
    const cert = await certificationService.getById(req.params.id)
    res.json(cert)
  } catch (err) { next(err) }
})

// Protected routes — admin only
router.post('/',
  auth,
  upload.single('image'),
  certRules,
  validate,
  async (req, res, next) => {
    try {
      const cert = await certificationService.create(req.body, req.file)
      res.status(201).json(cert)
    } catch (err) { next(err) }
  }
)

router.put('/:id',
  auth,
  upload.single('image'),
  certRules,
  validate,
  async (req, res, next) => {
    try {
      const cert = await certificationService.update(req.params.id, req.body, req.file)
      res.json(cert)
    } catch (err) { next(err) }
  }
)

router.delete('/:id', auth, async (req, res, next) => {
  try {
    await certificationService.delete(req.params.id)
    res.json({ success: true })
  } catch (err) { next(err) }
})

module.exports = router