//  'use strict';

const transaction = {
  DEPOSIT: "deposit" /* вклад */,
  WITHDRAW: "withdraw" /* снятие */
};
console.log(`transaction :`, transaction.DEPOSIT);
console.log(`transaction :`, transaction.WITHDRAW);

const Id = function() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
const testId = Id();
console.log(`Id :`, Id());
console.log(`---------------`);
// --------------------------------------

const account = {
  // 1 Текущий баланс счета
  balance: 0,

  // 2 История транзакций
  transactions: [],

  // 3 Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    const id = Id();
    return {
      amount,
      type,
      id
    };
  },

  //  4 Метод отвечающий за добавление суммы к балансу.
  //  Принимает сумму танзакции.
  //  Вызывает createTransaction для создания объекта транзакции
  //  после чего добавляет его в историю транзакций
  deposit(amount) {
    const deposOperation = account.createTransaction(
      amount,
      transaction.DEPOSIT
    );
    account.transactions.push(deposOperation);
    account.balance += amount;
  },

  // 5  отвечающий за снятие суммы с баланса.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций.
  // Если amount больше чем текущий баланс, выводи сообщение
  // о том, что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {
    let withdrawOperation = {};
    if (account.balance > amount) {
      withdrawOperation = account.createTransaction(
        amount,
        transaction.WITHDRAW
      );
      account.transactions.push(withdrawOperation);
      account.balance -= amount;
    } else {
      alert(`снятие суммы ${amount} не возможно, недостаточно средств`);
    }
  },

  // 6 Метод возвращает текущий баланс
  getBalance(transactions) {
    return this.balance;
  },

  // 7  ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
      return `такой танзакции не найдено`;
    }
  },

  // 8 Метод возвращает количество средств
  // определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let TransactionTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        TransactionTotal += transaction.amount;
      }
    }
    return TransactionTotal;
  }
};

// 1
console.log(`1 ---------------`);
console.log(`balance :`, account.balance);

// 2
console.log(`2 ---------------`);
console.log(`transactions :`, account.transactions);

// 3
console.log(`3 ---------------`);
console.log(
  `createTransaction :`,
  account.createTransaction(10, transaction.DEPOSIT)
);

// 4
console.log(`4 ---------------`);
account.deposit(10);
console.log(`balance :`, account.balance);
console.log(`transactionsOfDeposit :`, account.transactions);

// 5
console.log(`5 ---------------`);
account.withdraw(4);
console.log(`balance :`, account.balance);
console.log(`transactionsOfWithdraw :`, account.transactions);

// 6
console.log(`6 ---------------`);
console.log(`getBalance :`, account.getBalance(account.transactions));

// 7
console.log(`7 ---------------`);
console.log(`getBalance :`, account.getTransactionDetails(testId));

// 8
console.log(`8 ---------------`);
console.log(
  `DEPOSIT_Total :`,
  account.getTransactionTotal(transaction.DEPOSIT)
);
