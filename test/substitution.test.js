// Write your tests here!
const substitutionModule = require('../src/substitution.js');
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return an encoded string", () => {
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.eql(expected);
    });
});

    it("should ignore capital letters", () => {
        const actual = substitutionModule.substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.eql(expected);
    });

    it("should encode messages with spaces", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.eql(expected);
    });

    it("should return decoded string when encode is false", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.eql(expected);
    });

    it("should return false when aplhabet is less than 26 ", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "uhbijnokmpl", false);
        expect(actual).to.be.false;
    });

    it("should return false when aplhabet is more than 26 ", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "abcdefghijklmnopqrstuvwxyz2", false);
        expect(actual).to.be.false;
    });

    it("should return false when aplhabet has duplicate letters ", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "abcdefghijklmnopqrstuvwxyzz", false);
        expect(actual).to.be.false;
    });