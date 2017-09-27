

var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;

describe('Testing secondLargest', function() {
    context('second largest', function() {
      it('secondLargest', function() {
        var tallest = secondLargest([1,2,3]);
        expect(tallest).to.equal(2);
      });
    });
  });


    