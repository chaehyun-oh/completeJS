// Importing module
// import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart.js";

// addToCart('bread', 5);
// console.log(price, totalQuantity);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { totalPrice as price, totalQuantity } from './shoppingCart.js'; --- this is not desirable

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('apples', 4);
add('lemon', 8);

// import is not a copy
console.log(cart);