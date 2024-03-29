const express = require('express')
const router = express.Router()

router.get('/subrota', (req, res) => {
    res.send('subrota GET')
})

router.post('/subrota', (req, res) => {
    res.send('subrota POST')
})

router.put('/subrota', (req, res) => {
    res.send('subrota PUT')
})

router.delete('/subrota', (req, res) => {
    res.send('subrota DELETE')
})

module.exports = router