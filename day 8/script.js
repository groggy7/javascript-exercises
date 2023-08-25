a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}

letsLearnScope()
console.log(a, b)

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
const copyPerson = Object.assign({}, person)
console.log(copyPerson)


//Getting object keys using Object.keys()
//Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


//Getting object keys and values using Object.entries()
//Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)


//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name")) //-->false
console.log(copyPerson.hasOwnProperty("city")) //-->true

/***************************************************** EXCERCISE 1 *****************************************************/

//Create an empty object called dog
let dog = {}

//Print the the dog object on the console
console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "golden"
dog.legs = 4
dog.color = "yellow"
dog.age = 4
dog.bark = function() {
    return "woof woof"
}

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//Set new properties the dog object: breed, getDogInfo
dog.breed = "golden retriever"
dog.getDogInfo = function() {
    return `${this.name} ${this.legs} ${this.color} ${this.breed}`
}
console.log(dog.getDogInfo())

/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}                             
  
//Find the person who has many skills in the users object.
let maxSkills = 0
let user = ""
for (const person in users) {
    if(users[person].skills.length > maxSkills) {
      maxSkills = users[person].skills.length
      user = person
    }
}
console.log(user, maxSkills)

//Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0
for (const user in users) {
  if(users[user].isLoggedIn == true) {
    loggedInUsers++
  }
}
console.log(loggedInUsers)

let highPointUsers = 0
for (const user in users) {
    if(users[user].points >= 50) {
      highPointUsers++
    }
}
console.log(highPointUsers)

//Find people who are MERN stack developer from the users object
//MongoDB, Express, React, Node.js
let mernDev = []
for (const user in users) {
    skills = users[user].skills
    if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        mernDev.push(user)
    }
}
console.log(mernDev)

//Set your name in the users object without modifying the original users object
copyUsers = Object.assign({}, users)
copyUsers.Serhat = {
  email: "serhatkilbas127@gmail.com",
  age: 23,
  isLoggedIn: true,
  points: 99

}
console.log(copyUsers)

//Get all keys or properties of users object
console.log(Object.keys(users))

//Get all the values of users object
console.log(Object.values(users))

//Use the countries object to print a country name, capital, populations and languages.
const countries = {
  1: {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    languages: ["English"],
  },
  2: {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    languages: ["English", "French"],
  },
  3: {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    languages: ["English"],
  },
}

function print(countries) {
    for (const country in countries) {
      console.log(
        countries[country].name,
        countries[country].capital,
        countries[country].population,
        countries[country].languages
      )
    }
}
print(countries)

/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/

//Create an object literal called personAccount. 
//It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, 
//accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
  firstName: "serhat", 
  lastName: "hakeri",
  incomes: [5000, "salary", 1000, "kid fee"],
  expenses: [2500, "house rent", 1000, "kitchen"],
  totalIncome: function() {

  },
  totalExpense: function() {

  },
  accountInfo: function() {

  },
  addIncome: function() {

  },
  addExpense: function() {

  },
  accountBalance: function() {

  }
}

const _users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

//Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account.

const signUp = (user) => {
  let isExistingUser = false
  for (let i = 0; i < _users.length; i++) {
    const _user = _users[i]
    if ( _user.username == user.username) {
      console.log("user already exists.")
      isExistingUser = true
    }
  }
  if(!isExistingUser) {
    _users.push(user)
  }
}

signUp({
  _id: 'eefamr',
  username: 'Serhat',
  email: 'serhat@hotmail.com',
  password: '123222',
  createdAt:'08/01/2020 9:50 AM',
  isLoggedIn: false
})

console.log(_users)

//Create a function called signIn which allows user to sign in to the application

function signIn(user) {
  for (let i = 0; i < _users.length; i++) {
    if (_users[i].username == user.username) {
      console.log("Welcome")
      _users.isLoggedIn = true
    }  
}
}

signIn({
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
})


//The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
//b. Create a function called averageRating which calculate the average rating of a product

function rateProduct(productName, user, rating) {
  for (let i = 0; i < products.length; i++) {
    let _product = products[i]  
    if (_product.name == productName) {
        _product.ratings.push({
          userId: user._id,
          rate: rating
        })
      }
  }
}

rateProduct("Laptop", 
{
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
}, 8)

console.log(products)

function averageRating(productName) {
  for (let i = 0; i < products.length; i++) {
      if(products[i].name == productName) {
        let sum = 0
        let counter = 0
        for (let j = 0; j < products[i].ratings.length; j++) {
          sum += products[i].ratings[j].rate
          counter++
        }
        let avg = sum / counter
        return avg
      }
  }
  console.log("product not found")
}

let avg = averageRating("mobile phone")
console.log(avg)


//Create a function called likeProduct. This function will helps 
//to like to the product if it is not liked and remove like if it was liked.

function likeProduct(product, user) {
  for (let i = 0; i < products.length; i++) {
    if(products[i].name == product.name) {
        products[i].likes.push(user._id)
    }
  }
}

likeProduct(
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
  }
)
console.log(products[1])
/***************************************************** EXCERCISE 3 *****************************************************/