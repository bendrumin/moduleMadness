var randomNumber = require('./modules/randomNumber.js');
var convertToDollars = require('./modules/convertToDollars.js');

function total (randomNumber) {
  return convertToDollars(randomNumber);
}

function accountBalance (total){
  console.log('Account balance: ' + total);
}

module.exports = {
  total: total,
  accountBalance: accountBalance,
};
