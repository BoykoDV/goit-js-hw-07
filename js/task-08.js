//  'use strict';

console.log(`-------TASK-08-------`);

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const btnRendRef = document.querySelector(
  '#controls button[data-action="render"]'
);
const btnDestRef = document.querySelector(
  '#controls button[data-action="destroy"]'
);
const inpValueRef = document.querySelector("#controls input");
const box = document.querySelector("#boxes");

let delAmount;

// создаем елементы
btnRendRef.addEventListener("click", function(event) {
  // console.log(inpValueRef.value);
  const amount = inpValueRef.value;
  createBoxes(amount);
  delAmount = amount;
});
function createBoxes(amount) {
  const arrayOfTegs = [];
  let w = 30;
  let h = 30;
  for (let i = 1; i <= amount; i += 1) {
    const itemTeg = document.createElement("div");
    itemTeg.setAttribute("class", "createTeg");
    // случайный цвет фона
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    itemTeg.setAttribute(
      "style",
      `background-color: rgb(${r}, ${g}, ${b}); width: ${w}px; height: ${h}px`
    );
    // sizes box
    w += 10;
    h += 10;
    arrayOfTegs.push(itemTeg);
  }
  box.append(...arrayOfTegs);
}

// удаляем елементы
btnDestRef.addEventListener("click", function(event) {
  destroyBoxes(delAmount);
});
function destroyBoxes(delAmount) {
  // console.log(delAmount);
  for (let i = 1; i <= delAmount; i += 1) {
    const tgDv = document.querySelector(".createTeg");
    tgDv.remove();
  }
}
