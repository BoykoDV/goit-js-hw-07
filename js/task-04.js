//  'use strict';

import users from "./users.js";
// console.table(users);

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = function(users) {
  return users.filter(function(user) {
    return !user.isActive;
  });
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
