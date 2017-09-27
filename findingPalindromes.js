(function() {

  function palindromeHunter(word){

    let wordArray = word.split("");
    let reversedWordArray = wordArray.reverse();
    let reversedWord = reversedWordArray.join("");

    return (word == reversedWord);

  }
  module.exports = palindromeHunter;
  
})()