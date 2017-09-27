(function() {

  function hare(startingPopulation, birthRate, numberOfWeeks){
  
    let newPopulation = ((startingPopulation * birthRate)* numberOfWeeks)+startingPopulation
  
    return newPopulation;
  
  }
  

  module.exports = hare;

})()