class Person {
  constructor (dob){
    this.dob = new Date(dob)
  }
  age (){
    var ageDiff = new Date(Date.now() - this.dob);
    return Math.abs(ageDiff.getUTCFullYear() - 1970);
  }
}

Person.prototype.whatCanIDo = function() {
  var what = [];

  var age = this.age();

  if (age >= 18) {
    what.push('vote');
  }
  if (age >= 21) {
    what.push('drinkin');
  }
  if (age >= 25) {
    what.push('reppin');
  }
  if (age >= 30) {
    what.push('senate');
  }
  if (age >= 35) {
    what.push('prezzy');
  }
  return what;
};





// function Person(dob) {
//   this.dob = new Date(dob);
// }

// Person.prototype.age = function() {
//   var ageDiff = new Date(Date.now() - this.dob);
//   return Math.abs(ageDiff.getUTCFullYear() - 1970);
// };

module.exports = Person;
