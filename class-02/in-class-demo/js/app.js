'use strict';
console.log('app file is connected!');

let userAnswer = prompt('Is my favorite food pizza? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', userAnswer);

// transform to lower Case
let lowerCaseInput = userAnswer.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', lowerCaseInput);

if (lowerCaseInput === 'yes' || lowerCaseInput === 'y') {
  alert('Your right! My favorite food is pizza!');
} else {
  alert('Nope! Pizza is my favorite food!');
}

// prompt our user for some input.
let userName = prompt('What is your name?');
console.log('user name is: ', userName);
// what data type are we receiving from out prompt is a string. Even if we enter a number it is a string.
// console.log('data type is: ', typeof userName);
// userName.toLowerCase(); or the userName.toUpperCase();
// let lowerCaseName = userName.toLowerCase();
// console.log('Name Lower Case: ', lowerCaseName);
// USE A PARSE INT OR NUMBER TO CHANGE THE STRING INTO NUMBER.

//Look at some data types : boolean, string, number,
let myBooleenValueTrue = true;
let myBooleenValueFalse = true;
let thirdBooleenValueTrue = true;
// true               &&           true now its false
if (myBooleenValueTrue && thirdBooleenValueTrue) {
  alert('1 runs because it is the first condition to return true.');
} else if (myBooleenValueTrue || myBooleenValueFalse) {
  alert('2 because one condition was true');
} else if (thirdBooleenValueTrue) {
  alert('3 is now true!');
} else {
  alert('the else');
  console.log('we hit the else everything was false....');
}

//short circuit.
// if(true || false || true){
//   then this will run 'in here'
// }

//Introduction to arrays so we can store some stuff, strings, number, arrays, objects

let emptyArray = [];
console.log('🚀 ~ file: app.js:67 ~ emptyArray:', emptyArray);

let quizAnswers = ['c', 'a', 'd', 'c', 'e'];
console.log('quiz answers',quizAnswers);

//nested Array
//3 arrays in an array
let createNested = [['a'], [[]], [{}, 5]];
console.log('🚀 ~ file: app.js:67 ~ createNested:', createNested);

let nestedArray = [
  ['yes', 'y'], //0 index  1st element

  ['no', 'n'], // 1 index  2nd element

  ['maybe', 'maybe not'], //2 index do not want a comma here.  3rd element.
];
console.log(nestedArray);

let mixedDataTypesArray = ['Harry', 'Potter', 10, true, 'Magic', {}];
console.log('🚀 ~ file: app.js:90 ~ mixedDataTypesArray:', mixedDataTypesArray);

//how can we access things in our array.    arrayName[position]
//                 0,   1,   2
let myArrayOne = ['a', 'x', 'c'];
if (myArrayOne[1] === 'x') {
  //do something
  console.log('did we get from our array?', myArrayOne[1]);
}

//array methods push() and pop()

let myArrayTwo = [1, 2, 3, 4, 5];
console.log('🚀 ~ file: app.js:107 ~ myArrayTwo:', myArrayTwo);

// this how we add items to our Arrays.
// Add the number, next num.
myArrayTwo.push(6);
console.log('push?', myArrayTwo);
myArrayTwo.pop();
console.log('pop?', myArrayTwo);
//same as we started

let myArrayThree = [1, 2, 3, 4, 5];
// dot operator
myArrayThree.pop();
myArrayThree.pop();
myArrayThree.pop();

console.log('pop()', myArrayThree);


