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

// Coding challenge #1
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

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} yrears :) `)
}

// Coding challenge #2

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}


// Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(25));

// Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log('You should get a job.');
}

let height;
if (height) {
    console.log('Height is defined.');
} else {
    console.log('Hegith is undefined.')
}

// ## Equality operators == vs ===
const age = 18;
if (age === 18) console.log('You just became an adult!');

if (age == 18) console.log('You just became an adult! (loose)');

const favorite = Number(prompt("What's your favorite numer?"));
console.log(favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number!');
}


const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive.')
// } else {
    //     console.log('Someone else should drive...')
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive.')
} else {
    console.log('Someone else should drive...')
}


// Coding challenge #3

const Dolphins = 96 + 108 + 89;
const Koalas = 88 + 91 + 110;

const DolphinsAVG = Dolphins / 3;
const KoalasAVG = Koalas / 3;

if (DolphinsAVG > KoalasAVG) {
    console.log('Winner is Dolphins!')
} else if (KoalasAVG > DolphinsAVG) {
    console.log('Winner is Koalas!')
} else if (DolphinsAVG === KoalasAVG) {
    console.log('Draw!')
}

if (DolphinsAVG > KoalasAVG && DolphinsAVG >= 100) {
    console.log('Winner is Dolphins!')
} else if (KoalasAVG > DolphinsAVG && KoalasAVG >= 100) {
    console.log('Winner is Koalas!')
} else if (DolphinsAVG === KoalasAVG && DolphinsAVG >= 100 && KoalasAVG >= 100) {
    console.log('Draw!')
} else {
    console.log('No one wins the trophy...')
}

*/

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course sturcture');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}