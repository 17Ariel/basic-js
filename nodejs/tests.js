// const Person=['Tim']

// Person.map(Persons=>{
// 	console.log(Persons)
// })
// Person.forEach((Persons)=>{
// 	console.log(Persons)
// })
// Person.filter((Persons=>Persons=="Tom"))

const names=[
	{
		name:"Tom",
		age:12
	},
	{
		name:"Tim",
		age:13
	},
	{
		name:"Tony",
		age:17
	},
	{
		name:"David",
		age:13
	}
]

// const outputNames=names.map((thename)=>{
// 	console.log(`${thename.name} ${thename.age}`)
// })

// const loops=names.forEach((thename)=>{
// 	console.log(thename.name)
// })

// const filterIt=names.filter((thename=> thename.name=="Tom"))
// console.log(filterIt)

const sortIt=names.sort((firsts,second)=> (firsts.age<second.age || firsts.name<second.name ? 1 : -1))
console.log(sortIt)