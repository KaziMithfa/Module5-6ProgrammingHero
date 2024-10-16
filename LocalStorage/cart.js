const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";

  //console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductToStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity};`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  console.log(cart);

  return cart;
};

const saveProductToStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();

  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
