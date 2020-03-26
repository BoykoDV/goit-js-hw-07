//  'use strict';

console.log(`-------TASK-04-------`);

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnMinusRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const btnPlusRef = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector("#value");

let counterValue = 0;
// console.log(counterValue);
value.textContent = counterValue;

btnPlusRef.addEventListener("click", event => {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
});

btnMinusRef.addEventListener("click", event => {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
});
