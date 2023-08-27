/***************************************************** EXCERCISE 1 *****************************************************/
//Create a closure which has one inner function
function outerFunc() {
    let count = 0
    function increment() {
        return ++count
    }
    return increment
}

let increase = outerFunc()
console.log(increase())
console.log(increase())    

/***************************************************** EXCERCISE 1 *****************************************************/


/***************************************************** EXCERCISE 2 *****************************************************/
//Create a closure which has three inner functions
function closure() {
    let width = 45, height = 34, length = 27

    function getWidth() {
        return width
    }

    function getHeight() {
        return height
    }

    function getLength() {
        return length
    }

    return {
        getWidth:getWidth(),
        getHeight:getHeight(),
        getLength:getLength()
    }
}

let innerFunctions = closure()

console.log(innerFunctions.getWidth)
console.log(innerFunctions.getHeight)
console.log(innerFunctions.getLength)
/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/
//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount() {
    let firstname, lastname, incomes, expenses

    function totalIncome(){

    }

    function totalExpense() {

    }

    function accountInfo() {

    }

    function addIncome() {

    }

    function addExpense() {
        
    }

    function accountBalance() {

    }

    return {
        totalIncome:totalIncome(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome:addIncome(),
        addExpense:addExpense(),
        accountBalance:accountBalance()
    }
}
/***************************************************** EXCERCISE 3 *****************************************************/