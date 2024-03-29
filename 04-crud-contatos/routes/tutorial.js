const express = require('express')
const router = express.Router()

router.get('/tutorial', (req, res) =>{
    res.send('Tutorial GET')
})

router.post('/tutorial', (req, res) =>{
    res.send('Tutorial POST')
})

router.put('/tutorial', (req, res) =>{
    res.send('Tutorial PUT')
})

router.delete('/tutorial', (req, res) =>{
    res.send('Tutorial DELETE')
})

module.exports = router