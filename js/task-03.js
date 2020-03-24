//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-03-------`);

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = function(users, gender) {
  // const usersGender = users.filter(function(user) {
  //   return user.gender === gender;
  // });

  // const nameUsersGender = usersGender.reduce(function(names = [], user) {
  //   names.push(user.name);
  //   // console.log(user.name);
  //   return names;
  // }, []);

  // return nameUsersGender;

  return users
    .filter(function(user) {
      return user.gender === gender;
    })
    .reduce(function(names = [], user) {
      names.push(user.name);
      return names;
    }, []);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
