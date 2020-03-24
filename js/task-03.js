//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-03-------`);

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = function(users, gender) {
  return users.filter(function(user) {
    return user.gender === gender;
  });
};

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
