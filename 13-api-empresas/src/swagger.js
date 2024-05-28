const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API-Empresas',
        description: 'API para gerenciamento de projetos para empresa.'
    },
    host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./routes/autenticacao.router.js' , './routes/router.js'];

swaggerAutogen(outputFile, routes, doc);