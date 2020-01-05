const express = require('express');
const { getAllPokemon } = require('../controllers/pokemon');

const router = express.Router();

router.route('/').get(getAllPokemon);

module.exports = router;
