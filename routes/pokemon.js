const express = require('express');
const { getPokemon } = require('../controllers/pokemon');

const router = express.Router();

router.route('/').get(getPokemon);

module.exports = router;
