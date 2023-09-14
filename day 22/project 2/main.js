//Use the countries array to display all the countries.See the design

//header
const header = document.createElement('div')
header.innerText = 'WORLD COUNTRIES LIST'
header.style.textAlign = 'center'
header.style.fontSize = '50px'
header.style.fontWeight = 'bold'
header.style.letterSpacing = '8px'
document.body.appendChild(header)

import { countries } from './countries.js'
const count = document.createElement('div')
count.innerText = `Total Number of countries: ${countries.length}`
count.style.textAlign = 'center'
count.style.fontSize = '20px'
count.style.fontWeight = 'bold'
document.body.appendChild(count)

const projectInfo = document.createElement('div')
projectInfo.innerText = '30DaysOfJavascript DOM-Day-2\nAuthor Serhat Hakeri'
projectInfo.style.textAlign = 'center'
document.body.appendChild(projectInfo)

//countries
const countryContainer = document.createElement('div')
countryContainer.style.margin = '100px 250px auto 250px'

for (let i = 0; i < countries.length; i++) {
    let countryBox = document.createElement('div')
    countryBox.innerText = countries[i].toUpperCase()
    countryBox.style.fontWeight = 'bold'
    countryBox.style.display = 'inline-block'
    countryBox.style.width = 'calc(100% / 6)'
    countryBox.style.height = '100px'
    countryBox.style.textAlign = 'center'
    countryBox.style.whiteSpace = 'pre-wrap';
    countryContainer.appendChild(countryBox)
}

document.body.appendChild(countryContainer)