(function() {
  
  function changeMachine(amount){

    let twenties = Math.floor(amount/20);
    let twentyamount = amount % 20

    let tens = Math.floor(twentyamount/10);
    let tenamount = twentyamount % 10

    let fives = Math.floor(tenamount/5);
    let ones = tenamount % 5

    let change = [twenties, tens, fives, ones]

    return change;
  }

  module.exports = changeMachine;
})()