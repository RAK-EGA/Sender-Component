const express = require('express')
const { sendToEventBridge } = require('../services/eventBridge')

const router = express.Router()

router.get('/',
    async (req, res) => {

        sendToEventBridge()
        res.status(200).json({ message: "Message Sent Successfully" })
    })

module.exports = router