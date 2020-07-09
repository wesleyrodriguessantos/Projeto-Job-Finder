const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));


// db connection
db.authenticate().then(() => {
    console.log("Conectou ao banco com Sucesso!");
}).catch(err => {
     console.log("Ocorreu um erro ao Conectar", err);
});

// Routes
app.get('/', (req, res) => {
    res.send("Está funcionando 3!");
});

// Jobs Routes
app.use('/jobs', require('./routes/jobs'));

// Nodemon atualiza a aplicação sem ter que reiniciar o Servidor