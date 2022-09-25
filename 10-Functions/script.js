'use strict';
/*
const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // ES5 way
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', undefined, 1000);


const flight = 'LH123';
const jonas = {
    name: 'Jonas Schmetdmann',
    passport: 1235098235
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 1235098235) {
        alert('Check In')
    } else {
        alert('Wrong passport')
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
    console.log('👋');
}
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmetdmann');
lufthansa.book(523, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const book = lufthansa.book;

//  does not work
// book(23, 'Sarah Williams');

//  call method
// book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 512, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    booking: [],
}

book.call(swiss, 864, 'Mary Cooper');
console.log(swiss);

// apply method
const flightData = [864, 'Gorge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// same as line 137
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(43, 'Steven Williams');

const bookEW24 = book.bind(eurowings, 24);
bookEW24('Jonas Schmedtmann');
bookEW24('Martha Cooper');

//  with EventListeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//  Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (rate, value) => value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

//  Coding challenge #1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
                )
                );
                console.log(answer);
                
                typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
                
                this.displayResult();
                this.displayResult('string');
            },
            displayResult(type = 'array') {
                if (type === 'array') {
                    console.log(this.answers);
                } else if (type === 'string') {
                    console.log(`Poll results are ${this.answers.join(', ')}`);
                }
            },
        };
        
        // poll.registerNewAnswer()
        
        document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
        
        poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
*/

const runOnce = function () {
    console.log('This will never run again');
};

(function () {
    console.log('This will never run again');
})();

(() => console.log('This will never run again'))();