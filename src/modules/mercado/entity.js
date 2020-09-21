const fetch = require("node-fetch");


async function getMercado(query) {
  let response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  let data = await response.json()
  return data;
}


module.exports = {
  getMercado,  
};
