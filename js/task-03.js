//  'use strict';

// Напиши функцию findBestEmployee(employees), которая принимает объект
//  и возвращает имя самого продуктивного (который выполнил больше всех задач).
//  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
// const findBestEmployee = function(employees) {
//   // твой код
// };
//  Вызовы функции для проверки работоспособности твоей реализации.
//  console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

/* first option */
// const findBestEmployee = function(employees) {
//   // const valuesArray = Object.values(employees);
//   // const max = Math.max(...valuesArray);
//   // console.log(max);
//   const keysArray = Object.keys(employees);
//   let maxValue = employees[keysArray[0]];
//   let mostProductive = keysArray[0];

//   for (let i = 0; i < keysArray.length; i += 1) {
//     if (maxValue < employees[keysArray[i]]) {
//       maxValue = employees[keysArray[i]];
//       mostProductive = keysArray[i];
//     }
//   }
//   return `${mostProductive} : ${maxValue}`;
// };

/* second option */
const findBestEmployee = function(employees) {
  let maxValue = 0;
  let BestEmployee;
  for (const key in employees) {
    if (maxValue < employees[key]) {
      maxValue = employees[key];
      BestEmployee = key;
    }
  }
  return `${BestEmployee} : ${maxValue}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
