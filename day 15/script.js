/***************************************************** EXCERCISE 1 *****************************************************/

//Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getAnimalInfo() {
        return `${this.name} is ${this.age} years old. It is ${this.color} and has ${this.legs} legs`
    }

    get getName() {
        return this.name
    }

    get getAge() {
        return this.age
    }
}

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }
}

let golden = new Dog("John", 3, "golden", 4)
console.log(golden.getAge)
console.log(golden.getAnimalInfo())
let vanKedisi = new Cat("Badem", 2, "white", 4)
console.log(vanKedisi.getName)
/***************************************************** EXCERCISE 1 *****************************************************/

/***************************************************** EXCERCISE 2 *****************************************************/
//Override the method you create in Animal class

/*
class Dog extends Animal{
    constructor(name, age, color, legs) {
        super(name, age, color, legs)
    }

    getAnimalInfo() {
        return `${this.name} is ${this.age} years old dog. It is ${this.color} and has ${this.legs} legs`
    }
}*/
/***************************************************** EXCERCISE 2 *****************************************************/


/***************************************************** EXCERCISE 3 *****************************************************/

//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = new Map()
        this.expenses = new Map()
    }

    totalIncome() {
        let total = 0
        for (const income of this.incomes.values()) {
            total += income
        }
        return total
    }

    totalExpense() {
        let total = 0
        for (const expense of this.expenses.values()) {
            total += expense
        }
        return total
    }

    accountInfo() {
        return `Account owner is: ${this.firstName}` + " " + `${this.lastName}\n`
        + `Account balance is ${this.accountBalance()}`
    }

    addIncome(description, amount) {
        this.incomes.set(description, amount)
    }

    addExpense(description, amount) {
        this.expenses.set(description, amount)
    }

    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
}

let account0 = new PersonAccount("Serhat", "Hakeri")
account0.addIncome("house rents", 15000)
account0.addIncome("salary", 35000)

account0.addExpense("kitchen", 5000)
account0.addExpense("bills", 1500)

console.log(account0.accountBalance())
console.log(account0.accountInfo())