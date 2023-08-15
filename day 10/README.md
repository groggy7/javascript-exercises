Set
Set is a collection of elements. Set can only contains unique elements.

const companies = new Set()
console.log(companies)
--> Set(0) {}

Creating set from array
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
Set(4) {"English", "Finnish", "French", "Spanish"}


Set is an iterable object and we can iterate through each elements.

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}
  English
  Finnish
  French
  Spanish


Adding an element to a set

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}


We can also use loop to add element to a set.

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

Deleting an element a set
We can delete an element from a set using a delete method.

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

Checking an element in the set
The has method can help to know if a certain element exists in a set.

console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true


Clearing the set
It removes all the elements from a set.

companies.clear()
console.log(companies)
Set(0) {}
