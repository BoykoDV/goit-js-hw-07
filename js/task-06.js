//  'use strict';

console.log(`-------TASK-06-------`);

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", chekInputLenght);

const needLenght = inputRef.getAttribute("data-length");
// console.log(needLenght);
inputRef.className = "valInp";

function chekInputLenght(event) {
  const ipt = [event.target.value];
  // console.log(typeof ipt[0].length);
  // console.log(typeof needLenght);
  if (ipt[0].length === Number(needLenght)) {
    // console.log("ok!");
    inputRef.classList.add("inpValid");
    inputRef.classList.remove("inpInvalid");
  } else {
    // console.log(":( Try again!");
    inputRef.classList.add("inpInvalid");
    inputRef.classList.remove("inpValid");
  }
}
