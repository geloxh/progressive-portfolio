const nodemailer = require('nodemailer')

const Transporter = nodemailer.CreateTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use Gmail App Password
    },
})

const EmailService = {

    SendNotification: async ({ name, email, message }) => {
        await Transporter.SendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio contact from ${name}`,
            html: `
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        })
    },
}

module.exports = EmailService