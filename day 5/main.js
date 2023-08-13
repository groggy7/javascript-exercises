/***************************************************** EXCERCISE 2 *****************************************************/

import { countries } from "./countries.js";
import { webTechnologies } from "./web_techs.js";

/*
Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/
console.log(countries)
console.log(webTechnologies)

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const punctuation = /[.,]/g;
const cleanedText = text.replace(punctuation, "")

const words = cleanedText.split(" ")
console.log(words)
console.log(words.length)

/*
In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    --> add 'Meat' in the beginning of your shopping cart if it has not been already added
    --> add Sugar at the end of you shopping cart if it has not been already added
    --> remove 'Honey' if you are allergic to honey
    --> modify Tea to 'Green Tea'
*/
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0] != "Meat") {
    shoppingCart.unshift("Meat") // --> ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']
}

if(shoppingCart[shoppingCart.length - 1] != "Sugar") {
    shoppingCart.push("Sugar") // --> ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']
}

shoppingCart.splice(4, 1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//If it does not exist add to the countries list.

if(countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

//In the webTechs array check if Sass exists in the array and if it exists print 
//'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechnologies.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechnologies.push('Sass')
    console.log(webTechnologies)
}

/*
Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/

/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), 
use abs() method 1.Slice the first ten countries from the countries array
*/

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages = ages.sort()
console.log(ages)

let min = ages[0]
let max = ages[ages.length - 1]

let median
if(ages.length % 2 == 1) {
    median = ages[Math.ceil(ages.length / 2)]
} else {
    median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
}
console.log(median)

let sum = 0
for (let index = 0; index < ages.length; index++) {
    sum += ages[index]
}
let average = sum / ages.length
console.log(average)

let range = max - min
console.log(range)

console.log(Math.abs(min - average))
console.log(Math.abs(max - average))

const first10Countries = countries.slice(0, 9)
console.log(first10Countries)

//Find the middle country(ies) in the countries array
let middleCountry = "" 
if(countries.length % 2 == 1) {
    middleCountry = countries[Math.ceil(countries.length / 2)]
} else {
    middleCountry = countries[countries.length / 2 - 1] + countries[countries.length / 2]
}
console.log(middleCountry)

//Divide the countries array into two equal arrays if it is even. 
//If countries array is not even , one more country for the first half.
let firstHalf, secondHalf
if(countries.length % 2 == 0) {
    firstHalf = countries.slice(0, countries.length / 2 - 1)
    secondHalf = countries.slice(countries.length / 2, countries.length - 1)
} else {
    countries.unshift("New Country")
    firstHalf = countries.slice(0, countries.length / 2 - 1)
    secondHalf = countries.slice(countries.length / 2, countries.length - 1)
}
console.log(firstHalf)
console.log(secondHalf)