let propertyAsk = document.createElement('article');
propertyAsk.setAttribute('class', 'propertyAsk');

let propertyName = document.createElement('h3');
propertyName.setAttribute('class', 'propertyName');
// Replace with loop/switch statement that appends name from gamedata.js to innerText

let propertyPrice = document.createElement('p');
propertyPrice.setAttribute('class', 'propertyPrice');
// Replace with loop/switch statement that appends values from gamedata.js to innerText

let propertyButtonFather = document.createElement('span');
propertyButtonFather.setAttribute('class', 'buttonFatherProp');

let buyPropButton = document.createElement('button');
buyPropButton.setAttribute('class', 'propertyButtons');
buyPropButton.innerText = "Buy Property";

let waivePropButton = document.createElement('button');
waivePropButton.setAttribute('onclick', 'waiveProp()');
waivePropButton.classList.add('propertyButtons');
waivePropButton.innerText = "Waive Property";

let leaveButton = document.createElement('button');
leaveButton.classList.add('testButton');
leaveButton.setAttribute('onclick', 'removeTest()');
leaveButton.innerText = "Leave Test";

propertyButtonFather.append(buyPropButton, waivePropButton);
propertyAsk.append(propertyName, propertyPrice, propertyButtonFather, leaveButton);

function askProperty() {
    mainGame.appendChild(propertyAsk);
}

// function buyProperty() {
//     switch()
// }

function removeTest() {
    mainGame.removeChild(propertyAsk);
}