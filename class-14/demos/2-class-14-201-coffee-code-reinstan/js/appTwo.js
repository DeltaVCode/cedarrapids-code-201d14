'use strict';
console.log('app two connected.');
const pizzaButton = document.getElementById('pizzaButton');

const handlePizzaButtonClick = function(){
  const pizzasFromLS = JSON.parse(localStorage.pizzas);

  for (let i = 0; i < pizzasFromLS.length; i++){
    let newPizza = new Pizza(pizzasFromLS[i].pizzaType);
    newPizza.render();
  }
  console.log('allPizzas array after reinstantiating through our Pizza constructor', allPizzas);
};

pizzaButton.addEventListener('click', handlePizzaButtonClick);
