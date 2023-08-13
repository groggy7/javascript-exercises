----Function returning value----

Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())

**********************************************************************************************************************

----Function with a parameter----
In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

**********************************************************************************************************************

----Function with many parameters----

function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

**********************************************************************************************************************

----Function with unlimited number of parameters----

Unlimited number of parameters in regular function
A function declaration provides a function scoped arguments array like object.
Any thing we passed as argument in the function can be accessed from arguments object inside the functions.
Let us see an example:

function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

another example: 
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

Unlimited number of parameters in arrow function
Arrow function does not have the function scoped arguments object. 
To implement a function which takes unlimited number of arguments in an arrow function 
we use --spread operator-- followed by any parameter name. 
Anything we passed as argument in the function can be accessed as array in the arrow function. 
Let us see an example:

const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

example:

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

**********************************************************************************************************************

----Anonymous Function----

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

**********************************************************************************************************************

----Expression Function----
Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. 
To return a value from the function we should call the variable. 
Look at the example below.

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

**********************************************************************************************************************

----Self Invoking Functions----
Self invoking functions are anonymous functions which do not need to be called to return a value.

(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)

**********************************************************************************************************************

----Arrow Function----
Arrow function is an alternative to write a function, however function declaration and 
arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function.
Let us see both function declaration and arrow function.

// This is how we write normal or declaration function
function square(n) {
  return n * n
}

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4

console.log(square(4)) // ->16


const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
The above function has only the return statement, therefore, we can explicitly return it as follows.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))

**********************************************************************************************************************

----Function with default parameters----
Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument
the default value will be used. Both function declaration and arrow function can have a default value or values.

Example:

function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings()) "Peter, welcome to 30 Days Of JavaScript!"
console.log(greetings('Asabeneh')) "Asabeneh, welcome to 30 Days Of JavaScript!"


Let us see how we write the above functions with arrow functions

const greetings = (name = 'Peter') => {
    return name + ', welcome to 30 Days Of JavaScript!'
}

console.log(greetings())
console.log(greetings('Asabeneh'))

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon