/* 'use strict'; */

/* Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:
проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, 
попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.
Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры
 и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
Напиши функцию addLogin(allLogins, login) которая:
Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
Вызовы функции для проверки работоспособности твоей реализации.
 */

const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
/* let login = [prompt("Введите логин")]; */

const addLogin = function(allLogins, login) {
  let isLoginValid = true;
  const lengthOfLogin = login.split("").length;
  if (!(lengthOfLogin > 3 && lengthOfLogin < 17)) {
    isLoginValid = false;
    return console.log(`Ошибка! Логин должен быть от 4 до 16 символов`);
  }

  let isLoginUnique = true;
  for (const allLogin of allLogins) {
    if (login === allLogin) {
      isLoginUnique = false;
      return console.log("Такой логин уже используется!");
      break;
    }
  }

  if (isLoginValid && isLoginUnique) {
    allLogins.push(login);
    return console.log("Логин успешно добавлен!");
  }
};
console.log(addLogin(allLogins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(allLogins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(allLogins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(allLogins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
