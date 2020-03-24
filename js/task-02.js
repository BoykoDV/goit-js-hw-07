//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-02-------`);

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = function(users, color) {
  return users.filter(function(user) {
    return user.eyeColor === color;
  });
};

console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
