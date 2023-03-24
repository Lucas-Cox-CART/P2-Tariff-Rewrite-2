if (players.goCounter == 4) {
    players.goCounter = 0;
    election();
}

let gameBoard = document.getElementById('gameBoard');
let nominee1;
let nominee2;
function election() {
    let electionFather = document.createElement('article');
    electionFather.classList.add('electionFather');
    gameBoard.appendChild(electionFather);

    let nominee1 = document.createElement('div');
    nominee1.classList.add([replace_me]);
    electionFather.appendChild(nominee1);

    let nominee2 = document.createElement('div');
    nominee2.classList.add([replace_me]);
    electionFather.appendChild(nominee2);

    let nominee1Math = Math.round(Math.random() * 7);
    let nominee2Math = Math.round(Math.random() * 7);

    switch(nominee1Math) {
        case 0:
            nominee1.classList.add('kirk');
            break;
        case 1:
            nominee1.classList.add('olsen');
            break;
        case 2:
            nominee1.classList.add('ethan');
            break;
        case 3:
            nominee1.classList.add('pettit');
            break;
        case 4:
            nominee1.classList.add('cox');
            break;
        case 5:
            nominee1.classList.add('peters');
            break;
        case 6:
            nominee1.classList.add('ziow');
            break;
        case 7:
            nominee1.classList.add('ghosoph');
            break;
    }
    switch(nominee2Math) {
        case 0:
            nominee2.classList.add('kirk');
            break;
        case 1:
            nominee2.classList.add('olsen');
            break;
        case 2:
            nominee2.classList.add('ethan');
            break;
        case 3:
            nominee2.classList.add('pettit');
            break;
        case 4:
            nominee2.classList.add('cox');
            break;
        case 5:
            nominee2.classList.add('peters');
            break;
        case 6:
            nominee2.classList.add('ziow');
            break;
        case 7:
            nominee2.classList.add('ghosoph');
            break;
    }
}

function electionOver() {
    nominee1.classList.remove
}