const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const favoritesButton = document.getElementsByClassName('item__add');

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

const cartItemClickListener = (event) => {};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const returnItem = async (getId) => {
  const dataItem = await fetchItem(getId);
  const { id: sku, title: name, price: salePrice } = dataItem;
  cartItems.appendChild(createCartItemElement({ sku, name, salePrice }));
};

const getId = (event) => {
  const adicionaItemsCard = event.target.parentNode.firstChild.innerText;
  returnItem(adicionaItemsCard);
};

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
