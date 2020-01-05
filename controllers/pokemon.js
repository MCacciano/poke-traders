const pokeApi = require('../axios/pokeApi');
const asyncHandler = require('../middleware/asyncHandler');

const Pokemon = require('../models/Pokemon');

exports.getAllPokemon = asyncHandler(async (req, res, next) => {
  // const response = await pokeApi.get('/pokemon?limit=1000');
  const response = await Pokemon.find();

  res.status(200).json({ success: true, count: response.length, response });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ALL OF THIS WAS TO SEED THE DB WITH POKEMON
  // const padIdToThree = id => (id <= 99999 ? `00${id}`.slice(-3) : id);
  // const pokeID = url => padIdToThree(url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''));

  // const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID()}.png`;

  // response.data.results.forEach((pokemon, i) => {
  // Pokemon.create({
  //   ...pokemon,
  //   imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID(pokemon.url)}.png`
  // });

  // console.log({
  //   ...pokemon,
  //   imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeID(pokemon.url)}.png`
  // });
  // });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
