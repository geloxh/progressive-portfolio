const router = require('express').Router()
const Message = require('../Models/Message')

router.post('/', async (req, res) => {
    const msg = new Message(req.body)
    await msg.save()
    res.status(201).json({ success: true })
})

module.exports = router