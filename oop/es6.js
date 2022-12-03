class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	getInfo(){
		return `My name is ${this.name} and im ${this.age} years old`;
	}
}

class Teacher extends Person{
	constructor(name,age,position){
		super(name,age);
			this.name=name;
			this.age=age;
			this.position=position;
		
	}
	getInfo(){
		return `My name is ${this.name},im ${this.age} years old and im ${this.position}`;
	}
}

const person= new Person('John Doe',23)
// console.log(person.getInfo());

const teacher= new Teacher('John Doe',23,'Teacher 2')

const {name,age}=teacher;
console.log(name);
// console.log(teacher.getInfo());

//destructor

