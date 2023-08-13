/***************************************************** EXCERCISE 1 *****************************************************/

//Declare a function fullName and it print out your full name.

function fullName() {
    console.log("Serhat Kilbas")
}

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return firstName + " " + lastName
}

//Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(firstNum, lastNum) {
    return firstNum + lastNum
}

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    area = length * width
    return area
}

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). 
//Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    perimeter = 2 * (length + width)
    return perimeter
}

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
//Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
    volume = length * width * height
    return volume
}

/*
Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

*/

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

//Linear equation is calculated as follows: ax + by + c = 0. 
//Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c) => {
    if (a === 0 && b === 0) {
        throw new Error("Division by zero");
    }
  
    x = -c / a;
  
    y = -c / b;
  
    return [x, y];
}

/*
Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
    }
}

printArray([1,2,3,4])


/*
Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
*/

function showDateTime() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
  
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(now);
    console.log(formattedDateTime);
}
/*
function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
    
    console.log(formattedDateTime);
}
*/
showDateTime()


/*Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/

const swapValues = (x, y) => {
    let temp = y
    y = x
    x = temp

    return [x, y]
}

const [x, y] = swapValues(3, 4)

console.log(x, y)

/*
Declare a function name reverseArray. It takes array as a parameter and 
it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
['C', 'B', 'A']
*/

function reverseArray(array) {
    let reverseArray = []
    for(let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray
}

console.log(reverseArray([1,2,3,4,5]))

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

let capitalizedArray = (array) => {
    let capitalizedarray = []
    for (let i = 0; i < array.length; i++) {
        capitalizedarray[i] = String(array[i]).toUpperCase()
    }
    return capitalizedarray
}

const array = capitalizedArray(["a", "b", "c"])

console.log(array)

//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
    let items = ["item 1", "item 2"]
    items.push(item)
    console.log(items)
}

addItem("item 3")

/*
Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.

*/

/*
Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/

function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5))

/*
Writ a function which generates a randomUserIp.

Write a function which generates a randomMacAddress

Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/

/***************************************************** EXCERCISE 2 *****************************************************/

/***************************************************** EXCERCISE 3 *****************************************************/

/*
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). 
One of the input is the number of characters and the second input is 
the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/

/*const userIdGeneratedByUser = () => {
    const lenthOfID = parseInt(prompt("Enter the number of characters the id is expected to have."));
    const numberOfIDs = parseInt(prompt("How many IDs would you like to generate?"));
    const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    let IDs = [];
    for (let i = 0; i < numberOfIDs; i++) {
      let id = "";
      for (let j = 0; j < lenthOfID; j++) {
        id += characterSet[Math.floor(Math.random() * characterSet.length)];
      }
      IDs.push(id);
    }
  
    for (let i = 0; i < IDs.length; i++) {
      console.log(IDs[i]);
    }
}

userIdGeneratedByUser()
*/

/*
Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)

Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

Write a function arrayOfRgbColors which return any number of RGB colors in an array.

Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

*/

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = (array) => {
    const lenthOfArray = array.length
    var indices = []
    for (let i = 0; i < lenthOfArray; i++) {
        indices.push(i)
    }

    
    var shuffledArray = []
    for (let i = 0; i < lenthOfArray; i++) {
        let randomIndex = indices[Math.floor(Math.random() * array.length)]
        
        shuffledArray.push(array[randomIndex])
        array.splice(randomIndex, 1)
    } 
    return shuffledArray
}

const fisherYatesShuffle = (array) => {
    const lengthOfArray = array.length;
    for (let i = lengthOfArray - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}


let shuffledArray = shuffleArray([1,2,3,4,5,6])
console.log(shuffledArray)

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (number) => {
    let factorial = 1
    for (let i = 2; i <= number; i++) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(5))

/*
Call your function isEmpty, it takes a parameter and it checks if it is empty or not

Call your function sum, it takes any number of arguments and it returns the sum.

Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
Check if all the array items are number types. If not give return reasonable feedback.

Write a function called average, it takes an array parameter and returns the average of the items. 
Check if all the array items are number types. If not give return reasonable feedback.

*/

//Write a function called isPrime, which checks if a number is prime number.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    if (number == 2) {
        return true 
    }

    for (let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(97))

//Write a functions which checks if all items are unique in the array.

function isUniqueArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] == array[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isUniqueArray([1,2,3,4,5,6, 1])) //--> true
console.log(isUniqueArray([1,2,3,4,5,6, 1])) //--> false

//Write a function which checks if all the items of the array are the same data type.

function isSameDataType(array) {
    let j = 0
    for (let i = 1; i < array.length; i++) {
        if(typeof(array[0]) != typeof(array[i])) {
            return false
        }
    }
    return true
}

console.log(isSameDataType([1,1,1, false]))

//JavaScript variable name does not support special characters or symbols except $ or _. 
//Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(name) {
    let firstCharRegex = /^[a-zA-Z_\$]/
    if(!name[0].match(firstCharRegex)) {
        return false
    }
    return true
}

console.log(isValidVariable("_aasdasdad"))
/***************************************************** EXCERCISE 3 *****************************************************/