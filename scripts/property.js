let propertyAsk = document.createElement('article');
propertyAsk.setAttribute('class', 'propertyAsk');

let propertyName = document.createElement('h3');
propertyName.setAttribute('class', 'propertyName');
propertyName.innerText = propertyData[1][0];

// let propertyPrice = document.createElement('p');
// propertyPrice.setAttribute('class', 'propertyPrice');
// propertyPrice.innerText = propertyData[1][1];

let pPFather = document.createElement('span');
pPFather.setAttribute('class', 'pPFather');

let propertyPriceDescriptor = [];
let propertyPrice = [];

let pPDFather = document.createElement('span');
pPDFather.setAttribute('class', 'pPDFather');
let priceFather = document.createElement('span');
priceFather.setAttribute('class', 'priceFather');

for (let i = 1; i < 11; i++) {
    propertyPriceDescriptor[i] = document.createElement('div');
    propertyPrice[i] = document.createElement('p');

    propertyPrice[i].setAttribute('class', 'propertyPrice');
    propertyPriceDescriptor[i].setAttribute('class', 'propertyPrice');

    pPDFather.appendChild(propertyPriceDescriptor[i]);
    priceFather.appendChild(propertyPrice[i]);
}

propertyPriceDescriptor[1].innerText = "Rent:";
propertyPriceDescriptor[2].innerText = "1st House:";
propertyPriceDescriptor[3].innerText = "2nd House: ";
propertyPriceDescriptor[4].innerText = "3rd House: ";
propertyPriceDescriptor[5].innerText = "4th House: ";
propertyPriceDescriptor[6].innerText = "Hotel: ";
propertyPriceDescriptor[7].innerText = "Mortgage: ";
propertyPriceDescriptor[8].innerText = "House Purchase: ";
propertyPriceDescriptor[9].innerText = "Hotel Purchase: ";
propertyPriceDescriptor[10].innerText = "Cost: ";

propertyPrice[1].innerText = propertyData[1][1];
propertyPrice[2].innerText = propertyData[1][2];
propertyPrice[3].innerText = propertyData[1][3];
propertyPrice[4].innerText = propertyData[1][4];
propertyPrice[5].innerText = propertyData[1][5];
propertyPrice[6].innerText = propertyData[1][6];
propertyPrice[7].innerText = propertyData[1][7];
propertyPrice[8].innerText = propertyData[1][8];
propertyPrice[9].innerText = propertyData[1][9];
propertyPrice[10].innerText = propertyData[1][10];


pPFather.append(pPDFather, priceFather);

let propertyButtonFather = document.createElement('span');
propertyButtonFather.setAttribute('class', 'buttonFatherProp');

let buyPropButton = document.createElement('button');
buyPropButton.setAttribute('onclick', 'buyProperty()');
buyPropButton.classList.add('propertyButtons');
buyPropButton.innerText = "Buy Property";

let waivePropButton = document.createElement('button');
waivePropButton.setAttribute('onclick', 'waiveProp()');
waivePropButton.classList.add('propertyButtons');
waivePropButton.innerText = "Waive Property";

propertyButtonFather.append(buyPropButton, waivePropButton);
propertyAsk.append(propertyName, pPFather, propertyButtonFather);

function askProperty() {
    mainGame.appendChild(propertyAsk);
}

function waiveProp() {
    mainGame.removeChild(propertyAsk);
}

// function buyProperty() {
//     switch()
// }