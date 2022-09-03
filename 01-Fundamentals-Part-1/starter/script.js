/*
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Frank';
console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log(typeof firstName);

// undifined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let age = 30;
age = 31;

const birthYear = 1991;
// Math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// coding challenge #1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

-----

const firstName = "Jonas";
const job = "teacher";
const birthyear = 1991;
const year = 2022;
const jonas =
"I'm " + firstName + " a " + (year - birthyear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);
console.log("String with \n mulitple \n lines");
console.loe(`String
multiple
lines`);
*/

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} yrears :) `)
}