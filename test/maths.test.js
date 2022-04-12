// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum,div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    }),
    it("should return 0 if n1 is zero", () => {
        const result = div(0,5);
        assert.equal(result, 0, "Result should be 0")
    })
    it("should return 0 if n2 is zero", () => {
        const result = div(3,0);
        assert.equal(result, 0, "Result should be 0")
    })
    it("should return the div value of the two numbers", () => {
        const result = div(25,5);
        assert.equal(result, 5, "Result should be 5")
    })
}) 