

var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;

describe('vowels and stuff', function() {
    context('vowels got vowels', function() {
      it(' vowels n more vowels', function() {
        var vowel = containsVowel('alpha');
        expect(vowel).to.equal(true);
      });
    });
  });


    