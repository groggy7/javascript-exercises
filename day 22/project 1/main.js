/*
Create a div container on HTML document and create 100 to 100 numbers
dynamically and append to the container div.

Even numbers background is green
Odd numbers background is yellow

Prime numbers background is red
*/
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

const div = document.createElement('div');
div.innerHTML = 'Number Generator';
div.style.textAlign = 'center';
div.style.fontSize = '30px';
div.style.fontWeight = 'bold';
document.body.appendChild(div);

const numbersArray = [];

for (let i = 0; i <= 101; i++) {
    numbersArray.push(i);
}

const container = document.createElement('div'); // Create a container div
container.style.display = 'flex'; // Apply flex to the container
container.style.flexWrap = 'wrap'; // Allow items to wrap to the next line

for (let i = 0; i < numbersArray.length; i++) {
    const numberBox = document.createElement('div');
    numberBox.innerHTML = numbersArray[i];
    numberBox.style.fontSize = '35px';
    numberBox.style.width = '100px';
    numberBox.style.height = '100px';
    numberBox.style.color = 'white';
    numberBox.style.textAlign = 'center';
    numberBox.style.margin = '2px';
    numberBox.style.padding = 'auto 10px';

    if (isPrime(i)) {
        numberBox.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
        numberBox.style.backgroundColor = '#48bf19';
    } else {
        numberBox.style.backgroundColor = '#d1de1b';
    }

    // Apply Flexbox centering to each numberBox
    numberBox.style.display = 'flex';
    numberBox.style.justifyContent = 'center';
    numberBox.style.alignItems = 'center';

    container.appendChild(numberBox); // Add the numberBox to the container
}

document.body.appendChild(container); // Add the container to the body
