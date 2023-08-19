/***************************************************** EXCERCISE 1 *****************************************************/
//Display the countries array as a table
const countries = [
    "United States",
    "China",
    "Japan",
    "Germany",
    "United Kingdom",
    "India",
    "France",
    "Italy",
    "Canada",
    "South Korea",
    "Russia",
    "Brazil",
    "Australia",
    "Spain",
    "Mexico",
    "Indonesia",
    "Netherlands",
    "Saudi Arabia",
    "Turkey",
    "Switzerland",
    "Poland",
    "Sweden",
];
console.table(countries)

//Display the countries object as a table
const countriesObject = {
    "United States": {
      name: "United States",
      gdp: 20944000000000,
    },
    "China": {
      name: "China",
      gdp: 14728000000000,
    },
    "Japan": {
      name: "Japan",
      gdp: 5150000000000,
    },
    "Germany": {
      name: "Germany",
      gdp: 4220000000000,
    },
    "United Kingdom": {
      name: "United Kingdom",
      gdp: 3104000000000,
    }
};  

console.table(countriesObject)

//Use console.group() to group logs
let message = "this is a message"
let warning = "this is a warning"
let error = "this is an error"

console.group("MESSAGE")
console.log(message)
console.groupEnd()

console.group("WARNING")
console.log(warning)
console.groupEnd()

console.group("ERROR")
console.log(error)
console.groupEnd()
/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/
//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 > 20")

//Write a warning message using console.warn()
console.warn("this is my first message to console using the warn method")

//Write an error message using console.error()
console.error("this is my first error that i displayed using the error method")

/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/
//Check the speed difference among the following loops: while, for, for of, forEach
console.time()
let i = 0
while(i < 10) {
    console.log(i)
    i++
}
console.timeEnd()

i = 0
console.time()
for (; i < 10; i++) {
    console.log(i)
}
console.timeEnd()

/***************************************************** EXCERCISE 3 *****************************************************/
