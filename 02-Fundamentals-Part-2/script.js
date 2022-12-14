'use strict';
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 543;
// const if = 23;

function logger() {
    console.log('My name is Jonas.')
}

// calling, running , invoking function.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
    //     const age = 2022 - birthYear;
    //     return age;
    // }

    function calcAge1(birthYear) {
        return 2022 - birthYear;
    }

    const age1 = calcAge1(1991);
    // console.log(age1)

    const calcAge2 = function (birthYear) {
        return 2022 - birthYear;
    }

    const age2 = calcAge2(1991);
    console.log(age1, age2);

    const calcAge3 = brithYear => 2037 - brithYear;
    const age3 = calcAge3(1991);
    console.log(age3);

    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2022 - birthYear;
        const retirement = 65 - age;
        // return retirement;
        return `${firstName} retires in ${retirement} years`
    }
    // yearsUntilRetirement(1991);

    console.log(yearsUntilRetirement(1991, 'Jonas'))

    function cutFruitPieces(fruit) {
        return fruit * 4;
    }

    function fruitProcessor(apples, oranges) {
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);

        const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
        return juice;
    }

    console.log(fruitProcessor(2, 3))

    const calcAge = function (birthYear) {
        return 2022 - birthYear;
    }

    const yearsUntilRetirement = function (birthYear, firstName) {
        const age = calcAge(birthYear);
        const retirement = 65 - age;

        if (retirement > 0) {
            console.log(`${firstName} retires in ${retirement} years`)
            return retirement;
        } else {
            console.log(`${firstName} has already retired.`)
            return -1;
        }

    }
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1981, 'Mike'));
console.log(yearsUntilRetirement(1955, 'Jack'));

//  # Coding challenge #1
function calcAverage(team) {
    const teamAvg = team / 3;
    return teamAvg;
}

const calcAverage2 = (a, b, c) => (a + b + c) / 3;

function checkWinner(avg1, avg2) {
    if (avg1 >= avg2 * 2) {
        console.log(`Dolphins win (${avg1} vs. ${avg2})`);
    } else if (avg2 >= avg1 * 2) {
        console.log(`Koalas win (${avg2} vs. ${avg1})`);
    } else {
        console.log('No team wins...')
    }
}

const Dolphins = 85 + 54 + 41;
const Koalas = 23 + 34 + 27;
const DolAvg = calcAverage(Dolphins);
const KoAvg = calcAverage(Koalas);
console.log(checkWinner(DolAvg, KoAvg))


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends(friends.length - 1));

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge2(years[0]);)

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
console.log(age)

const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
const newLength = friends.push('Jay');

friends.unshift('John');

friends.pop();
const popped = friends.pop();
console.log(popped);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

console.log(friends)

//  # Coding challenge #1
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         return tip;
//     }
// }

// const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschemdtmann';

console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length}. and his best friend is called ${jonas.friends[0]}`)


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
        //     return 2022 - birthYear
        // }

        // calcAge: function () {
            //     return 2022 - this.birthYear
            // }

            calcAge: function () {
                this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummay: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }

}

// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.age);


//  # Coding challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than${john.fullName}'s BMI (${john.bmi}) `)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than${mark.fullName}'s BMI (${mark.bmi}) `)
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2022 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling from types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

const years = [1991, 2007, 1950, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - year[i]);
}

console.log(ages);


for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2022 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}????????????????`);
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end`);
}


// Coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip2(bills[i]));
    totals[i] = bills[i] + tips[i];
}

// for (let i = 0; i < bills.length; i++) {
    //     const tip = calcTip2(bills[i]);
    //     tips.push(tip);
    //     totals.push(tip + bills[i]);
    // }
    
console.log(totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));

*/