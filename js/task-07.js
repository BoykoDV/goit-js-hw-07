//  'use strict';

const transaction = {
  DEPOSIT = 'deposit',  /* вклад */
  WITHDRAW = 'withdraw', /* снятие */
},

const account = {

  // 1 Текущий баланс счета
  balance: 0,

  // 2 История транзакций
  transactions: [],

  // 3 Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
      const Id= function () {
      return '_' + Math.random().toString(36).substr(2, 9);
      };
      return {amount, type, id};
  },

  //  4 Метод отвечающий за добавление суммы к балансу.
  //  Принимает сумму танзакции.
  //  Вызывает createTransaction для создания объекта транзакции
  //  после чего добавляет его в историю транзакций
  deposit(amount) {
  createTransaction(amount, DEPOSIT);
  return transactions.push(createTransaction(amount, DEPOSIT));
  },

  // 5  отвечающий за снятие суммы с баланса.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций.
  // Если amount больше чем текущий баланс, выводи сообщение
  // о том, что снятие такой суммы не возможно, недостаточно средств.
 withdraw(amount) {
  createTransaction(amount, WITHDRAW);
  return transactions.push(createTransaction(amount, WITHDRAW));
 },

  // 6 Метод возвращает текущий баланс
 getBalance(transactions) {
  for (const transaction of transactions) {
    if (transaction.type === DEPOSIT) {
      balance += transaction.amount;
    }
    if (transaction.type === WITHDRAW) {
      balance -= transaction.amount;
    }
  }
  return balance;
 },

  // 7  ищет и возвращает объект транзации по id
 getTransactionDetails(id) {
  for (const transaction of transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  // 8 Метод возвращает количество средств
  // определенного типа транзакции из всей истории транзакций
 getTransactionTotal(type) {
  let TransactionTotal;
  for (const transaction of transactions) {
    if (transaction.type === type) {
      TransactionTotal +=transaction.amount;
    }
  }
  return TransactionTotal;
 },

}

// console.log(`account.balance`, account.balance);
// console.log(`account.transactions`, account.transactions);
// console.log(`account.createTransaction()`, account.createTransaction());
// console.log(`account.deposit()`, account.deposit());
// console.log(`account.withdraw()`, account.withdraw());
// console.log(`account.getBalance()`, account.getBalance());
// console.log(`account.getTransactionDetails()`, getTransactionDetails());
// console.log(`account.getTransactionTotal()`, account.getTransactionTotal());