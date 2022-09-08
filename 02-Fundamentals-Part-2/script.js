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
*/

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
