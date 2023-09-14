let colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown"];
let i = 0

const header = document.createElement('div')
header.innerHTML = 'Serhat Hakeri challenges in <span id="year">2020</>'
header.style.fontSize = '25px'
header.style.textAlign = 'center'
document.body.appendChild(header)
const yearElement = document.getElementById('year')
yearElement.style.fontWeight = 'bold'
setInterval(function() {
    if (i > colors.length) {
        i = 0
    }
    yearElement.style.color = colors[i]
    i++
}, 1000)

yearElement.style.fontSize = '60px'

const challange = document.createElement('div')
challange.innerText = '30DaysOfJavascript Challange'
challange.style.textAlign = 'center'
challange.style.textDecoration = 'underline'
challange.style.fontSize = '18px'
challange.style.marginBottom = '8px'
document.body.appendChild(challange)

const today = new Date();
const formattedDate = today.toLocaleString({
  day: 'long',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

const dateElement = document.createElement('div')
dateElement.textContent = `${formattedDate}`
dateElement.style.textAlign = 'center'
dateElement.style.width = '250px'
dateElement.style.margin = '0 auto 0 auto'
dateElement.style.padding = '5px 0 5px 0'
document.body.appendChild(dateElement)

setInterval(function () {
    if (i > colors.length) {
        i = 0
    }
    dateElement.style.backgroundColor = colors[i]
    i++
}, 1000)

const techContainer = document.createElement('div')
techContainer.style.width = '800px'
techContainer.style.margin = '20px auto 0 auto'
document.body.appendChild(techContainer)

import {asabenehChallenges2020} from '../data/challanges_info.js'

let challenges = asabenehChallenges2020.challenges

for (let i = 0; i < challenges.length; i++) {
    let techBox = document.createElement('div')
    techBox.style.display = 'flex';
    techBox.style.height = '30px';
    techBox.style.justifyContent = 'space-between';
    techBox.style.padding = '20px 10px 10px 10px';
    techBox.style.marginBottom = '4px';

    let currentTech = challenges[i]

    if (currentTech.status === 'Done') {
        techBox.style.backgroundColor = 'green'
    } else if(currentTech.status === 'Ongoing') {
        techBox.style.backgroundColor = 'yellow'
    } else {
        techBox.style.backgroundColor = 'red'
    }

    let name = currentTech.name
    let status = currentTech.status

    let challenge = document.createElement('span')
    let details = document.createElement('details')
    let summary = document.createElement('p')
    let statusSpan = document.createElement('span')

    challenge.innerText = name
    summary.innerText = currentTech.topics
    details.appendChild(summary)
    statusSpan.innerText = status

    challenge.style.textAlign = 'center';
    challenge.style.textDecoration = 'underline'
    details.style.textAlign = 'center';
    statusSpan.style.textAlign = 'center';

    techBox.append(challenge, details, statusSpan)

    techContainer.appendChild(techBox)
}

document.body.appendChild(techContainer)

let authorInfo = document.createElement('div')
authorInfo.textContent = `${asabenehChallenges2020.author.firstName} 
${asabenehChallenges2020.author.lastName}`
authorInfo.style.textAlign = 'center'
authorInfo.style.marginTop = '10px'
authorInfo.style.fontSize = '25px'
authorInfo.style.fontWeight = 'bold'
document.body.appendChild(authorInfo)

const fontAwesomeScript = document.createElement('script');

fontAwesomeScript.src = 'https://kit.fontawesome.com/f5859b80e0.js';
fontAwesomeScript.crossOrigin = 'anonymous';

document.head.appendChild(fontAwesomeScript);

let socialLinks = document.createElement('div')
socialLinks.style.textAlign = 'center'
socialLinks.style.margin = '10px'

let linkedin = document.createElement('a')
linkedin.href = 'https://www.linkedin.com/in/serhat-kilbas'
linkedin.target = '_blank'
linkedin.style.color = 'black'
linkedin.style.marginRight = '10px'
let linkedinIcon = document.createElement('i');
linkedinIcon.className = 'fa-brands fa-linkedin fa-2xl';

linkedin.appendChild(linkedinIcon)

let twitter = document.createElement('a')
twitter.href = 'https://www.twitter.com'
twitter.target = '_blank'
twitter.style.color = 'black'
twitter.style.marginRight = '10px'
let twitterIcon = document.createElement('i');
twitterIcon.className = 'fa-brands fa-square-twitter  fa-2xl';

twitter.appendChild(twitterIcon);

let github = document.createElement('a')
github.href = 'https://www.github.com'
github.target = '_blank'
github.style.color = 'black'

let githubIcon = document.createElement('i');
githubIcon.className = 'fa-brands fa-square-github  fa-2xl';

github.appendChild(githubIcon);

socialLinks.append(linkedin, twitter, github)
document.body.appendChild(socialLinks)


let info = document.createElement('div')
info.textContent = asabenehChallenges2020.author.bio
info.style.textAlign = 'center'
info.style.width = '800px'
info.style.margin = '20px auto'
document.body.appendChild(info)


let authorBox = document.createElement('div')
authorBox.style.width = '800px'
authorBox.style.margin = 'auto'
document.body.appendChild(authorBox)

let titleBox = document.createElement('div')
titleBox.style.height = '150px'
titleBox.style.float = 'left'
titleBox.style.width = '30%'
authorBox.appendChild(titleBox)
let titleList = asabenehChallenges2020.author.titles

let title = document.createElement('div')
title.innerHTML = 'Titles<br>'
title.style.fontWeight = 'bold'
title.style.margin = '3px'
titleBox.appendChild(title)

for (let i = 0; i < titleList.length; i++) {
    titleBox.innerHTML += titleList[i][0] + ' ' + titleList[i][1] + '<br>'    
}

let skillsBox = document.createElement('div')
skillsBox.style.height = '150px'
skillsBox.style.float = 'left'
skillsBox.style.width = '30%'
authorBox.appendChild(skillsBox)
let skillsList = asabenehChallenges2020.author.skills

let skillsTitle = document.createElement('div')
skillsTitle.innerHTML = 'Skills<br>'
skillsTitle.style.fontWeight = 'bold'
skillsTitle.style.margin = '3px'
skillsBox.appendChild(skillsTitle)

for (let i = 0; i < skillsList.length; i++) {
    let checkBox = document.createElement('input')
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "checklist-item-checkbox")
    checkBox.setAttribute("checked", true)
    checkBox.setAttribute('color', 'green')
    skillsBox.appendChild(checkBox)
    
    skillsBox.innerHTML += skillsList[i] + '<br>'
}


let qualificationsBox = document.createElement('div')
qualificationsBox.style.height = '150px'
qualificationsBox.style.float = 'right'
authorBox.appendChild(qualificationsBox)
let qualifications = asabenehChallenges2020.author.qualifications

let qualificationsTitle = document.createElement('div')
qualificationsTitle.innerHTML = 'Qualifications<br>'
qualificationsTitle.style.fontWeight = 'bold'
qualificationsTitle.style.margin = '3px'
qualificationsBox.appendChild(qualificationsTitle)

let bookIcon = document.createElement('i')
bookIcon.className = 'fa-sharp fa-book-open'

let studentIcon = document.createElement('div')
studentIcon.className = "fa-solid fa-graduation-cap"

for (let i = 0; i < qualifications.length; i++) {
    if(i == 0) {
        qualificationsBox.appendChild(bookIcon)
        qualificationsBox.innerHTML += qualifications[i] + '<br>'
    } else {
        qualificationsBox.appendChild(studentIcon)
        qualificationsBox.innerHTML += qualifications[i] + '<br>'
    }

}