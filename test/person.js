var Person = require('../person');
var chai = require('chai');
var expect = chai.expect;

describe('Person', function() {
  describe('#age()', function() {
    context('when dob is 10/20/1992', function() {
      it('returns 24 for persons age', function() {
        var person = new Person('10/20/1992');
        var age = person.age();
        expect(age).to.equal(24);
      });
    });


    describe('#whatCanIDo()', function() {
        context('when age is 21 or more', function() {
          it('returns drinkin', function() {
            var person = new Person('1/1/1992');
            var what = person.whatCanIDo();
            expect(what).to.include('drinkin');
          });
        });
      });

      describe('#whatCanIDo()', function() {
        context('when age is 25 or more', function() {
          it('returns reppin', function() {
            var person = new Person('1/1/1989');
            var what = person.whatCanIDo();
            expect(what).to.include('reppin');
          });
        });
      });

      describe('#whatCanIDo()', function() {
        context('when age is 30 or more', function() {
          it('returns senate', function() {
            var person = new Person('1/1/1984');
            var what = person.whatCanIDo();
            expect(what).to.include('senate');
          });
        });
      });

      describe('#whatCanIDo()', function() {
        context('when age is 35 or more', function() {
          it('returns prezzy', function() {
            var person = new Person('1/1/1979');
            var what = person.whatCanIDo();
            expect(what).to.include('prezzy');
          });
        });
      });


    context('when dob is 09/03/1986', function() {
      it('returns 31 for persons age', function() {
        var person = new Person('09/03/1986');
        var age = person.age();
        expect(age).to.equal(31);
      });
    });
  });
});

