// console.log(Math);

// Math.random();

// const numbers = [1, 3, 4];

// const myMath = {
//   PI: 3.14,
// };

// console.log(myMath.PI);

// const result = typeof numbers; //
// const result = typeof null; //
// const result = null; //
// const result = Array.isArray(numbers); //

// console.log('global', this);

const bankAccount1 = {
  name: '',
  balance: 0,
  history: [],

  assingName: function (accountName) {
    this.name = accountName;
  },

  showBalance: function () {
    // console.log(this.balance);
    let result = `Balance: ${this.balance}`;

    console.log(result);
  },

  addBalance: function (n) {
    //Validation
    if (n <= 0) {
      alert('Invalid n');
      return;
    }

    this.balance += n;

    const transaction = `+${n}`;

    this.history.unshift(transaction);

    this.showBalance();
  },

  removeBalance: function (n) {
    //Validation
    if (n > this.balance) {
      alert('Invalid n');
      return;
    }

    this.balance -= n;

    const transaction = `-${n}`;

    this.history.unshift(transaction);

    this.showBalance();
  },
};

bankAccount1.assingName('ZaHair');

bankAccount1.addBalance(1000);

bankAccount1.removeBalance(20);

bankAccount1.removeBalance(10);
bankAccount1.removeBalance(5);

bankAccount1.addBalance(100);

console.log(bankAccount1);
