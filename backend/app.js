const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

const mongoose = require('mongoose');

const Livro = require('./models/livro')

app.use (bodyParser.json());

mongoose.connect('mongodb+srv://user:14eDE33AA49898aAv@cluster0.xpndi.mongodb.net/app-mean?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true
   })
  .then(() => {
    console.log("Conexão OK!");
  })
  .catch((error) => {
    console.log("Conexão não funcionou!");
    console.log(error);
  })


app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.get('/api/livros', (req, res, next) => {
  Livro.find().then(
    documents => {
      res.status(200).json(
        {
          mensagem: "Tudo OK",
          livros: documents
        }
      );
    }
  );
});

app.post('/api/livros', (req, res, next) => {
  const livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });

  livro.save();

  console.log(livro);
  res.status(201).json({mensagem: 'Livro inserido'})
});

module.exports = app;
