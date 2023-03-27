if (players.goCounter == 4) {
    players.goCounter = 0;
    election();
}

let gameBoard = document.getElementById('gameBoard');
let nominee1;
let nominee2;
let timer;
function election() {
    let electionFather = document.createElement('article');
    electionFather.classList.add('electionFather');
    gameBoard.appendChild(electionFather);

    let nomineeFather = document.createElement('span');
    nomineeFather.classList.add('nomineeFather');
    electionFather.appendChild(nomineeFather);

    let nominee1 = document.createElement('div');
    nominee1.classList.add('nominee');
    nomineeFather.appendChild(nominee1);

    let nominee2 = document.createElement('div');
    nominee2.classList.add('nominee');
    nomineeFather.appendChild(nominee2);

    let descriptionFather = document.createElement('span');
    descriptionFather.classList.add('descriptionFather');
    electionFather.appendChild(descriptionFather);

    let nominee1Description = document.createElement('div');
    nominee1Description.classList.add('nomineeDescription');
    descriptionFather.appendChild(nominee1Description);

    let nominee2Description = document.createElement('div');
    nominee2Description.classList.add('nomineeDescription');
    descriptionFather.appendChild(nominee2Description);

let selectedNominee;

    nominee1Description.addEventListener('click', (e) => {
        confirmVoteButton.innerText = "Confirm vote for " + nominee1.className.toUpperCase() + "?";
        selectedNominee = 1;
    });

    nominee2Description.addEventListener('click', (e) => {
        confirmVoteButton.innerText = "Confirm vote for " + nominee2.className.toUpperCase() + "?";
        selectedNominee = 2;
    });

    let confirmVoteButton = document.createElement('div');
    confirmVoteButton.innerText = "Click to Confirm Vote";
    confirmVoteButton.classList.add('voteConfirm');
    electionFather.appendChild(confirmVoteButton);
    /* if given extra time add animation for holding down 
    confirm vote button*/
    confirmVoteButton.addEventListener('click', (e) => {
        gameBoard.removeChild(electionFather);
    })

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
            nominee1.classList.add('ziokalski');
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
            nominee2.classList.add('ziokalski');
            break;
        case 7:
            nominee2.classList.add('ghosoph');
            break;
    }
}

// function electionOver() {
//     nominee1.classList.remove
// }