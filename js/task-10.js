//  'use strict';

import users from "./users.js";
// console.table(users);

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся
//  умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = function(users) {
  return users
    .reduce(function(skills, user) {
      skills.push(...user.skills);
      return skills;
    }, [])

    .reduce(function(uniqueSkills, skill) {
      if (!uniqueSkills.hasOwnProperty(skill)) {
        [uniqueSkills].push(skill);
      }
      return uniqueSkills;
    });
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
