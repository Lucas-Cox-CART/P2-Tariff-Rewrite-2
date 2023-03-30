let propertyAsk = document.createElement('article');
propertyAsk.setAttribute('class', 'propertyAsk');

let propertyName = document.createElement('h3');
propertyName.setAttribute('class', 'propertyName');
propertyName.innerText = propertyData[0][0];
// switch() {
//     case 0:
//         propertyName.innerText = propertyData[0][0];
//         break;
//     case 1:
//         propertyName.innerText = propertyData[1][0];
//         break;
//     case 2:
//         propertyName.innerText = propertyData[2][0];
//         break;
//     case 3:
//         propertyName.innerText = propertyData[3][0];
//         break;
//     case 4:
//         propertyName.innerText = propertyData[4][0];
//         break;
//     case 5:
//         propertyName.innerText = propertyData[5][0];
//         break;
//     case 6:
//         propertyName.innerText = propertyData[6][0];
//         break;
//     case 7:
//         propertyName.innerText = propertyData[7][0];
//         break;
//     case 8:
//         propertyName.innerText = propertyData[8][0];
//         break;
//     case 9:
//         propertyName.innerText = propertyData[9][0];
//         break;
//     case 10:
//         propertyName.innerText = propertyData[10][0];
//         break;
//     case 11:
//         propertyName.innerText = propertyData[11][0];
//         break;
//     case 12:
//         propertyName.innerText = propertyData[12][0];
//         break;
//     case 13:
//         propertyName.innerText = propertyData[13][0];
//         break;
//     case 14:
//         propertyName.innerText = propertyData[14][0];
//         break;
//     case 15:
//         propertyName.innerText = propertyData[15][0];
//         break;
//     case 16:
//         propertyName.innerText = propertyData[16][0];
//         break;
//     case 17:
//         propertyName.innerText = propertyData[17][0];
//         break;
    
// }

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

propertyPrice[1].innerText = propertyData[0][1];
propertyPrice[2].innerText = propertyData[0][2];
propertyPrice[3].innerText = propertyData[0][3];
propertyPrice[4].innerText = propertyData[0][4];
propertyPrice[5].innerText = propertyData[0][5];
propertyPrice[6].innerText = propertyData[0][6];
propertyPrice[7].innerText = propertyData[0][7];
propertyPrice[8].innerText = propertyData[0][8];
propertyPrice[9].innerText = propertyData[0][9];
propertyPrice[10].innerText = propertyData[0][10];


pPFather.append(pPDFather, priceFather);

let propertyButtonFather = document.createElement('span');
propertyButtonFather.setAttribute('class', 'buttonFatherProp');

let buyPropButton = document.createElement('button');
buyPropButton.setAttribute('onclick', 'buyProperty()');
buyPropButton.classList.add('propertyButtons');
buyPropButton.innerText = "Buy Property";

let waivePropButton = document.createElement('button');
waivePropButton.setAttribute('onclick', 'waiveProperty()');
waivePropButton.classList.add('propertyButtons');
waivePropButton.innerText = "Waive Property";

propertyButtonFather.append(buyPropButton, waivePropButton);
propertyAsk.append(propertyName, pPFather, propertyButtonFather);

function askProperty() {
    mainGame.appendChild(propertyAsk);
}

let propertyOfHolder = [];
let propertyHeadOfHolder = [];
function hideProp() {
    for (let i = 0; i < 26; i++) {
        propertyOfHolder[i] = document.getElementById(`property${[i]}`);
        propertyHeadOfHolder[i] = document.getElementById(`propertyHead${[i]}`);
        propertyOfHolder[i].style.display = "none";
    }
}

function buyProperty() {
    mainGame.removeChild(propertyAsk);
    propertyOfHolder[0].style.display = "flex";
    rentUpdate();

    propertyHeadOfHolder[0].style.backgroundColor = "brown";
    propertyHeadOfHolder[1].style.backgroundColor = "brown";
    propertyHeadOfHolder[2].style.backgroundColor = "";
    propertyHeadOfHolder[3].style.backgroundColor = "lightblue";
    propertyHeadOfHolder[4].style.backgroundColor = "lightblue";
    propertyHeadOfHolder[5].style.backgroundColor = "lightblue";
    propertyHeadOfHolder[6].style.backgroundColor = "rebeccapurple";
    propertyHeadOfHolder[7].style.backgroundColor = "rebeccapurple";
    propertyHeadOfHolder[8].style.backgroundColor = "rebeccapurple";
    propertyHeadOfHolder[9].style.backgroundColor = "";
    propertyHeadOfHolder[10].style.backgroundColor = "orange";
    propertyHeadOfHolder[11].style.backgroundColor = "orange";
    propertyHeadOfHolder[12].style.backgroundColor = "orange";
    propertyHeadOfHolder[13].style.backgroundColor = "red";
    propertyHeadOfHolder[14].style.backgroundColor = "red";
    propertyHeadOfHolder[15].style.backgroundColor = "red";
    propertyHeadOfHolder[16].style.backgroundColor = "";
    propertyHeadOfHolder[17].style.backgroundColor = "yellow";
    propertyHeadOfHolder[18].style.backgroundColor = "yellow";
    propertyHeadOfHolder[19].style.backgroundColor = "yellow";
    propertyHeadOfHolder[20].style.backgroundColor = "greenyellow";
    propertyHeadOfHolder[21].style.backgroundColor = "greenyellow";
    propertyHeadOfHolder[22].style.backgroundColor = "greenyellow";
    propertyHeadOfHolder[23].style.backgroundColor = "";
    propertyHeadOfHolder[24].style.backgroundColor = "cornflowerblue";
    propertyHeadOfHolder[25].style.backgroundColor = "cornflowerblue";
}

function waiveProperty() {
    mainGame.removeChild(propertyAsk);
}

function rentUpdate() {
    let propertyCurrentRent = [];

    for (let i = 0; i < 26; i++) {
        propertyCurrentRent[i] = {
            root: document.getElementById(`propertyCurrentRent${[i]}`),
            houses: 0
        };
    }

    
    switch(propertyCurrentRent[0].houses) {
        case 0:
            propertyCurrentRent[0].root.innerText = propertyData[0][1].toLocaleString();
            break;
        case 1:
            propertyCurrentRent[0].root.innerText = propertyData[0][2].toLocaleString();
            break;
        case 2:
            propertyCurrentRent[0].root.innerText = propertyData[0][3].toLocaleString();
            break;
        case 3:
            propertyCurrentRent[0].root.innerText = propertyData[0][4].toLocaleString();
            break;
        case 4:
            propertyCurrentRent[0].root.innerText = propertyData[0][5].toLocaleString();
            break;
        case 5:
            propertyCurrentRent[0].root.innerText = propertyData[0][6].toLocaleString();
            break;
    }
}