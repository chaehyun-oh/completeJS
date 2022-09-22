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

*/

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