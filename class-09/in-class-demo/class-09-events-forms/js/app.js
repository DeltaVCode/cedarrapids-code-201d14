'use strict';
console.log('js connected');

let form = document.getElementById('new-pet-form');
// console.log("🚀 ~ file: app.js:5 ~ form:", form)


let petArray = [];

function Pet(petName,breed,imageName,interests,isGoodWithKids,isGoodWithDogs,isGoodWithAnimals){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithAnimals = isGoodWithAnimals;
  petArray.push(this);
}

let petOne = new Pet('Tom', 'Tiger', 'diabloBlanco',['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);
let petTwo = new Pet('Garfield','LazyCat', 'jumper',['Cat nip', 'strings', 'food'],true, false,true);
let petThree = new Pet('Sylvester','sadCat', 'tommyBob',['birds', 'wands', 'naps'],true, false,true);

Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};

Pet.prototype.getInterests = function(){
  let randomeArrayIndex = Math.floor(Math.random() * this.interests.length);
  return randomeArrayIndex;
};
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


Pet.prototype.render = function(){
  let parentElement = document.getElementById('kittenProfiles');

  let article = document.createElement('article');
  parentElement.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.petName;
  article.appendChild(h2);

  let petPara = document.createElement('p');
  petPara.textContent = 'Cats are cool, and pet one is ' + this.age;
  article.appendChild(petPara);

  let petUl = document.createElement('ul');
  article.appendChild(petUl);

  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    petLi.textContent = this.interests[i];
    petUl.appendChild(petLi);
  }
  let petImage = document.createElement('img');
  petImage.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  petImage.setAttribute('alt', 'Adopt our pet kittens');
  article.appendChild(petImage);


  let petTable = document.getElementById('adoptPets-table');

  let petRow = document.createElement('tr');

  let headNameCell = document.createElement('th');
  headNameCell.textContent = this.petName;
  petRow.appendChild(headNameCell);

  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  petTable.appendChild(petRow);
};












petOne.getInterests();
petTwo.getInterests();
petThree.getInterests();
petOne.setAge();
petTwo.setAge();
petThree.setAge();


// let allPets = [petOne, petTwo, petThree];

for(let i = 0; i < petArray.length; i++){
  petArray[i].render();
}



function handleFormSubmit(event){
  event.preventDefault();
  console.log('I submittteeedddd a form !!!!');
  event.stopPropagation();
  //get the name
  let petName = event.target.name.value;
  let breedInput = document.getElementById('breed');
  //bracket notation
  let breedValue = breedInput['value'];
  let imageName = document.getElementById('imageName');
  //dot notation
  let imageValue = imageName.value;
  let interestsInput = document.getElementById('interests');
  let interestValues  = interestsInput.value;


  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  console.log({isGoodWithKids,isGoodWithCats, isGoodWithDogs});

  let newPet = new Pet(petName, breedValue, imageValue,[interestValues],isGoodWithKids, isGoodWithDogs, isGoodWithCats);
  newPet.getInterests();
  newPet.setAge();
  console.log(newPet);
  newPet.render();
  form.reset();
}






//call our render function to see our objects and pets.

//Set up the event listerners to listen to the submit event.
//1. which element do we need? form
//2.which event are we listening to? submit.
//3.what code should I run?   run a function.


// two args
form.addEventListener('submit', handleFormSubmit);













