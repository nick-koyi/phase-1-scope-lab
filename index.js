// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "Grace";

function upperCaseCustomerName() {
  customerName = "BOB";
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Brian";
  return leastFavoriteCustomer;
}
