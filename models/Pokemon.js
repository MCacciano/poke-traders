const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  caught: {
    type: Boolean,
    required: true,
    default: false
  },
  url: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  pokeID: {
    type: String,
    requred: false
  },
  pokeApiUrl: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
