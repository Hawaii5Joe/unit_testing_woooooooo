

var wordArray = require('../hangmanLite');
var chai = require('chai');
var expect = chai.expect;

describe('Testing wordArray', function() {
    context('hangman', function() {
      it('more hangman testing', function() {
        var hangman = wordArray("car","c");
        expect(hangman).to.equal(1);
      });
    });
  });


    