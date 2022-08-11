const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const addToCart = document.getElementsByClassName('item__add');
const buttomEmpy = document.querySelector('.empty-cart');
let shoppingCartArray = [];

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
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;

const addValue = () => {
  const resultTotal = document.querySelector('.total-price');
  const valueTotal = shoppingCartArray.reduce(
    (acc, number) => number.salePrice + acc,
    0,
  );
  resultTotal.innerText = valueTotal;
  return resultTotal;
};

const cartItemClickListener = (event) => {
  event.target.remove(); // remove os elementos html
  const idClicked = event.target.innerText.slice(5, 18);
  const elementIndex = shoppingCartArray.findIndex(
    (id) => id.sku === idClicked,
  );
  shoppingCartArray = shoppingCartArray.filter(
    (_, index) => index !== elementIndex,
  );
  saveCartItems(shoppingCartArray);
  shoppingCartArray.reduce((acc, number) => number.salePrice - acc, addValue());
};

// cria a LI com as informações dentro do Carrinho de compras
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const renderShoppingCartItem = () => {
  cartItems.innerHTML = '';
  shoppingCartArray.forEach((element) =>
    cartItems.appendChild(createCartItemElement(element)));
};

const creatElementTotal = () => {
  const cart = document.querySelector('.cart');
  cart.appendChild(createCustomElement('p', 'total-price', ''));
};

// Recebeu o id enviado pela função gettingId, na linha 71
const shoppingCartItem = async (receiveId) => {
  const dataItem = await fetchItem(receiveId);
  const { id: sku, title: name, price: salePrice } = dataItem;
  shoppingCartArray.push({ sku, name, salePrice });
  renderShoppingCartItem();
  addValue();
  saveCartItems(shoppingCartArray); // salvando local storage
};

// pegando o ID da do item que foi adicionado no MeuCarrinho e passando o id para a função shoppingCartItem
const gettingId = (event) => {
  const addCardItems = event.target.parentNode.firstChild.innerText;
  shoppingCartItem(addCardItems);
};

// Renderiza os itens que do shopping
const renderItens = async (item) => {
  const dataComplete = await fetchProducts(item);
  const { results } = dataComplete;
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    items.appendChild(createProductItemElement({ sku, image, name }));
  });
  results.forEach((__, index) => {
    addToCart[index].addEventListener('click', gettingId);
  });
};

buttomEmpy.addEventListener('click', () => {
  const paragrafoTotal = document.querySelector('.total-price');
  cartItems.innerHTML = '';
  shoppingCartArray = [];
  localStorage.clear();
  paragrafoTotal.innerText = '0';
});

window.onload = () => {
  renderItens('computador');
  shoppingCartArray = getSavedCartItems('cartItems') || [];
  // console.log(shoppingCartArray);/
  renderShoppingCartItem();
  creatElementTotal();
};
