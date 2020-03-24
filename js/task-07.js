//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-07-------`);

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = function(users) {
  return users.reduce(function(accumulator, user) {
    return accumulator + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
