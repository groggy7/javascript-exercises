/***************************************************** EXCERCISE 1 *****************************************************/
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


//Explain the difference between forEach, map, filter, and reduce.

/*
forEach takes a callback function which takes 3 arguments: element, index and array. Index and array are optinal
we can print elements while iterating over array elements with forEach

map makes it possible to modify array elements. It takes callback function

filter brings all elements that matches specific conditions

reduce takes a callback function which takes accumulator, current and initial value for accumulator
we can use current to get current element's value, accumulator to accumulate current's value.

*/

//Define a callback function before you use it in forEach, map, filter or reduce.

const callback = (a, b) => { a * b }

//Use forEach to console.log each country in the countries array.
//Use forEach to console.log each name in the names array.
//Use forEach to console.log each number in the numbers array.

countries.forEach(element => {
    console.log(element)
})

names.forEach(element => {
    console.log(element)
})

numbers.forEach(element => {
    console.log(element)
})

//Use map to create a new array by changing each country to uppercase in the countries array.

const newMap = countries.map(element => element.toUpperCase())
console.log(newMap)
//or
/*const newMap = countries.map(element => { 
    return element.toUpperCase())
}*/

//Use map to create an array of countries length from countries array.
const lengthMap = countries.map(element => element.length)
console.log(lengthMap)

//Use map to create a new array by changing each number to square in the numbers array
const squaredArray = numbers.map(element => element ** 2)
console.log(squaredArray)

//Use map to change to each name to uppercase in the names array
const uppercaseArray = names.map(num => num.toUpperCase())
console.log(uppercaseArray)

//Use map to map the products array to its corresponding prices.
const priceArray = products.map(obj => obj.price)
console.log(priceArray)

//Use filter to filter out countries containing land.
const containsLand = countries.filter(element => element.includes("land"))
console.log(containsLand)

//Use filter to filter out countries having six character.
const sixCharCountries = countries.filter(element => element.length == 6)
console.log(sixCharCountries)

//Use filter to filter out countries containing six letters and more in the country array.
const moreThanSixCharCountries = countries.filter(element => element.length >= 6)
console.log(moreThanSixCharCountries)

//Use filter to filter out country start with 'E';
const startsWithE = countries.filter(country => country[0] == "E")
console.log(startsWithE)

//Use filter to filter out only prices with values.
const prices = products.filter(product => {
    return product.price > 0
})
console.log(prices)

//Declare a function called getStringLists which takes an array as a parameter 
//and then returns an array only with string items.
function getStringLists(array) {
    return array.filter(element => typeof element == 'string')
}
let array = [1, "abc", 2, "cde", true, false] 
console.log(getStringLists(array))

//Use reduce to sum all the numbers in the numbers array.
let allNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(allNumbers)
let alternative = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(alternative)

//Use reduce to concatenate all the countries and to produce this sentence: 
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let concatenatedString = countries.reduce((acc, curr) => {
    if(curr != "IceLand") {
        return acc + curr + ", "
    } else {
        return acc + "are north European countries"
    }
}, "")
console.log(concatenatedString)

//Explain the difference between some and every
//some checks if any value in an array matches the given condition, while every checks if all values matches or not.

//Use some to check if some names' length greater than seven in names array
let _8ormore = names.some(name => name.length > 7 )
console.log(_8ormore)

//Use every to check if all the countries contain the word land
let contains_land_with_every = countries.every(country => country.includes("land"))
console.log(contains_land_with_every)

//Explain the difference between find and findIndex.
//find returns the first element that matches the given condition
//findIndex returns the index of first element that matches the given condition

//Use find to find the first country containing only six letters in the countries array
let firstCountryContains6letters = countries.find(country => country.length == 6)
console.log(firstCountryContains6letters)

//Use findIndex to find the position of the first country containing only six letters in the countries array
let indexOfFirstCountryContains6letters = countries.findIndex(country => country.length == 6)
console.log(indexOfFirstCountryContains6letters)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

let indexOfNorway = countries.findIndex(country => country == "Norway")
console.log(indexOfNorway)

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let indexOfRussia = countries.findIndex(country => country == "Russia")
console.log(indexOfRussia)

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/


//Find the total price of products by chaining two or more array iterators
//(eg. arr.map(callback).filter(callback).reduce(callback))

let elements = products.filter(element => element.price > 5)
.map(element => element.price)
.reduce((acc, curr) => acc + curr, 0)
console.log(elements)

//Find the sum of price of products using only reduce reduce(callback))
let sum = products.reduce((acc, curr) => { 
    if(typeof curr.price == "number") {
        return acc + curr.price
    } else {
        return acc
    }
}, 0)
console.log(sum)

//Declare a function called categorizeCountries which returns an array of countries which have some 
//common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries() {
    
}

