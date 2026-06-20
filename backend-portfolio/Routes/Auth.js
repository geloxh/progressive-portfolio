const Router = require('express').Router()
const { body } = require('express-validator')
const validate = require('../Middleware/Validate')
const AuthService = require('../Services/AuthService')

const LoginRules = [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
]

router.post('/login', loginRules, validate, async (req, res, next) => {
    try {
        const { email, password } = req.body
        const token = await authService.login(email, password)
        res.json({ token })
    } catch (err) { next(err) }
})

module.exports = router