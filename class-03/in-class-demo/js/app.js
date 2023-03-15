'use strict';
console.log('app file is connected');

//global variables
let userPoints = 0;

console.log('🚀 ~ file: app.js:7 ~ userPoints:', userPoints);

alert('Hello welcome to my guessing game');

/**
 * the user variable
 * string, null, " " empty
 * If the user is an empty string or null, keep asking for their name
 *
 * while(userName === ' ' || userName === null){
 * // do some stuff
 *
 * }
 *
 * short cut
 * while(!userName){
 *  userName = prompt('what is your name?');
 * }
 */
//this a variable declaration.
// let userName;

// while (!userName) {
//   //do the stuff
//   userName = prompt('Welcome, what is your name?');
//   console.log('🚀 ~ file: app.js:32 ~ userName:', userName);
// }
//normalize out input...

// let normalizedInputName = userName.toLowerCase().trim();

// console.log('🚀 ~ file: app.js:37 ~ normalizedInputName:', normalizedInputName);

// if (normalizedInputName !== 'bob') {
//   console.log('your not bob');
//   alert('Your not BOB!');
// }

//Control flow of our if / else statements
//1
// if(condition){
//DO THIS
// }

//2
// if(condition){
// } else {
// }

//3
// if(condition){
//   .....
// } else if(second condition) {
//   ....
// } else {
//   .....
// }

/**
if(condition){
  .....
}
 else if(second condition) {
  ....
} else if (thirdCondition) {
  .....
} else {
  .......
}
*/


// Comparison Operators

/**
 < - less than
 > - greater than
 <= less than or equal to
 >= greater than or equal to
 == kinda equals
 != not equals too
 // stict usage
 === - strictly equals
 !== - not strictly equals
  */

//  prompt();
//  alert();
//  toLowerCase();
//  toUpperCase();
//  log();
//  join();
//  push();
//  pop();
//  trim();
//  length();
//  shift();
//  unshift();
//  indexOf();
//  includes();


//USER POINTS

let answer = prompt('Is popcorn my favorite food? Please type Yes or No.').toLowerCase().trim();
console.log('🚀 ~ file: app.js:111 ~ answer:', answer);

if(answer === 'no' || answer === 'n'){
  alert('You are correct, popcorn is not my favorite');
  userPoints = userPoints + 1;
  // userPoints += 1;
  // userPoints++;
} else {
  // userPoints--;
  alert('No pizza is my favorite food.');
}

console.log('points?', userPoints);


//looping
console.log(0);
console.log(1);
//up to 100 would take forever. Looping provides the way to go over lists, especially arrays.


//while loops require a starting variable
// While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs

let count = 0;

while(count <= 50){
  console.log('count: ',count);
  count = count + 5;
  // count += 5;
}

//This loop counts down from 50 to 0, decreasing by -2 each time

count = 50;

while(count >= 20){
  console.log('50 to 20: ', count);
  count = count - 2;
}



/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i = i + 1
            i = i - 1

            i += 1;
            i -= 1;

            i++;
            i--;
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)
*/

//global variable
let newUser;

do{
  newUser = prompt('A new user name?');
  console.log(newUser);
} while(!newUser);


console.log('New User? : ',newUser);



/*

      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false


      truthy values. ==== everything else.



      Logical Operators
      - (calzone === 'isPizza' ||  'isNotPizza')    => will not Work


      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||

      // - (craig === 'instructor' || craig === 'teacher'){
        //where something will if condition is true
      }


      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.


        let name1 = 'Bob';
        let name2 = '';
   ///                   Bob
        let userName1 = (name1 || 'unknown'); -> userName1 = 'Bob'
        let userName2 = (false || 0); -> userName2 = 'will not run'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/

let a = 10;
let emptyObject = {};

if(a){
  console.log('A exsists');
}

//both have to be true
if(a && emptyObject){
  console.log('they both exsist!');
}


//Arrays
let foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
console.log('🚀 ~ file: app.js:257 ~ foodsILike:', foodsILike);


for(let i = 0; i < foodsILike.length; i++){
  console.log('foods:', foodsILike[i]);
}

foodsILike.push('swiss chard');


console.log('🚀 ~ file: app.js:257 ~ foodsILike:', foodsILike);


//remove an element from out arrays.

let popArrayElement = foodsILike.pop();
console.log('🚀 ~ file: app.js:273 ~ popArrayElement:', popArrayElement);

let shiftArray = foodsILike.shift();
console.log('shifted....?',shiftArray);
console.log('🚀 ~ file: app.js:257 ~ foodsILike:', foodsILike);

foodsILike.unshift('am I first now?');
console.log('first?',foodsILike);

let index = foodsILike.indexOf('popcorn');
console.log('🚀 ~ file: app.js:283 ~ index:', index);



//js lets you do this (having an array of different data types). don't do it.

let mixedUpArray = ['hello', 42, true, ['yo', 5],{}];
console.log('🚀 ~ file: app.js:283 ~ mixedUpArray:', mixedUpArray);
