const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

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

// Nodemon atualiza a aplicação sem ter que reiniciar o Servidor