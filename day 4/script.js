/***************************************************** EXCERCISE 1 *****************************************************/

/*
Get user input using prompt(“Enter your age:”). If user is 18 or older, give feedback:
'You are old enough to drive' but if not 18 give another feedback stating to wait for
the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

let age = prompt("Enter your age:")
if (age >= 18) {
    alert("You are old enough to drive.")
} else {
    alert(`You are left with ${18 - age} years to drive.`)
}

/*
Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
//.........


/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in two ways:

-->using if else
-->ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/

let a = 4
let b = 3
//solution 1:
if (a > b) {
    return 'a is greater than b'
} else {
    return 'a is less than b'
}

//solution 2:
a > b ? console.log('a is greater than b') : console.log('a is less than b')


/*
Even numbers are divisible by 2 and the remainder is zero. How do you check,
if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

let num = prompt("Enter a number")

if(num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/

/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

let score = 43
let grade
switch (score) {
    case score >= 0 && score <= 49 :
        grade = "F"
        break;
    case score >= 50 && score <= 59:
        grade = "D"
        break;
    case score >= 60 && score <= 69:
        grade = "C"
        break;
    case score >= 70 && score <= 79:
        grade = "B"
        break;
    case score >= 80 && score <= 100:
        grade = "A"
        break;
    default:
        break;
}

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let month = prompt("What's the month?")
let season
switch (month) {
    case month == "September" || month == "October" || month == "November":
        season = "Autumn"
        break;
    case month == "December" || month == "January" || month == "February":
        season = "Winter"
        break;
    case month == "March" || month == "April" || month == "May":
        season = "Spring"
        break;
    case month == "June" || month == "July" || month == "August":
        season = "Summer"
        break;    
    default:
        break;
}

/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/

/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/



//Write a program which tells the number of days in a month, now consider leap year.



