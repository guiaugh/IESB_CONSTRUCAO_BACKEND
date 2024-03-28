const express = require('express')
const app = express()
const port = 3000

// middleware -> intermediario
app.use((req, res, next) => {
    console.log('PASSOU NO INTERMEDIARIO')
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    console.log('Data: ' + today.toDateString())
    next()
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
 
app.post('/aluno', (req, res) => {
    
    console.log(req.body)

    res.send('OK')
})

app.listen(port, () => {
    console.log('Aplicação iniciada em http://localhost:3000')
})