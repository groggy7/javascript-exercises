const usersText = `{
"users":[
    {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
    },
    {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
]
}`
    
const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
console.log(usersObj)

/***************************************************** EXCERCISE 1 *****************************************************/
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//Change skills array to JSON using JSON.stringify()
let skillsJSON = JSON.stringify(skills, undefined, 4)
console.log(skillsJSON)

//Stringify the age variable
let ageStringified = JSON.stringify(age, undefined, undefined)
console.log(ageStringified)

//Stringify the isMarried variable
let isMarriedStringified = JSON.stringify(isMarried, undefined, undefined)
console.log(isMarriedStringified)

//Stringify the student object
let studentStringified = JSON.stringify(student, undefined, undefined)
console.log(studentStringified)

/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/
//Stringify the students object with only firstName, lastName and skills properties
let studentStringifiedWithFilter = JSON.stringify(student, ["firstName", "lastName", "skills"], undefined)
console.log(studentStringifiedWithFilter)

/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/
//Parse the txt JSON to object.
let txtParsed = JSON.parse(txt, undefined)
console.log(txtParsed)

//Find the user who has many skills from the variable stored in txt.
let maxSkills = 0;
let skilledPerson = null;

const data = JSON.parse(txt, (key, value) => {
    if(value.skills && value.skills.length > maxSkills) {
        maxSkills = value.skills.length
        skilledPerson = key
    }
    return value
})
console.log(skilledPerson)