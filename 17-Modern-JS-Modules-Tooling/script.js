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

// ///////////////////

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

/*
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body }
};
const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('lemon', 3);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


// Export 
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost}`);
}

// Import
const { addToCart } = require('./shoppingCart.js');

*/

import { cloneDeep } from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'milk', quantity: 3 },
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);