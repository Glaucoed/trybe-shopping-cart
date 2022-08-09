const fetchProducts = (item) => {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  if (!item) {
    throw new Error('You must provide an url');
  }
  // const response = await fetch(API_URL);
  // const products = await response.json();
  const data = (fetch(API_URL)
  .then((response) => response.json()))
  .then((products) => products);
  return data;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
