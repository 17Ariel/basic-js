const names="John Doe"
const age=23
const child=false
const dated=new Date()

const operation=(a,b)=>{
    return a/b;
}


let v=1
v--
let add=v

const m=9

const c=9

let b=!(c==m)
let j=(c&&m)

const r=8
const d=10
let i=(d||c)


const person=["JOHN","JOSEPH","TOM"]

const computer={
    cpu:"i5",
    ram:"8GB",
    os:"Windows"

}

// person.forEach((persons)=>{
//     console.log(persons[2])
// })

const users=[
    {
        id:1,
        name:"John Doe",
        age:23
    },
    {
        id:2,
        name:"Sams Smith",
        age:22
    },
    {
        id:3,
        name:"Tony Starks",
        age:22
    }
]
//foreach
// users.forEach((user)=>{
//     console.log(`The users id is ${user.id}, with the name of ${user.name} and an age of ${user.age}`)
// })
// map
// users.map((user)=>{
//     console.log(user)
// })

const newUser=users.filter((user)=>user.age==22)
// console.log(newUser)

// const searches=users.filter(function(user){
//     if(user.name.match("Tony")){
//         console.log(user)
//     }
// })

// const myname="John Doe"

// const newName=myname.toUpperCase();
// console.log(newName)
// const newNames=myname.toLowerCase();
// console.log(newNames)

// let numb="3"
// let numbs=numb.toString()
// console.log(numbs)


const fruits=["orange","apple","grapes"]
// console.log(fruits.pop())

fruits.push("blueberry")

console.log(fruits)








const text="I am going to London"
const nexts=" because i want meet friends their"
const vals=text.indexOf("o")
const chart=text.charAt("am")
const last=text.lastIndexOf("L")
// console.log(last)

const cc=text.concat(nexts)
const code=text.match("London")
const rep=text.replace("London","Paris")
// console.log(code)

const s=text.slice(12)
const sub=text.substr(1,2)
const strings=text.substring(4)
// console.log(strings)

const ages=[1,2,3]

const [x,y]=ages;

// console.log(x)
