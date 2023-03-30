'use strict';
console.log('app one connected.');

//this file will checkout local storage, and we listen for out pizza form and run the handle pizza submit on app.js
if(localStorage.pizzas){

  const pizzaFromLS = JSON.parse(localStorage.pizzas);

  for(let i = 0; i < pizzaFromLS.length; i++){
    new Pizza(pizzaFromLS[i].pizzaType);
    allPizzas[i].render();
  }
}

pizzaForm.addEventListener('submit', handlePizzaSubmit);
