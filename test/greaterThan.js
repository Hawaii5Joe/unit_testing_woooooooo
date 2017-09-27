

var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('Testing num2', function() {
    context('more num2', function() {
      it('num2>num1', function() {
        var potato  = greaterThan(2,4);
        expect(potato).to.equal(true);
      });
    });
  });
