

var avg = require('../averageJoe');
var chai = require('chai');
var expect = chai.expect;

describe('Testing avg', function() {
    context('more avg', function() {
      it('averaging someshit', function() {
        var averageMath = avg(3,3,3);
        expect(averageMath).to.equal(3);
      });
    });
  });
