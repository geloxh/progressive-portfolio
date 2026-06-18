const Router = require('express').Router()
const { body } = require('express-validator')
const Validate = require('../Middleware/Validate')
const ContactService = require('../Services/ContactService')


const ContactRules = [
    body('name').trim().notEmpty().isLength({ max: 100 }),
    body('email').isEmail().normalizeEmail(),
    body('message').trim().notEmpty().isLength({ min: 10, max: 1000 }),
]

router.post('/', ContactRules, Validate, async (req, res, next) => {
    try {
        await ContactService.SaveMessage(req.body)
        res.status(201).json({ success: true })
    } catch (err) { next(err) }
})

module.exports = Router