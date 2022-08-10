const fetchItem = (id) => {
  const API_URL = `https://api.mercadolibre.com/items/${id}`;
  if (!id) {
    throw new Error('You must provide an url');
  }
  const data = (fetch(API_URL)
  .then((response) => response.json()))
  .then((products) => products);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
