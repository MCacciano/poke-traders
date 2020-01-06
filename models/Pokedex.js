const mongoose = require('mongoose');

const PokedexSchema = new mongoose.Schema({
  region: {
    type: String,
    required: true
  },
  pokemon: {
    type: mongoose.Schema.ObjectId,
    ref: 'Pokemon',
    require: true
  }
});

module.exports = mongoose.model('Pokedex', PokedexSchema);
