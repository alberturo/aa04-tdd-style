const { expect } = require("chai");

const Person = require("../problems/person");
const person1 = new Person("Sam", 48);
const person2 = new Person("Carol", 15);

describe("person expects", () => {
  it("constructor will intake an name and age and set that as properties in the instance", () => {
    expect(person1.name).to.equal("Sam");
    expect(person1.age).to.equal(48);
  });
  it("instance method sayHello should return a string", () => {
    expect(person1.sayHello()).to.equal("Hello Sam");
  });
  it("should return a string stating that this instance visited the passed-in person instance", () => {
    expect(person1.visit(person2)).to.equal("Sam visited Carol");
  });
  it("should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument", () => {
    expect(person2.switchVisit(person1)).to.equal("Carol visited Sam");
  });
  it("the incoming argument is not an object", () => {
    expect(person1.update(obj)).to.throw(TypeError, "Not valid object");
  });
  it("should check the passed value matches the parameter", () => {
    person1.update({ name: "lulu", age: 57 });
    expect(person1).to.deep.equal({
      name: "lulu",
      age: 57,
    });
    it("should have a name", () => {
      expect(person1.update({ firstName: "lulu", age: 57 })).to.throw(
        TypeError,
        "Not valid object"
      );
    });
  });
});
