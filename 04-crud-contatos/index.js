const express = require('express')
const app = express();
const port = 3000;

const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

app.use(express.json())

app.use(tutorial)

app.use('/rota', subrota)

app.use(contatos)

app.get('/', (req, res) => {
    res.send('OK')
})



app.listen(port, () =>{
    console.log('Rodando na URL: http://localhost:3000')
})