'use strict';

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
