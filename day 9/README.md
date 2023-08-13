Higher Order Function
Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

Callback
A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))

///////////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

-->The above example can be simplified as follows:

const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
15

///////////////////////////////////////////////////////////////////////////////////////////////////////

Setting Interval using a setInterval function
In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s


Setting a time using a setTimeout
In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

///////////////////////////////////////////////////////////////////////////////////////////////////////

Functional Programming
Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

forEach
forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

1
2
3
4
5
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
15

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND

///////////////////////////////////////////////////////////////////////////////////////////////////////

map
map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
[1, 4, 9, 16, 25]

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

///////////////////////////////////////////////////////////////////////////////////////////////////////

filter
Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
['Finland', 'Ireland']

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
['Albania', 'Bolivia','Ethiopia']

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
['Japan', 'Kenya']

///////////////////////////////////////////////////////////////////////////////////////////////////////

reduce
reduce: Reduce takes a callback function. The callback function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

***********************************************************************************************************
The reduce() function can accept a callback function with up to four parameters:

Accumulator (acc): The value that accumulates as the function iterates through the array.
Current Value (currentValue): The current element being processed in the array.
Current Index (currentIndex): The index of the current element being processed.
Source Array (array): The array that reduce() is being called upon.
***********************************************************************************************************

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // Output: 15

numbers.reduce((acc, cur) => acc + cur, 0) applies the reduce method to the numbers array. The callback function takes two parameters:

acc: This stands for "accumulator" and holds the accumulated value throughout the iteration.
cur: This is the current element being processed in the array.
(acc, cur) => acc + cur is the callback function. It adds the current element (cur) to the accumulator (acc). The result of this addition becomes the new value of the accumulator for the next iteration.

0 is the initial value of the accumulator. If this parameter is not provided, the first element of the array is used as the initial value. In this case, we explicitly provide 0 as the initial value.

As the reduce method iterates through each element in the numbers array, it adds the current element to the accumulator. The final result is the sum of all elements: 1 + 2 + 3 + 4 + 5 = 15.

///////////////////////////////////////////////////////////////////////////////////////////////////////

every
every: Check if all the elements are similar in one aspect. It returns boolean

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)
true

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true
true

///////////////////////////////////////////////////////////////////////////////////////////////////////

find
find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
18
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
Asabeneh

///////////////////////////////////////////////////////////////////////////////////////////////////////

findIndex
findIndex: Return the position of the first element which satisfies the condition

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

///////////////////////////////////////////////////////////////////////////////////////////////////////

some
some: Check if some of the elements are similar in one aspect. It returns boolean

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false

///////////////////////////////////////////////////////////////////////////////////////////////////////

sort
sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings. This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

***Sorting string values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted


***Sorting Numeric values
As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})
the elements are treated as strings when sorting without a comparison function, the result is not the expected numeric order.

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
return a - b; in the comparison function sorts the array in ascending numerical order. It subtracts b from a, and if the result is negative, a comes before b in the sorted array.


***Sorting Object Arrays
Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]