//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-09-------`);

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = function(users) {
  return users
    .sort(function(prevUser, nextUser) {
      // по возростанию
      return prevUser.friends.length - nextUser.friends.length;
    })
    .map(function(user) {
      return user.name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
