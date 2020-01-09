const mongoose = require('mongoose');

const PokedexSchema = new mongoose.Schema({
  trainer: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true
  },
  region: {
    type: String,
    required: false
  },
  pokemon: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Pokemon',
      required: true
    }
  ]
});

module.exports = mongoose.model('Pokedex', PokedexSchema);
