//  'use strict';

// Напиши скрипт, который, для объекта user, последовательно:
// 1. добавляет поле mood со значением 'happy'
// 2. заменяет значение hobby на 'skydiving'
// 3. заменяет значение premium на false
// 4. выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
console.log(user);

user.hobby = "skydiving";
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}
