'use strict';
console.log('js connected');



// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like. interests
// an image
// is good with kids
// is good with dogs
// is good with other animals

let petOne = {
  petName: 'Fluffy',
  breed: 'tabby',
  imageName: 'diabloBlanco',
  interests: ['Sun light', 'Mouse toys', 'Red Dots'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  setAge: function(){
    this.age = randomAge(3,12) + ' Months old.';
  }
};
let petTwo = {
  petName: 'Tiger',
  breed: 'Tiger',
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge:   function() {
    this.age = randomAge(3, 12) + ' Months old.';
  }
//petTwo.age
};


//helper function
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


petOne.setAge();
petTwo.setAge();

// console.log(petOne);
// console.log('🚀 ~ file: app.js:45 ~ petTwo:', petTwo);


//Create DOM elements and render it in html

//create a new parent element of the child element that we will create to render the pet article in the html

let parentElement = document.getElementById('kittenProfiles');
console.log('🚀 ~ file: app.js:64 ~ parentElement:', parentElement);


//create article
let article = document.createElement('article');
console.log('🚀 ~ file: app.js:69 ~ article:', article);
parentElement.appendChild(article);



//create h2
let h2 = document.createElement('h2');
console.log('🚀 ~ file: app.js:73 ~ h2:', h2);
h2.textContent = petOne.petName;
article.appendChild(h2);

// create p
let petPara = document.createElement('p');
console.log('🚀 ~ file: app.js:78 ~ petPara:', petPara);
petPara.textContent = 'Cats are cool, and pet one is ' + petOne.age;
article.appendChild(petPara);

// create ul
let petUl = document.createElement('ul');
article.appendChild(petUl);


for(let i = 0; i < petOne.interests.length; i++){
  let petLi = document.createElement('li');
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);
}


//create img
let petOneImage = document.createElement('img');
/* <img src="images/diabloBlanco.jpeg" */

petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petOneImage.setAttribute('alt', 'Adopt our pet kittens');
article.appendChild(petOneImage);
