function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Home(name,age,address){
  Person.call(this,name,age);
  this.address=address;

}


Home.prototype.getInfo=function(){
  return `My name is ${this.name}, im ${this.age} years old and im from ${this.address}`;


}



const home = new Home("John Doe", 34,"Manaoag");

console.log(home.getInfo())
