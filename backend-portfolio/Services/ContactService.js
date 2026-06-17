const Message = require('../Models/Message')
const EmailService = require('./EmailService')

const ContactService = {

    SaveMessage: async (data) => {
        const msg = new Message(data)
        await msg.save()
        await EmailService.SendNotification(data)
        return msg
    },

    getAllMessages: async () => {
        return await Message.find().sort({ createdAt: -1 })
    },
}

module.exports = ContactService