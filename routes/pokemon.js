const express = require('express');
const { getAllPokemon } = require('../controllers/pokemon');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/').get(getAllPokemon);

module.exports = router;
