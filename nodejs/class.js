const animals={
    name:"Lion",
    type:"mammals",
    getAnimmals:()=>{
        return `${animals.name} and ${animals.type} `;
    } 
}

console.log(animals.getAnimmals())

class Person{
    constructor(name,age){
        name=this.name;
        age=this.age;
    }
    getPerson(){
        return `My name is ${Person.name} and im ${Person.age}`;
    }
}

const man=new Person("John Doe",34);

// console.log(man);