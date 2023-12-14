const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");

describe("reverse string", () => {
  it(`expected undefined to equal: "nuf"`, function () {
    expect(reverseString("fun")).to.equal("nuf");
  });
});
