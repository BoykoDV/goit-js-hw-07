/* 'use strict'; */
/* 
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert 
сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

const costOfDeliveryChina = 100;
const costOfDeliveryChile = 250;
const costOfDeliveryAustralia = 170;
const costOfDeliveryIndia = 80;
const costOfDeliveryJamaica = 120;
let priceOfDelivery;

let userСountry = prompt("Укажите Вашу страну для оформления доставки");
if (userСountry !== null) {
  switch (userСountry.toLowerCase()) {
    case "china":
      priceOfDelivery = costOfDeliveryChina;
      console.log(
        `Доставка в ${userСountry} будет стоить ${priceOfDelivery} кредитов.`
      );
      break;

    case "chile":
      priceOfDelivery = costOfDeliveryChile;
      console.log(
        `Доставка в ${userСountry} будет стоить ${priceOfDelivery} кредитов.`
      );
      break;

    case "australia":
      priceOfDelivery = costOfDeliveryAustralia;
      console.log(
        `Доставка в ${userСountry} будет стоить ${priceOfDelivery} кредитов.`
      );
      break;

    case "india":
      priceOfDelivery = costOfDeliveryIndia;
      console.log(
        `Доставка в ${userСountry} будет стоить ${priceOfDelivery} кредитов.`
      );
      break;

    case "jamaica":
      priceOfDelivery = costOfDeliveryJamaica;
      console.log(
        `Доставка в ${userСountry} будет стоить ${priceOfDelivery} кредитов.`
      );
      break;

    default:
      console.log(`В вашей стране доставка не доступна!`);
  }
} else {
  console.log(`Отменено пользователем.`);
}
