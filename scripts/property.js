let propertyAsk = document.createElement('article');
propertyAsk.setAttribute('class', 'propertyAsk');

let propertyName = document.createElement('h3');
propertyName.setAttribute('class', 'propertyName');
// Replace with loop/switch statement that appends name from gamedata.js to innerText
propertyName.innerText = "Chump Tower";

let propertyPrice = document.createElement('p');
propertyPrice.setAttribute('class', 'propertyPrice');
// Replace with loop/switch statement that appends values from gamedata.js to innerText
propertyPrice.innerText = "Ü100,000";

let buyPropButton = document.createElement('button');
buyPropButton.setAttribute('class', 'testButton');

let waivePropButton = document.createElement('button');
waivePropButton.setAttribute('class', 'testButton');

let leaveButton = document.createElement('button');
leaveButton.classList.add('testButton');
leaveButton.setAttribute('onclick', 'removeTest()');
leaveButton.innerText = "Leave Test";

propertyAsk.append(propertyName, propertyPrice, buyPropButton, waivePropButton, leaveButton);

function askProperty() {
    mainGame.appendChild(propertyAsk);
}

// function buyProperty() {
//     switch()
// }

function removeTest() {
    mainGame.removeChild(propertyAsk);
}