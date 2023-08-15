const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

/***************************************************** EXCERCISE 1 *****************************************************/

/*
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
*/

//create an empty set
let newSet = new Set()

//Create a set containing 0 to 10 using loop
let set = new Set()
for (let i = 0; i < 10; i++) {
    set.add(i)
}
console.log(set)

//Remove an element from a set
set.delete(9)
console.log(set)

//Clear a set
set.clear()
console.log(set)

//Create a set of 5 string elements from array
let strings = [
    "Luis Suarez",
    "Andres Iniesta",
    "Lionel Messi",
    "Dani Alves",
    "Neymar Junior",
    "David Villa"
]

let setFromStrings = new Set(strings)
console.log(setFromStrings)

//Create a map of countries and number of characters of a country
let countries = [
    ["England", 7], 
    ["Germany", 7], 
    ["Turkey", 6],
    ["China", 5]
]

let countryMap = new Map(countries)
console.log(countryMap)
/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/

//Find a union b
let a = [1,2,3,4,5,6]
let b = [4,5,6,7,8,9]
let aUnionB = new Set([...a, ...b])
console.log(aUnionB)

//Find a intersection b
let setA = new Set(a)
let setB = new Set(b)

let intersection = new Set(a.filter((num) => setB.has(num)))
console.log(intersection)

//Find a with b
let difference = new Set(a.filter((num) => !setB.has(num)))
console.log(difference)
/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

//How many languages are there in the countries object file.
import { extendedCountries } from "./countries_data.js"

let languageList = []
for(let i = 0; i < extendedCountries.length; i++) {
    for(let j = 0; j < extendedCountries[i].languages.length; j++) {
        languageList.push(extendedCountries[i].languages[j])
    }
}
let languageSet = new Set(languageList)
console.log(languageSet)
console.log(languageSet.size)


/*Use the countries data to find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{English:91},
{French:45},
{Arabic:25}
]
*/

function mostSpokenLanguages(countries, count) {
    let languageMap = new Map()
    for(let i = 0; i < extendedCountries.length; i++) {
        for(let j = 0; j < extendedCountries[i].languages.length; j++) {
            const language = extendedCountries[i].languages[j]

            if(!languageMap.has(language)) {
                languageMap.set(language, 1)
            } else {
                languageMap.set(language, languageMap.get(language) + 1)
            }
        }
    }
    const sortedEntries = [...languageMap.entries()].sort((a, b) => b[1] - a[1]);
    const topXEntries = sortedEntries.slice(0, count);
    return topXEntries;

}

console.log(mostSpokenLanguages(extendedCountries, 5))
/***************************************************** EXCERCISE 3 *****************************************************/