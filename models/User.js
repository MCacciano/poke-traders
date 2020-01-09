const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Pokemon = require('../models/Pokemon');
const Pokedex = require('../models/Pokedex');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  game: {
    type: String,
    enum: ['shield', 'sword'],
    default: 'shield',
    required: [true, 'Please choose which game you are actively playing']
  },
  pokedex: {
    type: mongoose.Schema.ObjectId,
    ref: 'Pokedex',
    required: true
  }
});

// Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  const pokemon = await Pokemon.find();

  this.password = await bcrypt.hash(this.password, salt);
  if (!this.pokedex) {
    this.pokedex = await Pokedex.create({
      trainer: this,
      pokemon
    });
  }
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// match user entered password to hashed password in databse
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
