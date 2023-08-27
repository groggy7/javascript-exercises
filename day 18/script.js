/***************************************************** EXCERCISE 1 *****************************************************/
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
//Print out all the cat names in to catNames variable.

/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/
//Print out all the cat names in to catNames variable.
fetch(catsAPI)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name)
        });
    })
    .catch(err => console.log(err))

/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/
//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data.reduce((acc, curr) => {
            let weights = curr.weight.metric.split(`-`).map(item => item.trim())
            let lowerBound = weights[0]
            let upperBound = weights[1]
            acc.push((lowerBound + upperBound) / 2)
            return acc
        }, []))
    })
    .catch(err => console.log(err))

//Read the countries api and find out the 10 largest countries
const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()

        let populations = countries.reduce((acc, country) => {
            acc.set(country.name, country.population)
            return acc
        }, new Map())
        console.log([...populations.entries()])
        let sortedPopulations = [...populations.entries()].sort((a, b) => b[1] - a[1])
        console.log(sortedPopulations.slice(0, 10))
    } catch (error) {
        console.log(error)
    }
}
fetchData()

/*
1- unsortedMap.entries(): The .entries() method returns an iterator that generates 
key-value pairs for each entry in the unsortedMap. Each entry is represented as an array [key, value].

2- [...unsortedMap.entries()]: The spread operator (...) is used to convert the iterator returned by .entries() 
into an array of key-value pairs. This step is necessary because the sort() method works with arrays.

3- .sort((a, b) => a[1] - b[1]): The .sort() method is used to sort the array of key-value pairs. 
The sorting is based on a comparison function (a, b) => a[1] - b[1]. Here's how the comparison function works:

4- a and b are two key-value pairs being compared.
a[1] and b[1] represent the values of the key-value pairs. These are the values by which the sorting is performed.
This comparison function sorts the pairs in ascending order based on the values.
*/

//Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
    .then(res => res.json())
    .then(data => {
        let uniqueLanguageSet = new Set()
        data.forEach(country => {
            country.languages.forEach(language => {
                uniqueLanguageSet.add(language)
            })
        })
        console.log(uniqueLanguageSet.size)
    })
    .catch(err => console.log(err))