'use strict';
console.log('pizza js connected.');

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two pizzas


  App Flow:
  - Randomly put 2 pizzas on the screen
    - Random number generator
    - a function to display pizzas
  - A user clicks on a pizza
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 5 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which pizza was clicked on
        - update click images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 pizzas, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them// in demo today we are grab DOM elements differently.
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'Chicago Pizza',
    clicks: 0,
    timesShown: 0,
    url : 'chicagoPizza.jpeg'
  };

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked pizzas from being picked
      - STRETCH pick all pizzas evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or ul list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/
//global variables
let pizzaContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
console.log(pizzaContainer, resultButton, image1, image2);
//track out click counts for the rounds
let clicks = 0;
let maxClicks = 10;
Pizza.allPizzasArray = [];



//create a constructor function to build our image objects.
function Pizza(name, src){
  this.name = name;
  this.imageSrc = src;
  //amount shown
  this.views = 0;
  //tracking individual image clicks
  this.clickedOn = 0;
  //   As we create new instances of our pizza objects we can push those into array using the 'this' and the .push()
  // built in array method
  Pizza.allPizzasArray.push(this);
}
console.log('Pizzas? ',Pizza.allPizzasArray);







//get a random number
function getRandomNumber(){
  return Math.floor(Math.random() * Pizza.allPizzasArray.length);
}

//render our images
function renderPizzas(){
  let pizza1 = getRandomNumber();
  let pizza2 = getRandomNumber();
  console.log( typeof pizza1, pizza2);

  //lets make sure that the two are not the same
  while(pizza1 === pizza2){
    pizza2 = getRandomNumber();
  }
  //capture some data about images so we can show them and track them
  //update the 'src' for the new images.
  image1.src = Pizza.allPizzasArray[pizza1].imageSrc;
  image2.src = Pizza.allPizzasArray[pizza2].imageSrc;
  //get random number use it to update the alt attribute for image that is about to be shown based the name from name of the image object the pizza name.
  image1.alt = Pizza.allPizzasArray[pizza1].name;
  image2.alt = Pizza.allPizzasArray[pizza2].name;
  //track all the image views
  console.log(image1, image2);

  Pizza.allPizzasArray[pizza1].views++;
  //go to my array at position and views = views + 1
  Pizza.allPizzasArray[pizza2].views++;
}




//handle the event listener for when an image is clicked
function handlePizzaClick(event){
  console.log(event.target);
  //make sure they click on an image
  if(event.target === pizzaContainer){
    alert('Please click on an image!!!!');
  }
  clicks++;
  //count the individual image clickedOn.
  let clickedOnPizza = event.target.alt;
  console.log('🚀 ~ file: app.js:139 ~ handlePizzaClick ~ clickedOnPizza:', clickedOnPizza);
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    if(clickedOnPizza === Pizza.allPizzasArray[i].name){
      Pizza.allPizzasArray[i].clickedOn++;
      break;
    }
  }
  //do we have max attempts yet
  if(clicks === maxClicks){
    //stop clicking on images to vote on
    pizzaContainer.removeEventListener('click', handlePizzaClick);
    //add listener to the results button
    resultButton.addEventListener('click', renderResults);
    pizzaContainer.className = 'no-voting';
  } else {
    //if we are not done voting lets rerun another round of images.
    console.log('CCCCCCCC',clicks);
    renderPizzas();
  }
}//closes the handle clicks function

function renderResults(){
  let ul = document.querySelector('ul');
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    let li = document.createElement('li');
    li.textContent = `${Pizza.allPizzasArray[i].name} had ${Pizza.allPizzasArray[i].views} views and was clicked ${Pizza.allPizzasArray[i].clickedOn} times.`;
    ul.appendChild(li);
  }
}

//render the results in an unordered list





















new Pizza('Brick Oven Pizza', 'assets/images/brickOvenPizza.jpg');
new Pizza('Calzone', 'assets/images/calzonePizza.jpg');
new Pizza('Chicago Deep Dish', 'assets/images/chicagoPizza.jpg');
new Pizza('Chicago Pizza and Oven Grinder', 'assets/images/cpoGinderPizza.jpg');
new Pizza('Detroit Style', 'assets/images/detroitPizza.jpg');
new Pizza('Papa Vito\'s Thin', 'assets/images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'assets/images/newYorkPizza.jpg');
new Pizza('Shot Gun Dans Pizza', 'assets/images/sgDansHtossedMeatLovPizza.jpg');


renderPizzas();


//add listener
pizzaContainer.addEventListener('click', handlePizzaClick);
