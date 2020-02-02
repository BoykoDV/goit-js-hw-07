//  'use strict';

const transaction = {
  DEPOSIT :'deposit',  /* вклад */
  WITHDRAW : 'withdraw', /* снятие */
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
      return {amount, type, id : Id};
  },

  //  4 Метод отвечающий за добавление суммы к балансу.
  //  Принимает сумму танзакции.
  //  Вызывает createTransaction для создания объекта транзакции
  //  после чего добавляет его в историю транзакций
  deposit(amount) {
  createTransaction(amount, transaction.DEPOSIT);
  transactions.push(createTransaction(amount, transaction.DEPOSIT));
  balance += transaction.amount;
  },

  // 5  отвечающий за снятие суммы с баланса.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций.
  // Если amount больше чем текущий баланс, выводи сообщение
  // о том, что снятие такой суммы не возможно, недостаточно средств.
 withdraw(amount) {
  createTransaction(amount, transaction.WITHDRAW);
  if (balance > transaction.WITHDRAW) {
  transactions.push(createTransaction(amount, transaction.WITHDRAW));
  balance -= transaction.amount;
  }
  else {
    alert(`снятие ${transaction.WITHDRAW} не возможно, недостаточно средств`);
  }
 },

  // 6 Метод возвращает текущий баланс
 getBalance(transactions) {
  return balance;
},

  // 7  ищет и возвращает объект транзации по id
 getTransactionDetails(id) {
  for (const transaction of transactions) {
      if (transaction.id === Id) {
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