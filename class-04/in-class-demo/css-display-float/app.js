'use strict';
console.log('app file is connected.');

//function declaration d
function functionName(){
  console.log('hello from our function');
}


//we need to invoke or call the function to run the code.
functionName();



// parameters are variables = allow us to give things in our code human readable values that we can use throughout the code.

//  parameters are place holders

function multiply(num1, num2){
  console.log('1st parameter: ', num1);
  console.log('2nd parameter: ', num2);
  console.log('results: ' + num1 * num2);
}

// these are our values / ARGUMENTS!!!
multiply(5,2);
multiply(2, 3);
multiply(45, 70);


// Function scope for how our variables work inside our functions.
// Can we Access these variables and where.
// With Global variables outside the function, we can reach them from anywhere.

let globalVariable = 'global';

function scoper(parameter){
  //lives inside the function and thats where we can use them.
  let localVar = 'I like my privacy';

  console.log('local variable', localVar);
  console.log('inside the function, we can see parameter: ', parameter);
  console.log('universal variable:', globalVariable);

  for(let i = 0; i < 3; i++){
    console.log('the value of i ' + i);
  }
}
//call the function with an actual value, refered to as an argument.
scoper('argument');

// console.log(' outside the function: ', parameter);
// console.log(' outside the function: ', localVar);
console.log('universal variable:', globalVariable);


//function declaration

// another function      (3)
function circlePropsOne(radius){
//            3.14   *   3    *   3
  let area =   Math.round(Math.PI * radius * radius);
  // we do the math
  let circumference =  Math.ceil(2 * Math.PI * radius) ;
  // create an array to hold the variables so we assign the array to a variable.
  let propsArray = [area, circumference];

  console.log('our Array: ', propsArray);
  //we dont always return stuff from functions, but we do sometimes.
  return propsArray;
}


//call the function()
let circle = circlePropsOne(3);
console.log('our return value: ', circle);



//function expression
//function expression, which is just another way to write a function.
//               anonymous function
let checkLogin = function(){
  let userID = 1234;
  if(userID){
    console.log('id: ', userID);
  } else {
    console.log('user not loggin1');
  }
};

checkLogin();


//IFFE
(function userLogin(){
  //code goes.
  let userID = 1234;
  if(userID){
    console.log('id: ', userID);
  } else {
    console.log('user not loggin1');
  }
})();




//switch statement 
//short cut if else     Ternary operator   What True False....

//switch statement - just see it.
alert('Welcome to 4-part space ship repair.');

let spaceHandle = prompt('What\'s your space handle?');
let spaceShipPart = prompt('What parts do you need?, Select parts 1 - 4. ');

switch(spaceShipPart){

case '1':
  confirm(spaceHandle + ' You need part 1.');
  break;

case '2':
  confirm(spaceHandle + ' You need part 2.');
  break;

case '3':
  confirm(spaceHandle + ' You need part 3.');
  break;

case '4':
  confirm(spaceHandle + ' You need part 4.');
  break;

default:
  alert('you gave us no matching inputs.');
}
alert('Bye for now ' + spaceHandle);
