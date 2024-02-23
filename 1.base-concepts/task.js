"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b * b - 4 * a * c;
  if (disc > 0) {
    arr.push((-b + Math.sqrt(disc)) / 2 / a);
    arr.push((-b - Math.sqrt(disc)) / 2 / a);
  } else if (disc == 0) {
    arr.push(-b / 2 / a);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  percent = parseFloat(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);

  
  //todo added ValidityState

  let endDate = new Date(date);
  let nowDate = new Date(Date.now);

  //todo fix NaN

  let countMonths = date;

  let percentPerMonth = percent / (12 * 100);
  
  let amountPerMonth = (amount - contribution) + (percentPerMonth + (percentPerMonth / ((Math.pow(1 + percentPerMonth)^countMonths) - 1)));
  let totalAmount = (amountPerMonth * countMonths).toFixed(2);
  console.log(totalAmount);
  return +totalAmount;
}