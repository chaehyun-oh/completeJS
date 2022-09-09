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
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}