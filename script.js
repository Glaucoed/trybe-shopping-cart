const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const favoritesButton = document.getElementsByClassName('item__add');
let carrinhoDeCompras = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// Crias todos os section com cada item de demonstração
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  const idClicado = event.target.innerText.slice(5, 18);
  const elementIndex = carrinhoDeCompras.findIndex((id) => id.sku === idClicado);
  carrinhoDeCompras = carrinhoDeCompras.filter((_, index) => index !== elementIndex);
  console.log(carrinhoDeCompras);
};

// cria a LI com as informações dentro do Carrinho de compras
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// funcao carinho de compras
const shoppingCartItem = async (recebeId) => { 
  const dataItem = await fetchItem(recebeId);
  const { id: sku, title: name, price: salePrice } = dataItem;
  cartItems.appendChild(createCartItemElement({ sku, name, salePrice }));
  carrinhoDeCompras.push({ sku, name, salePrice });
  console.log(carrinhoDeCompras); // mostrando o que está sendo inserido na array
};

// pega o Id do HTML
const getId = (event) => {
  const adicionaItemsCard = event.target.parentNode.firstChild.innerText;
  shoppingCartItem(adicionaItemsCard);
};

// Renderiza os items no shopping
const renderItens = async () => {
  const dataComplete = await fetchProducts('computador');
  const { results } = dataComplete;
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    items.appendChild(createProductItemElement({ sku, image, name }));
  });
  results.forEach((__, index) => {
    favoritesButton[index].addEventListener('click', getId);
  });
};

window.onload = () => {
  renderItens();
};
