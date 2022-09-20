'use strict';
/*
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';

            output = 'NEW OUTPUT';
            const str = `Oh, and you're a milleniar, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;


console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;


// Example
if (!numProduct) deletShoppingCart();

var numProduct = 10;

function deletShoppingCart() {
    console.log('All products deleted!');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2022 - birthYear);
    console.log(this);
}
calcAgeArrow(1991);


const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
    }
};
jonas.calcAge();


const matilda = {
    year: 2017,
};
//  method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
        
        
        // // Solution 1:
        // const self = this;
        // const isMillenial = function () {
            //     // console.log(this.year >= 1981 && this.year <= 1996);
            //     console.log(self.year >= 1981 && self.year <= 1996);
            // };
            
            // Solution 2:
            const isMillenial = () => {
                console.log(this.year >= 1981 && this.year <= 1996);
            };
            
            isMillenial();
        },
        
        greet: () => console.log(`Hey, ${this.firstName}`),
    };
    jonas.greet();
    jonas.calcAge();
    
    const addExpr = function (a, b) {
        console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);

*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

//  Only works oh the first level
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2, jessicaCopy);
