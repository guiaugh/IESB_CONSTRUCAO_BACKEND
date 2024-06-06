const express = require('express');
const app = express();
// configuração de middleware
app.use(express.json());

//importando rotas
const routerFuncio = require('./routes/routerFuncio');
app.use(routerFuncio);

const router = require('./routes/routes');
const { checarToken } = require('./validators/funcionarioValidacao')
app.use("/", checarToken, router);

const db = require('./db/connection');
db()

app.listen(3000, () => {
    console.log("Aplicação rodando!")
})

