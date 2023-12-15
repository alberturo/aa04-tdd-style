class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  update(obj) {
    this.name = obj.name;
    this.age = obj.age;
  }
}

module.exports = Person;
