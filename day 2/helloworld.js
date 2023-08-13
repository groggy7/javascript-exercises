/***************************************************** EXCERCISE 1 *****************************************************/
//Declare a variable named challenge and assign it to an
//initial value '30 Days Of JavaScript'.
let challange = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log(challange)

//Print the length of the string on the
//browser console using console.log()
console.log(challange.length)

//Change all the string characters to 
//capital letters using toUpperCase() method
challange = challange.toUpperCase()
console.log(challange)

//Change all the string characters to 
//lowercase letters using toLowerCase() method
challange = challange.toLowerCase()
console.log(challange)

//Cut (slice) out the first word of the
//string using substr() or substring() method
challange = '30 Days Of JavaScript'
console.log(challange.substring(0,2))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challange.slice(3, 25))

//Check if the string contains a word Script using includes() method
console.log(challange.includes('Script'))

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challange.split())

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the
//string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))

//Change 30 Days Of JavaScript to 30 Days 
//Of Python using replace() method.
challange = challange.replace('JavaScript', 'Python')
console.log(challange)

//What is character at index 15 in  '30 Days Of JavaScript' 
//string? Use charAt() method.
console.log(challange.charAt(15))


challange = challange.replace('Python', 'JavaScript')
//What is the character code of J in '30 Days Of JavaScript' 
//string using charCodeAt()
console.log(challange.charCodeAt(11))

//Use indexOf to determine the position of the first occurrence
//of a in 30 Days Of JavaScript
console.log(challange.indexOf('a'))

//Use lastIndexOf to determine the position of the last 
//occurrence of a in 30 Days Of JavaScript.
console.log(challange.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word 'because'
//in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because
console.log(sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because
console.log(sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of
// a string.E.g ' 30 Days Of JavaScript '.
challange = ' 30 Days Of JavaScript '
challange = challange.trim()
console.log(challange)

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.startsWith('30 Days Of JavaScript'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challange.endsWith('30 Days Of JavaScript'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challange.match('a'))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let first = '30 Days of'
let second = ' JavaScript'

console.log(first.concat(second))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challange.repeat(2))
/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log(`Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- 
with charity you give love, so don't just give money but reach out your hand instead.`)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let val = '10'
console.log(val === 10)
val = parseInt(val)
console.log(val === 10)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = 9.8
console.log(parseFloat(float) == 10)
console.log(Math.round(float) == 10)

//Check if 'on' is found in both python and jargon
let python = 'python', jargon = 'jargon'
console.log(python.includes('on'))
console.log(jargon.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let snt = 'I hope this course is not full of jargon.'
console.log(snt.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
let rnd = Math.random() * 100
console.log(Math.round(rnd))

//Generate a random number between 50 and 100 inclusively.
let rnd2 = Math.round((Math.random() * 51) + 50)
console.log(rnd2)

//Generate a random number between 0 and 255 inclusively.
let rnd3 = Math.round(Math.random() * 256)
console.log(rnd3)

//Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
let rndchar = Math.round(Math.random() * 10)
console.log(js[rndchar])

//Use substr to slice out the phrase 'because because because' from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(31, 23))
/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/

//Count the number of word love in this sentence.
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' 

let love = `Love is the best thing in this world. Some found their love and some are still looking for their love.`
let pattern = /love/gi // g for searching in whole text, i for case insensitive
console.log(love.match(pattern))

//Use match() to count the number of all because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

sentence = 'You cannot end a sentence with because because because is a conjunction'
pattern = /because/gi
console.log(sentence.match(pattern))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regex = /[^\w\s,.]/g
const cleanedSentence = sentence2.replace(regex, "")
console.log(cleanedSentence)

//Calculate the total annual income of the person by extracting the numbers from the following text.
//'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salarySentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let digitPattern = /\d+/g
let numbers = salarySentence.match(digitPattern)
let sum = 0
for(let i = 0; i < numbers.length; i++)
{
    sum += parseInt(numbers[i])
}
console.log(sum)
