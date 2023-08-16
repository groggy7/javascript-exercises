/***************************************************** EXCERCISE 1 *****************************************************/
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTML', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTML', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTML', 'CSS', 'JS'],
  age:20
}
]

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries

//Destructure the rectangle object by its properties or keys
const {width, height} = rectangle

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/
//Iterate through the users array and get all the keys of the object using destructuring
for (let i = 0; i < users.length; i++) {
    const {name, scores, skills, age} = users[i]
    console.log(name, scores, skills, age)   
}

//Find the persons who have less than two skills
let persons = []
for (let i = 0; i < users.length; i++) {
    const {skills} = users[i]
    if(skills.length < 2) {
        persons.push(users[i].name)
    }
}
console.log(persons)
/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/
//Destructure the countries object print name, capital, population and languages of all countries
const countries_ = [
	{
			"name": "Argentina",
			"capital": "Buenos Aires",
			"languages": [
					"Spanish",
					"Guaraní"
			],
			"population": 45376763,
			"flag": "https://flagcdn.com/ar.svg",
			"region": "Americas",
			"area": 2780400
	},
	{
			"name": "Azerbaijan",
			"capital": "Baku",
			"languages": [
					"Azerbaijani"
			],
			"population": 10110116,
			"flag": "https://flagcdn.com/az.svg",
			"region": "Asia",
			"area": 86600
	},
	{
			"name": "Bahamas",
			"capital": "Nassau",
			"languages": [
					"English"
			],
			"population": 393248,
			"flag": "https://flagcdn.com/bs.svg",
			"region": "Americas",
			"area": 13943
	},
	{
			"name": "Brazil",
			"capital": "Brasília",
			"languages": [
					"Portuguese"
			],
			"population": 212559409,
			"flag": "https://flagcdn.com/br.svg",
			"region": "Americas",
			"area": 8515767
	},
	{
			"name": "Canada",
			"capital": "Ottawa",
			"languages": [
					"English",
					"French"
			],
			"population": 38005238,
			"flag": "https://flagcdn.com/ca.svg",
			"region": "Americas",
			"area": 9984670
	}
]

for (let i = 0; i < countries_.length; i++) {
    const {name, capital, population, languages} = countries_[i]
    console.log(name, capital, population, languages)
}

/*A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
Destructure the following array name to name, skills array to skills, scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(name, skills, jsScore, reactScore)

David (4) ["HTM", "CSS", "JS", "React"] 90 95*/

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [, , jsScore, reactScore]] = student

console.log(name, skills, jsScore, reactScore)

//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
	['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
	['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(array) {
	let objects = []
	for (let i = 0; i < array.length; i++) {
		const [name, skills, scores] = array[i]
		objects.push({name, skills, scores})
	}
	return objects
}

console.log(convertArrayToObject(students))

/*
Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/
const _student = {
	name: 'David',
	age: 25,
	skills: {
	  frontEnd: [
		{ skill: 'HTML', level: 10 },
		{ skill: 'CSS', level: 8 },
		{ skill: 'JS', level: 8 },
		{ skill: 'React', level: 9 }
	  ],
	  backEnd: [
		{ skill: 'Node',level: 7 },
		{ skill: 'GraphQL', level: 8 },
	  ],
	  dataBase:[
		{ skill: 'MongoDB', level: 7.5 },
	  ],
	  dataScience:['Python', 'R', 'D3.js']
	}
  }

const copiedStudents = {..._student}
copiedStudents.skills.frontEnd.push({skill: "Bootstrap", level: 8})
copiedStudents.skills.backEnd.push({skill: "Express", level: 9})
copiedStudents.skills.dataBase.push({skill: "SQL", level: 8})
copiedStudents.skills.dataScience.push({skill: "SQL"})
console.log(copiedStudents)
  /*
The copied object output should look like this:

    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
*/
/***************************************************** EXCERCISE 3 *****************************************************/