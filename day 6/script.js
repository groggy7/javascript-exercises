const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech + "\n")
}

/***************************************************** EXCERCISE 1 *****************************************************/

//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let index = 0; index < 10; index++) {    
}

let i = 0
while (i < 10) {
    ++i
}

i = 0
do {
    i++
} while (i < 10);

/*Write a loop that makes the following pattern using console.log():

#
##
###
####
#####
######
#######
*/
const hashtag = "#"
for (let index = 0; index < 7; index++) {
    console.log(hashtag.repeat(index + 1))
    //console.log("\n")
}

/*Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (let index = 0; index < 11; index++) {
    console.log(`${index} x ${index} = ${index * index}`)
}

/*
Using loop print the following pattern

i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
*/
console.log("i\ti^\ti^3")
for (let index = 0; index < 11; index++) {
    console.log(`${index}\t${index ** 2}\t${index ** 3}`)
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
let primeNumbers = [2]
let isPrime = true
for (let i = 0; i < 100; i++) {
    if(i < 3){
        continue
    }
    for (let j = 2; j < i; j++) {
        if(i % j == 0) {
            isPrime = false         
        }
    }
    if(isPrime) {
        primeNumbers.push(i)
    }
    isPrime = true
}

console.log(primeNumbers)

//Develop a small script which generate array of 5 random numbers
let randomNumbers = []
for (let index = 0; index < 5; index++) {
  randomNumbers.push(Math.round(Math.random() * 5))
}

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

function GenerateRandNumber(limit) {
    return Math.round(Math.random() * limit)
}

let arrayOfUniqueNumbers = []
for (let index = 0; arrayOfUniqueNumbers.length < 6; index++) {
    let rand = GenerateRandNumber(100)
    if(arrayOfUniqueNumbers.includes(rand)){
        continue
    }
    arrayOfUniqueNumbers.push(rand)
}

console.log(arrayOfUniqueNumbers)

/*Develop a small script which generate a six characters random id:
5j2khz
*/
let characters = "abcdefgijklmnqprstuvwxyz0123456789"
let id = ""
for(let i = 0; i < 6; i++) {
    let randCharIndex = GenerateRandNumber(characters.length)
    let randomChar = characters[randCharIndex]
    id += randomChar
}
console.log(id)

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

/*Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/



/***************************************************** EXCERCISE 2 *****************************************************/