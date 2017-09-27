

var changeMachine = require('../changeMachine');
var chai = require('chai');
var expect = chai.expect;

describe('Change Machine', function() {
    context('changeMachine', function() {
      it('more change testing', function() {
        var change = changeMachine(99);
        expect(change).to.eql([4,1,1,4]);
      });
    });
  });


    