//Create a function which return an array of objects, which is the letter and 
//the number of times the letter use to start with a name of a country.

//normal solution
function count(array) {
    let arrayOfObjects = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let firstLetter = element[0]
        const others = array.filter(val => val[0] == firstLetter)
        arrayOfObjects.push({
            letter: firstLetter,
            otherCountries: others.length
        })
    }
    return arrayOfObjects
}

//functional programming
function countFirstLetters(countries) {
    return countries.reduce((acc, curr) => {
        let firstLetter = curr[0]

        /*if (!acc[firstLetter]) {
            acc[firstLetter] = 1
        } else {
            acc[firstLetter]++
        }*/
        acc[firstLetter] = (acc[firstLetter] || 0) + 1
        return acc
    }, {})
}
console.log(countFirstLetters(countries))
console.log(count(countries))

//Declare a getFirstTenCountries function and return an array of ten countries. 
//Use different functional programming to work on the countries.js array

import { countryList } from "./countries.js"

function getFirstTenCountries(countries) {
    let ct = countries.filter(country => country[0].toLowerCase() === 't')
    let first10 = ct.slice(0,10)
    return first10
}
console.log(getFirstTenCountries(countryList))

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

/*
The reduce() function can accept a callback function with up to four parameters:

Accumulator (acc): The value that accumulates as the function iterates through the array.
Current Value (currentValue): The current element being processed in the array.
Current Index (currentIndex): The index of the current element being processed.
Source Array (array): The array that reduce() is being called upon.
*/

function getLastTenCountries(countries) {
    // option 1 - return countries.slice(-10)
    return countries.reduce((accumulator, country, index, arr) => {
        if(index >= arr.length - 10) {
            accumulator.push(country)
        }
        return accumulator
    }, [])
}
console.log(getLastTenCountries(countryList))

//Find out which letter is used many times as initial for a country name from
//the countries array (eg. Finland, Fiji, France etc)
function findMostFrequentLetter(countries) {
    const lettersObject = countries.reduce((acc, country) => {
        let firstLetter = country[0]
        acc[firstLetter] = ( acc[firstLetter] || 0) + 1
        return acc
    }, {})
    
    let mostFrequentLetter = Object.keys(lettersObject).reduce((acc, letter) => {
        return lettersObject[letter] > lettersObject[acc] ? letter : acc
    }, Object.keys(lettersObject)[0])
    return mostFrequentLetter
}

/*
lettersObject: {A: 15, B: 21, C: 23, D: 4, E: 8, …}
Object.keys(letterObject): (26) ['A', 'B', 'C', 'D', …} letter -> A, B, C
*/

console.log(findMostFrequentLetter(countryList))
/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/

//Use the countries information, in the data folder. Sort countries by name, by capital, by population

import { extendedCountries } from "./countries_data.js"

//The sort() function expects a numerical value or zero to determine the order of the elements.
//You should return a negative, positive, or zero value based on the comparison.

let sortedByName = [...extendedCountries].sort((former, latter) => (former.name < latter.name ? -1 : 1))
console.log(sortedByName)

let sortedByCapital = [...extendedCountries].sort((former, latter) => (former.capital < latter.capital ? -1 : 1))
console.log(sortedByCapital)

let sortedByPopulation = [...extendedCountries].sort((former, latter) => (former.population < latter.population ? -1 : 1))
console.log(sortedByPopulation)

/*Spread syntax (...) for more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Spread in array literals
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

Copy an array
const arr = [1, 2, 3]
const arr2 = [...arr]

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4], arr remains unaffected

A better way to concatenate arrays
let arr1 = [0, 1, 2]; 
const arr2 = [3, 4, 5];
--> instead of: arr1 = arr1.concat(arr2);
arr1 = [...arr1, ...arr2];
*/

//Find the 10 most spoken languages:
function findMostSpokenLanguages(countries, count) {
    let result = countries.reduce((acc, country) => {
        for(let i = 0; i < country.languages.length; i++) {
            acc[country.languages[i]] = (acc[country.languages[i]] || 0) + 1
        }
        return acc
    }, {})
    //console.log(result) --> {Spanish: 5, Guaraní: 1, Azerbaijani: 1, English: 9, Portuguese: 2, …}
    //console.log(Object.keys(result)) --> ['Spanish', 'Guaraní', 'Azerbaijani', 'English', 'Portuguese', '...]
    let languageList = Object.keys(result).map((language) => ({
        country: language,
        count: result[language]
    }))

    languageList.sort((former, latter) => {
        return former.count > latter.count ? -1 : 1
    })
    return languageList.slice(0, count)
}
console.log(findMostSpokenLanguages(extendedCountries, 5))

/*
Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
and measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
You can create an object called statistics and create all the functions which do statistical calculations
as method for the statistics object. Check the output below.
*/

/*
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), 
(8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), 
(8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/