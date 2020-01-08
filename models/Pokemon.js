const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  imageUrl: {
    type: String
  },
  pokeID: {
    type: String,
    requred: false
  },
  pokeApiUrl: String
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
