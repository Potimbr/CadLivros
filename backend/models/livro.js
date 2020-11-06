//importar o pacote 'mongoose'
const mongoose = require('mongoose');

//Definir os esquemas  dos nossos dados
const livroSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },

  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  paginas: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Livro', livroSchema )
