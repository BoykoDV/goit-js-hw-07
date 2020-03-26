//  'use strict';

console.log(`-------TASK-01-------`);

// Напиши скрипт, который выполнит следующие операции.

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const listRef = document.querySelector("#categories");
const totalListItem = listRef.children.length;
console.log(`В списке ${listRef.children.length} категории.`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriRef = document.querySelectorAll(".item");
// console.log(categori);

categoriRef.forEach(element => {
  const title = element.firstElementChild.textContent;
  console.log(`Категория: ${title}`);

  const names = element.children[1].children.length;
  console.log(`Количество элементов: ${names}`);
});
