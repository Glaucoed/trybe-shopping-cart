require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  it('Verifique a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async() => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifique se ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', async() => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('Verifique se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const retornoFunction = await fetchProducts('computador')
    expect(retornoFunction).toEqual(computadorSearch)
  });
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async() => {
  await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
