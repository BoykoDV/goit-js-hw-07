//  'use strict';

console.log(`-------TASK-02-------`);

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsListRef = document.querySelector("#ingredients");

const list = ingredients.reduce(function(acc, ingredient) {
  const itemListRef = document.createElement("li");
  itemListRef.textContent = `${ingredient}`;
  acc.push(itemListRef);
  return acc;
}, []);

ingredientsListRef.append(...list);
