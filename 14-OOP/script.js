'use strict';

/*
const Person = function (firstName, birthYear) {
    // console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function () {
    //     console.log(2022 - this.birthYear);
    // };
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);

//  1. New {} is created
//  2. function is called, this = {}
//  3. {} linked to prototype
//  4. function automatically return {}

const matilda = new Person('Matilda', 2019);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay'

console.log(jonas instanceof Person);
console.log(jay instanceof Person);


Person.hey = function () {
    console.log('Hey there');
    console.log(this);
};
Person.hey();
// this could't be inherited

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//  Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 6, 7, 6, 3, 4]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
    return [...new Set(this)]
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// coding Challenge #1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brack = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brack();
bmw.accelerate();

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    };
};

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2022 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log('Hey here');
        console.log(this);
    }
};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();


const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


// coding challenge #2
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    };

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    brack() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = this.speed * 1.6;
    }
};

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brack();
ford.speedUS = 50;
console.log(ford);

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduce();
// mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// Coding Challenge #3

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brack = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with ad charge of ${this.charge}`
    );
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brack();
tesla.accelerate();

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2022 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log('Hey here');
        console.log(this);
    }
};

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        //  Always needs to happen first
        super(fullName, birthYear);
        // this.course = course;
    };
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(`I'm ${2022 - this.birthYear}years old, but as a student I feel more like ${2022 - this.birthYear + 10}.`);
    }
};
const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');
martha.introduce();
martha.calcAge();


const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};


const jay = Object.create(StudentProto);
jay.init('Jay', 2001, "Computer Science");
jay.introduce();
jay.calcAge();
*/


// 1) Public fields 
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // Public fields (instances)
    locale = navigator.language;

    // Private fields (instances)
    #movements = [];
    #pin;

    // 3) Public methods
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }
    // Public interface
    getMovements() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
        return this;
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    _approveLoan(val) {
        return true
    }

};

const acc1 = new Account('Jonas', 'EUR', 1111,);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements())
Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#pin);


// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());