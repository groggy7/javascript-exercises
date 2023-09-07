//The year color is changing every 1 second
let colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown"];
let i = 0
element = document.getElementById('year')
setInterval(function() {
    if (i > colors.length) {
        i = 0
    }
    
    element.style.color = colors[i]
    i++
}, 1000)

element.style.fontSize = '60px'
//The date and time background color is changing every 1 seconds
const today = new Date();
const formattedDate = today.toLocaleString({
  day: 'long',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

const newElement = document.createElement('h3')
newElement.textContent = `${formattedDate}`
newElement.style.width = '250px'
newElement.style.display = 'inline-block'
const parentElement = document.querySelector('li')
parentElement.parentNode.insertBefore(newElement, parentElement)

setInterval(function () {
    if (i > colors.length) {
        i = 0
    }
    
    newElement.style.backgroundColor = colors[i]
    i++
}, 1000)

//Completed challenge has background green
let firstListElement = document.querySelector('li')
firstListElement.classList.add('completed')

const listElements = document.querySelectorAll('li')
listElements.forEach(element => {
    if (element.classList.contains('completed')) {
        element.style.backgroundColor = 'green'
    }
});

//Ongoing challenge has background yellow
listElements[1].classList.add('ongoing')
listElements.forEach(element => {
    if (element.classList.contains('ongoing')) {
        element.style.backgroundColor = 'yellow'
    }
});

//Coming challenges have background red
for (let i = 2; i < listElements.length; i++) {
    listElements[i].classList.add('coming')
}

listElements.forEach(element => {
    if (element.classList.contains('coming')) {
        element.style.backgroundColor = 'red'
    }
});
