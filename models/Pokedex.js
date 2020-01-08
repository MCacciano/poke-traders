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
      caught: {
        type: Boolean,
        default: false
      },
      owned: {
        type: Boolean,
        default: false
      },
      willingToTrade: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: false
      },
      imageUrl: {
        type: String,
        require: false
      }
    }
  ]
});

module.exports = mongoose.model('Pokedex', PokedexSchema);
