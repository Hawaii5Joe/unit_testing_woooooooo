(function(){
  
      function containsVowel(word){
       
        for (vowel of 'aeiou') {
          if (word.indexOf(vowel) !== -1) return true
        }

        return false

        // const vowelPattern = /[aeiou]/i
        // return vowelPattern.test(word)

      }

      console.log(containsVowel('lccs'))
      module.exports = containsVowel
  
  })()