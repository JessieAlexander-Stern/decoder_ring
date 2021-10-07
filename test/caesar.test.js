// Write your tests here!
const caesarModule = require('../src/caesar.js');
const expect = require("chai").expect;

describe("check if shift is 0", () => {
    it("should return false if the shift amount is 0", () => {
      const actual = caesarModule.caesar("input", 0);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });

    it("should return false if the shift amount is above 25", () => {
      const actual = caesarModule.caesar("input", 26);
      const expected = false;
      expect(actual).to.equal(expected);
    });


    it("should return false if the shift amount is below -25", () => {
      const actual = caesarModule.caesar("input", -26);
      const expected = false;
      expect(actual).to.equal(expected);
    });


    it("should return a if shift from 1 is z", () => {
        const actual = caesarModule.caesar("z", 1);
        const expected = 'a';
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters and maintain spacing", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
    });
