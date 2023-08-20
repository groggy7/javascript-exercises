try {
    let firstName = "Serhat"
    let fullname = firstName + " " + lastName
} catch (error) {
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log("This line will be executed regardless of errors.")
}

let number = prompt("Enter a number: ")

try {
    if(number === '') throw new Error('empty')
    if(isNaN(number)) throw new Error('not a number')
    if(number > 5) throw new Error('too high')
} catch (err) {
    console.log(err.name)
    console.log(err.message)
}