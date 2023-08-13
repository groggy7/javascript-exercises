/***************************************************** EXCERCISE 1 *****************************************************/

//Declare an empty array;
const emptyArray = []
console.log(emptyArray)

//Declare an array with more than 5 number of elements
//const arrayOf6elements = Array(6).fill("X") // works
const arrayOf6elements = [1, 2, 3, 4, 5, 6]
console.log(arrayOf6elements)

//Find the length of your array
console.log(arrayOf6elements.length)

//Get the first item, the middle item and the last item of the array
console.log(arrayOf6elements[0])
console.log(arrayOf6elements[arrayOf6elements.length / 2])
console.log(arrayOf6elements[arrayOf6elements.length - 1])

/*
Declare an array called mixedDataTypes, put different data types in the array and 
find the length of the array. The array size should be greater than 5
*/
const mixedDataTypes = ["Hi", 1, 1.56, true, false, 'a']
console.log(mixedDataTypes.length)


/*
Declare an array variable name itCompanies and assign initial values Facebook, 
Google, Microsoft, Apple, IBM, Oracle and Amazon
*/
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.round(itCompanies.length / 2 - 1)])
console.log(itCompanies[itCompanies.length - 1])

//Print out each company
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index])
}

//Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index].toUpperCase()
}
console.log(itCompanies)

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = ""
for (let index = 0; index < itCompanies.length - 1; index++) {
    if (index != itCompanies.length - 2) {
        sentence += itCompanies[index] + ", "
    } else {
        sentence += itCompanies[index]
    }
}
console.log(`${sentence} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`)

/*
Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found
*/
if(itCompanies.includes("AMAZON")) {
    console.log("amazon exists in the company list")
} else {
    console.log("company is not found")
}

//Filter out companies which have more than one 'o' without the filter method
for (let index = 0; index < itCompanies.length; index++) {
    let count = itCompanies[index].toLowerCase().split("o").length - 1
    if (count > 1) {
        console.log(itCompanies[index])
    }
}

//Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

//Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7))

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4))

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

//Remove the middle IT company or companies from the array
itCompanies.unshift("ORACLE")
console.log(itCompanies)

itCompanies.splice(itCompanies.length / 2, 1)
console.log(itCompanies)

//Remove the last IT company from the array
console.log(itCompanies.pop())
console.log(itCompanies)

//Remove all IT companies
itCompanies.splice(0, 6)
console.log(itCompanies)

/***************************************************** EXCERCISE 1 *****************************************************/