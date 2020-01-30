// 'use strict';

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   // твой код
// };
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  let ObjectOfProducts = {};
  const arrayOfPropertyValues = [];

  for (let i = 0; i < arr.length; i += 1) {
    ObjectOfProducts = arr[i];
    const keysObject = Object.keys(ObjectOfProducts);

    for (let i = 0; i < keysObject.length; i += 1) {
      if (prop === keysObject[i]) {
        // console.log(keysObject[i]);
        // console.log(ObjectOfProducts[keysObject[i]]);
        arrayOfPropertyValues.push(ObjectOfProducts[keysObject[i]]);
        break;
      }
    }
  }
  return `${arrayOfPropertyValues}`;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
