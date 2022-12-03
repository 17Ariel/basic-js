const Person = {
   getInfo:function () {
    return `My name is ${this.name} and im ${this.age} years old`;
  }
}
const person=Object.create(Person);
person.name='Jojo Lavine';
person.age=34;

const people=Object.create(Person,{
  name:{value:'Johny D.'}
})

console.log(people);

