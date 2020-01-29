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
let input = prompt("Введите логин");

const addLogin = function(allLogins, login) {

  const isLoginValid = function(login) {
    let result = true;
    if (4 > login.split("").length && login.split("").length > 16) {
      result = false;
      console.log(`Ошибка! Логин должен быть от 4 до 16 символов`);
      break;
    }
    return result;
  };

  const isLoginUnique = function(allLogins, login) {
    let result = true;
    for (const allLogin of allLogins) {
      if (login === allLogin) {
        result = false;
        console.log("Такой логин уже используется!");
        break;
      }
      return result;
    }
  };

  isLoginValid(login);
  isLoginUnique(allLogins, login);
  
  if (isLoginValid && isLoginUnique) {

    const addLogin = function(allLogins, login) {
      allLogins.push(login);
      console.log("Логин успешно добавлен!");
    };
    addLogin(allLogins, login);
  };
};
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'