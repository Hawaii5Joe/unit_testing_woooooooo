

var findingPalindromes = require('../findingPalindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Finding Palindromes', function() {
    context('findingPalindromes', function() {
      it('more palindromes ho', function() {
        var word = findingPalindromes("car");
        expect(word).to.equal(true);
      });
    });
  });


    