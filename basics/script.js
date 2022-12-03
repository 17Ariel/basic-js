// const ok = true;
// const notok = true;
// let increment = 0;
// if (ok && notok) {
//   console.log(++increment);
// }
// if (ok == notok) {
//   console.log(increment);
// }
// if (!ok || notok) {
//   console.log(increment++);
// }

// let number1 = 3;
// let number2 = 4;
// if (number1 == number2) {
//   console.log("ok");
// } else if (number1 && number2) {
//   console.log("hey");
// }
// let animal = "dog";
// switch (animal) {
//   case "dog":
//     console.log("this is a dog");
//     break;
//   case "cat":
//     console.log("not a dog");
//     break;
//   default:
//     console.log("Invalid animal");
// }
//template literals
// let man = "John Doe";
// let isJohn = "John Does";
// console.log(
//   isJohn === "John Doe" ? `He is a ${isJohn}` : `I am ${isJohn} not ${man}`
// );

// let firstArr = [1, 23];
// let secArr = [2, 5];
// let comArr = [...firstArr, secArr];
// console.log(comArr);

// let msg = "Hello";
// console.log(msg.substring(0, 3) + msg);

// let vowels = "aeiou";
// let words = "hello";
// let splitit = vowels.split("abcd");
// console.log(words.includes("e"));

// object literals
const person = {
  name: "Nick Faroe",
  age: 24,
  getDetails() {
    return `My name is ${this.name} and im ${this.age} years old`;
  },
};

// console.log(person.getDetails());

// example of accessing object property
let data = "";
for (items in person) {
  data += person[items];

  //   console.log(data);
}

//add properties to the object
person.address = "Manaoag";
// console.log(person);

// delete properties to the object
delete person.getDetails;
delete person["age"];
// console.log(person);

// nested objects
const programmingLangauge = {
  name: "Javascript",
  frameworks: {
    frameworks1: "Angular",
    frameworks2: "React",
    frameworks3: "Vue",
  },
};

//accessing the value of an object inside of an object
// console.log(programmingLangauge.frameworks.frameworks1);
// //or
// console.log(programmingLangauge.frameworks["frameworks1"]);

// nested arrays in an object
const cars = {
  name: "Ford",
  company: "Ford Motors Company",
  unit: [
    {
      name: "Fiesta",
      year: "2019",
      price: [150000, 2000000],
    },
    {
      name: "Explorer",
      year: "2017",
      price: [110000, 2000000],
    },
  ],
};

// for (let index in cars.unit) {
//   console.log(cars.unit[index].name);
// }
const car = {
  name: "Everest",
  year: "2021",
  price: 100000000,
};

let Car = cars.unit.push(car);

// console.log(Car);
// console.log(cars);
// object prototype
function Books(name, author) {
  this.name = name;
  this.author = author;
}

Books.prototype.info = function () {
  return `The name of book is ${this.name} and its author is ${this.author}`;
};

let books = new Books("Hello World", "Sam Smith");

// console.log(books.info());

const names = new Set();

names.add("John Depp");
names.add("Vladimir Putin");
names.delete("John Depp");
names.clear();
const numbers = new Map([[1, 2, 3, 4]]);
// console.log(numbers);

function sayHello() {
  a = 4;
}

// console.log(sayHello());

//async await
const getIt = async () => {
  const fetchIt = await fetch("hello.txt");
  const res = await fetchIt.text();
  console.log(res);
};

getIt();

const fetchExample = () => {
  fetch("burger.png")
    .then((res) => res.blob())
    .then((data) => console.log(data));
};

fetchExample();
