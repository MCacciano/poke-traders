// const pokeApi = require('../axios/pokeApi');
const asyncHandler = require('../middleware/asyncHandler');

const Pokemon = require('../models/Pokemon');

exports.getAllPokemon = asyncHandler(async (req, res, next) => {
  // utility for padding pokemon id to get image asset
  // const padIdToThree = id => (id <= 99999 ? `00${id}`.slice(-3) : id);

  const results = await Pokemon.find();

  res.status(200).json({ success: true, count: results.length, results });
});
