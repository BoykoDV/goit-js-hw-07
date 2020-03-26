//  'use strict';

console.log(`-------TASK-07-------`);

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
//  изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
}

const rangeRef = document.querySelector("#font-size-control");
const spn = document.querySelector("#text");

rangeRef.setAttribute("min", "10");
rangeRef.setAttribute("max", "100");
rangeRef.setAttribute("step", "1");

rangeRef.addEventListener("input", function(event) {
  //   console.log(rangeRef.value);
  spn.setAttribute("style", `font-size: ${rangeRef.value}px`);
});
