//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-08-------`);

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = function(users, friendName) {
  // return users
  //   .filter(function(user) {
  //     if (user.friends.includes(friendName)) {
  //       return user.name;
  //     }
  //   }, [])
  //   .map(function(user) {
  //     return user.name;
  //   });

  return users
    .filter(function(user) {
      return user.friends.includes(friendName);
    }, [])
    .map(function(user) {
      return user.name;
    });
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
