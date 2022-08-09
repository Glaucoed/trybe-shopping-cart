const fetchProducts = async (item) => {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const response = await fetch(API_URL);
  const product = await response.json();
  
  if (!item) {
    throw new Error('You must provide an url');
  }
  return product;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
