//  'use strict';

import users from "./users.js";
console.table(users);
console.log(`-------TASK-01-------`);

// Получить массив имен всех пользователей (поле name).

const getUserNames = users.map(function(user) {
  return user.name;
});

console.log(getUserNames); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
