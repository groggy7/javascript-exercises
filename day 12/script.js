/***************************************************** EXCERCISE 1 *****************************************************/

//Calculate the total annual income of the person from the following text. 
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let sentence = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
let incomes = sentence.match(/\d+/g)
let netSalary = 0
for (let i = 0; i < incomes.length; i++) {
    netSalary += parseInt(incomes[i]);
}
console.log(netSalary)

/*The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 
0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/
let s = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 
0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.`
let points = s.match(/-?\d+/g)
let sortedPoints = points.sort((a, b) => a - b)
console.log(sortedPoints[sortedPoints.length - 1] - sortedPoints[0])

/*
Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/

let validVarPAttern = /^[a-zA-Z_$]+$/gi

function is_valid_variable(varName) {
    console.log(validVarPAttern.test("first-name"))
}
is_valid_variable("first-name")

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

/*
Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you
do not love something which can give you all the capabilities to develop an application what else can you love.`

console.log(tenMostFrequentWords(paragraph, 10))
[
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
]
*/

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you
do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph) {
    let pattern = /\w+/gi
    let words = paragraph.match(pattern)
    
    let wordCountList = words.reduce((acc, word) => {
        let existingObject = acc.find(item => item.word === word)
        existingObject ? existingObject.count++ : acc.push({word: word, count: 1})
        return acc
    }, [])
    
    let sortedArray = wordCountList.sort((a, b) => {
        return b.count - a.count
    })
    return sortedArray.slice(0,10)
}

console.log(tenMostFrequentWords(paragraph))

/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/

/*
Write a function which cleans text. Clean the following text. 
After cleaning, count three most frequent words in the string.

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. 
;I found tea@ching m%o@re interesting tha@n any other %jo@bs. 
%Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

console.log(cleanText(sentence))
I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people 
I found teaching more interesting than any other jobs Does this motivate you to be a teacher
*/
function cleanText(sentence) {
    let cleaningPattern = /[%@;$&#]/gi

    let cleanedSnt = sentence.replace(cleaningPattern, "").replace(/\s+/g, " ") 
    // replace one or more whitespaces with only one.
    return cleanedSnt
}

let snt = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. 
;I found tea@ching m%o@re interesting tha@n any other %jo@bs. 
%Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

cleanText(snt)


/*
2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

console.log(mostFrequentWords(cleanedText))

[
    {word:'I', count:3}, 
    {word:'teaching', count:2}, 
    {word:'teacher', count:2}
]
*/
function findMostFrequentWords(cleanedText) {
    let pattern = /\w+/gi // or /[a-zA-Z0-9]/gi
    let words = cleanedText.match(pattern)

    let wordCountList = words.reduce((acc, word) => {
        let existingObject = acc.find(item => item.word === word)
        existingObject ? existingObject.count++ : acc.push({word: word, count: 1})
        return acc
    }, [])

    let sortedList = wordCountList.sort((a, b) => {
        return b.count - a.count
    })
    return sortedList.slice(0, 3)
}

console.log(findMostFrequentWords(cleanText(snt)))


/***************************************************** EXCERCISE 3 *****************************************************/
