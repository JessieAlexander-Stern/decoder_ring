// Write your tests here!
const polybiusModule = require('../src/polybius.js');
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return an encoded string", () => {
        const actual = polybiusModule.polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
});


    it("should retun an encoded message with same spaces", () => {
    const actual = polybiusModule.polybius("Hello World");
    const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
});


    it("should return (i/j) for either", () => {
    const actual = polybiusModule.polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
});


    it("when decoding, the number of characters should be even, if not return false", () => {
    const actual = polybiusModule.polybius("123", false);
    expect(actual).to.be.false;
});