const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('./Models/Admin')

const AuthService = {
    login: async (email, password) => {
        const admin = await Admin.findOne({ email })
        if (!admin) {
            const err = new Error('Invalid credentials.')
            err.status = 401
            throw err
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            const err = new Error('Invalid credentials')
            err.status = 401
            throw err
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        return token
    },
}

module.exports = AuthService