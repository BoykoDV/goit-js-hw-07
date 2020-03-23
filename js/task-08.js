//  'use strict';

import users from "./users.js";
// console.table(users);

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = function(users, friendName) {
  return users
    .filter(function(user) {
      if (user.friends.includes(friendName)) {
        return user.name;
      }
    }, [])
    .map(function(user) {
      return user.name;
    });
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
