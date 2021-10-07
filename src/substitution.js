// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const alpha = "abcdefghijklmnopqrstuvwxyz";
   let result = "";
   //should ignore upper case
    input = input.toLowerCase();
/*The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.*/
   if (!alphabet || alphabet.length != 26 || /([a-z]).*?\1/g.test(alphabet))
      return false;

    for (let letter of input) {
      if (letter === " ") {
        result += letter;
      } else {
        if (encode === false) {
          let actualIndex = alphabet.indexOf(letter);
          result += alpha[actualIndex];
        } else {
          let letterIndex = alpha.indexOf(letter);
          result += alphabet[letterIndex];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };