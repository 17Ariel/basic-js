function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo=function(){
  return `My name is ${this.name} and im ${this.age} years old`;
}

Person.prototype.getName=function(){
  return `My name is ${this.name}`;
}
const person = new Person("John Doe", 34);

console.log(person.getInfo())
console.log(person.getName())
