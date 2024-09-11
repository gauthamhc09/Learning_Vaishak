'use strict'
//Javascript

//values and variables
var message = false

//Datatype
// 1. Primitive - String, Number, Boolean, undefined, null, symbol, BigInt
// 2. Objects - {}, [];
let item = 'hello';
let numbers = 12;
let fruits = null;
const objects1 = {
    a: 1,
    b: 2
}
const arr = [23, 23, 12, 24];
const animals = 'deer';
//let, const, var - 
fruits = 'mangeo';
objects1.a = 'Mango';

//operators and operands
// +, - , *, <, > - operators
// 4 + 5 - 4 & 5 are operands
const addition = '4' + 5;
const sentence = 'I am ' + 'Gautham'
const minus = '87' - '5';

//if else //switch

//truthy falsy
// 5 falsy values - 0, ' ', undefined, null, NaN;
let values;
// if (values) { console.log('value is present') } else console.log('no value');

//conditional operator
// const result = values ? console.log('value is present') : console.log('no value');


//Babel - transpile & polyfill your code.


//use strict mode
// someName = 'hellooooo'   - this will shown an error in strict mode

//function declaration vs function expression

//function declaration
function callPerson(firstName) {
    console.log(this)
    return firstName
}

//function expression
const lastNameFn = function (lastName) {
    return lastName
}

//arrow function
const arrowFn = middleName => {
    console.log(this)
    return (
        middleName
    )
};


//Array -  array is an object - will not be in order
const array1 = [12, 43, 55, 23, 'bye', 54, 321, 54, 'hello', true, { a: 'hello', b: 'bye' }];
//array methods -
//pop() - removes last element of an array and returns that element
const arrresult = array1.pop()
//shift() - removes first element of an array and returns that element
const arrresult1 = array1.shift()
//push() - add element to the last of the array
const arrresult2 = array1.push(23)
//unshift() - add element at the beginning of the array
const arrresult3 = array1.unshift(34)

//Object - key value pair - always be in order
const obj = {
    firstName: 'Vaishak',
    lastName: 'Devaiah',
    yearBirth: 1998,
    details: {
        school: 'st thomas'
    },
    calcAge: function () {
        return 2024 - this.yearBirth
    }
};
obj.address = "Gonikoppa"
//object call - DOT notation and square bracket notation
const infostored = 'lastName'

function getInfo(info) {
    return obj[`${info}`]
    // return obj.info
}
// console.log(getInfo(infostored))
//Function attached to an object is called as method

//For loop - continue & break
for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i])
    // if (typeof array1[i] !== 'number') continue;
    // console.log(array1[i]);
    if (typeof array1[i] === 'object') console.log(array1[i].b)
}


//JS - High level object-oriented, multi paradigm programming lanaguage.

//low level language - C programming - need to allocate memory
//high level language - Python, Javascript - no need to allocate memory

//Static typed language  - C - data type need to mention
//Dynamically typed language - JS - data type no need mention


//Garbage collected - removes all unused data

//Just in Time compilation

//multiparadigm programming - Object-oriented, Functional programming, procedural programming

//prototype based object oriented

//first class functions - funcitions can be passed as arguments, function can be returned from another function,
//function can be used as values


const child = function () {
    return 'hello dad'
}

function parent() {
    const subchild = function () {
        return 'sub child'
    }
    return subchild
}

//JS - single threaded language


//Destructuting Array
const numbersD = [10, 20, 30, 40, 60];

const firstName = numbersD[0]
const secondValue = numbersD[1]


const [, , third, fourth, fifth = 50] = numbersD;
// console.log(third, fourth, fifth)

let number1 = 40;
let number2 = 50;

// number2 = number1 + number2;
// number1 = number2 - number1;
// number2 = number2 - number1;

[number2, number1] = [number1, number2]

//nested array
const nestedArray = [10, 20, 30, [40, 50]];
const [, , , [fourthNested, fifthNested]] = nestedArray;

//Destructuting Object
const restaurant = {
    name: 'empire',
    dishes: ['biriyani', 'kushka', 'kabbab'],
    openTimings: {
        sun: 10,
        mon: 12,
        tue: 12
    }
}
//naming
// const { name: restaurantName, dishes } = restaurant;

let someName = '';
({ name: someName } = restaurant);

const menu = ['pulav', 'chitranna'];
const copyMenu = [...menu];

const alex = 'Alex';

function takeMultiple(task1, ...otherTasks) {
    console.log(task1, otherTasks)
}


// console.log(takeMultiple('task1', 'task2', 'task3'))
const arrValues = [1, 3, 4, 5, 6]; // address1675
const arrValuesCopy = [1, 3, 4, 5, 6]; // address27786

const inter = '12'; //adress12
const interCopy = '12'; //adress121
//primitivies - string, number, boolean, undefined, null - they are compared by values
//non-primitives - objects, array  - they are compared by reference
// console.log(arrValues === arrValuesCopy)
// console.log(inter === interCopy)

//spread operator - Unpack an array
const arrValuess = [1, 3, 4, 5, 6];
const arr2 = [23, 54, 65]
const arrValuesCopys = [...arrValuess, ...arr2]
console.log(arrValuesCopys)

//rest operator - pack elements into an array;
const [a, b, ...others] = arrValuess;
// console.log(a, b, others)

function callAPI(a, b, ...others) {
    console.log(a, b, others)
}
const res = {
    menu: ['starter', 'main', 'dessert'],
    guestNumbers: 0
}

//Short Circuting (&& and ||)
// || - if first value is truthy it will print
const truthyValues = 3 || '';

// const guestsAvailable = res.guestNumbers ? res.guestNumbers : 10;
// const guestsAvailable = res.guestNumbers || 10;


// && - if first value is false it will return
console.log(30 && 'alex');


// Nullish  Coalescing operator - only considers as false if value is null or undefined
const guestsAvailable = res.guestNumbers ?? 10;
// console.log(guestsAvailable)

//logical assignment operator (ES2021)
// res.guestNumbers = res.guestNumbers || 10;
res.guestNumbers ||= 10;
console.log(res)