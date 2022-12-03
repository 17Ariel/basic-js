function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getInfo = function () {
    return `My name is ${this.name} and im ${this.age} years old`;
  };
}

const person = new Person("John Doe", 34);

console.log(person.getInfo());
