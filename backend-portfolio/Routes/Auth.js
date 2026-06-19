const Router = require('express').Router()
const { body } = require('express-validator')
const validate = require('../Middleware/Validate')
const AuthService = require('../Services/AuthService')

const LoginRules = [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
]