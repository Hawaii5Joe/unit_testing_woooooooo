

  function wordArray(word,letter) {
    let wordArray = word.split(letter).length;
    let result = wordArray - 1;
  

  if (result > 0) {
    return result

  } else {
  
    result =0
    return result
  }
}
  module.exports = wordArray

