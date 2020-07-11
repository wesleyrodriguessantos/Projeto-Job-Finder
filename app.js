const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db.authenticate().then(() => {
    console.log("Conectou ao banco com Sucesso!");
}).catch(err => {
     console.log("Ocorreu um erro ao Conectar", err);
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Jobs Routes
app.use('/jobs', require('./routes/jobs'));

// Nodemon atualiza a aplicação sem ter que reiniciar o Servidor