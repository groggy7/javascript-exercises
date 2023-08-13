/***************************************************** EXCERCISE 1 *****************************************************/
//Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

/*
Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
let truthy0 = 1, truthy1 = true, truthy2 = -5, truthy3 = "4654"

console.log(Boolean(truthy0))
console.log(Boolean(truthy1))
console.log(Boolean(truthy2))
console.log(Boolean(truthy3))

/*
Figure out the result of the following comparison expression first without using console.log(). 
After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 !== 4)

let python = "python"
let jargon = "jargon"

let lenPython = python.length
let lenJargon = jargon.length
console.log(lenPython == lenJargon)

/*
Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
*/

let dragon = "dragon"
//let python = "python"

let bool = dragon.includes("on") && python.includes("on")
console.log(bool)

/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const dateObject = new Date()

console.log(dateObject.getFullYear())
console.log(dateObject.getMonth())
console.log(dateObject.getDate())
console.log(dateObject.getDay())
console.log(dateObject.getHours())
console.log(dateObject.getMinutes())
console.log(dateObject.getTime() / 1000)

/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/

/*
Write a script that prompt the user to enter base and height of the triangle 
and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

let base = prompt("Please enter base", "")
let height = prompt("Please enter height", "")
alert(`Area of triangle is: ${base * height / 2}`, "area of triangle")
console.log(`Area of triangle is: ${base * height / 2}`)

/*
Write a script that prompt the user to enter side a, side b, and side c of the triangle
and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
//....

//Get length and width using prompt and calculate area of rectangle 
//(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let width = prompt("Enter width of the rectangle")
height = prompt("Enter height of the rectangle")

console.log(`Area of reactangle is ${width * height}, perimeter of rectangle is ${2 * (length + width)}`)

//Get radius using prompt and calculate the area of a circle 
//(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

radius = prompt("Enter radius: ", "")
let area = 3.14 * radius * radius
console.log(area)


//Calculate the slope, x-intercept and y-intercept of y = 2x -2
///...

//Calculate the value of y (y = x2 + 6x + 9). 
//Try to use different x values and figure out at what x value y is 0.
function findY(x) {
  return x ** 2 + 6*x + 9
}
let y = findY(-3)

console.log(`Value of y is ${y}`)

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//...

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name_ = prompt("What's your name?")
name_.length > 7 ? console.log("Your name is long") : console.log("Your name is short")

/*Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/

let fname = prompt("What's your first name?")
let lname = prompt("What's your last name?")

fname.length > lname.length ?
console.log(`Your first name, ${fname} is longer than your family name, ${lname}`) : 
console.log(`Your first name, ${fname} is shorter than your family name, ${lname}`)

/*
Using prompt get the year the user was born and if the user is 18 or above 
allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

let birthYear = prompt("What's your birth year?")
dateObj = new Date()
currentYear = dateObj.getFullYear()
currentYear - birthYear > 18 ? console.log(`You are, ${birthYear}. You are old enough to drive`) :
console.log(`You are, ${currentYear - birthYear}. You will be allowed to drive after ${18 - (currentYear - birthYear)} years`)

/*
Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. 
Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/
let yearsLived = prompt("Enter number of years you lived?")
console.log(`You lived ${yearsLived * 365 * 24 * 60 * 60} seconds.`)


/*
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
