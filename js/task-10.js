//  'use strict';

import users from "./users.js";
// console.table(users);
console.log(`-------TASK-10-------`);

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся
//  умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = function(users) {
  // const allSkills = users.reduce(function(skills, user) {
  //   skills.push(...user.skills);
  //   return skills;
  // }, []);
  // // console.log(`allSkills:`, allSkills);

  // const uniqueSkills = allSkills.reduce(function(unqSkills = [], skill) {
  //   if (!unqSkills.includes(skill)) {
  //     unqSkills.push(skill);
  //   }
  //   return unqSkills;
  // }, []);
  // // console.log(`uniqueSkills:`, uniqueSkills);

  // return uniqueSkills;

  return users
    .reduce(function(skills, user) {
      skills.push(...user.skills);
      return skills;
    }, [])
    .reduce(function(unqSkills = [], skill) {
      if (!unqSkills.includes(skill)) {
        unqSkills.push(skill);
      }
      return unqSkills;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
