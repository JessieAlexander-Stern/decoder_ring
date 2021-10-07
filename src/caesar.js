// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    /*if the shift value is not present, =0, less than -25 or greater than 25,
     should return false*/
    if (shift === 0 || shift > 25 || shift < -25) return false;
      if (!encode) {shift = -shift}
    //change input to lower case in order to ignore capital letters
      input = input.toLowerCase();
      let result = "";
    const alpha = [ 
    "a","b","c","d","e","f","g","h","i","j","k","l", "m",
    "n","o","p","q","r","s", "t","u","v","w","x","y","z",
    ];
    
    for (let letter of input) {
      //should ignore spaces and non-letter characters
      if(!alpha.includes(letter)) {
        result += letter;
      } else {
        const index = alpha.findIndex((char) => char === letter);
        //if letter is shifted so that it goes "off" the alphabet
        //it should wrap around to the front of the alphabet
        const codeIndex = (index + shift + 26)  % 26;
        const code = alpha[codeIndex];
        result += code;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
