

var sum = require('../addition');
var chai = require('chai');
var expect = chai.expect;

describe('Testing addition', function() {
    context('more addition', function() {
      it('added two nums', function() {
        var add = sum(1,2);
        expect(add).to.equal(3);
      });
    });
  });
