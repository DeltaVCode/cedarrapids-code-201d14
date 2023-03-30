'use strict';
console.log('app connected.');
let allPizzas = [];
let pizzaForm = document.getElementById('pizzaForm');
let pizzaList = document.getElementById('pizzaList');



//constructor function takes in a pizza type and has a render function thats creates an li and updates the list item with the pizza type and appends to the page and push the pizza type and the render to the all pizzas array. 
function Pizza(pizzaType){
  this.pizzaType = pizzaType;
  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.pizzaType;
    pizzaList.appendChild(listItem);
  },
  allPizzas.push(this);
}


//handles pizza submit from the form 
function handlePizzaSubmit(event){
  event.preventDefault();
  const newPizza = new Pizza(event.target.pizzaInput.value);
  pizzaForm.reset();
  newPizza.render();
  localStorage.pizzas = JSON.stringify(allPizzas);
  console.log(localStorage.pizzas);
}




//one
  // const arrayString = JSON.stringify(allPizzas);
  // console.log(arrayString);
  // localStorage.setItem('pizza', arrayString);
//two
  //localStorage.setItem('pizza', JSON.stringify(allPizzas));
  //three