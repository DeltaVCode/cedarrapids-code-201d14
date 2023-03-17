'use strict';
console.log('app file is connected.');



/**
 * @param  {}
 * @param  Int
 * @author Coder Person
 * @Date
 * @returns
 *
 */


function lotteryNumberPicker(){

  //create an empty array to hold some numbers

  let lotteryArray = [];

  //set the first number in our index at position 0 to be the number 10
  lotteryArray[0] = 10;

  //lets add 5 random numbers to our array up to 100
  // lotteryArray[1] = 78;
  // lotteryArray[2] = 48;
  // lotteryArray[3] = 18;
  // lotteryArray[4] = 58;
  // lotteryArray[5] = 98;
  for(let i = 0; i < 15; i++ ){
    lotteryArray[i] = Math.ceil(Math.random() * 99);
  }
  //log our results
  console.log(lotteryArray);
  //return the numbers
  return lotteryArray;
}


let numbers = lotteryNumberPicker();

console.log('!!!!!!!!',numbers);




// function lotteryNumberPicker(){
//   let lotteryArray = [];
//   lotteryArray[0] = 10;
//   for(let i = 0; i < 5; i++ ){
//     lotteryArray[i] = Math.ceil( Math.random() * 99 );
//   }
//   return lotteryArray;
// }




let quantity = prompt('How many numbers would you like?');
let lotteryMax = prompt('What is the max amount per number?');
/**
 * lottery number
 * @param {string} quantity
 * @param {string} lotteryMax
 * @author its craig
 * @returns good stuff. and an Array of lottery numbers
 */
function lotteryNumbers(quantity, lotteryMax){

  let lotteryArray = [];

  for(let i = 0; i < quantity; i++){
    lotteryArray[i] = Math.ceil(Math.random() * lotteryMax);
  }
  return lotteryArray;

}



//addd this




let results = lotteryNumbers(quantity, lotteryMax);


alert(results);
console.table(results);
