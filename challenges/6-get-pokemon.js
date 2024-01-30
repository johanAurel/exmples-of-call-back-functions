const axios = require('axios');

return axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    console.log(response)
    console.log(response.data.results);
  });