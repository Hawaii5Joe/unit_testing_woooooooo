

var hare = require('../cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Hare', function() {
    context('hare', function() {
      it('more hare testing', function() {
        var newPop = hare(200, .1, 5);
        expect(newPop).to.equal(300);
      });
    });
  });


    