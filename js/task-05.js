//  'use strict';

console.log(`-------TASK-05-------`);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
const value = document.querySelector("#value");

let spanValue = "незнакомец";
spanRef.textContent = spanValue;

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  // console.dir(event.target.value === "");
  if (event.target.value === "") {
    spanValue = "незнакомец";
    spanRef.textContent = spanValue;
  } else {
    spanValue = event.target.value;
    spanRef.textContent = spanValue;
  }
}
