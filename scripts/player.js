//This makes the styling for the players. 
let players = [];
let turnIndicator = 0;
let playerIcon = document.createElement('span');
function playerCreation() {
    //Code below this creates the icons that appear on the top left side
    let playerBarIcon = [];
    let playerBoardIcon = [];
    for (let i = 0; i < PCSelect.value; i++) {
        playerBarIcon[i] = document.createElement('div');
        if (CharacterSelect1.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('frog');
            playerIcon.classList.add('active', 'frog');      
        }
        if (CharacterSelect2.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('dragon');
            playerIcon.classList.add('active', 'dragon');
        }
        if (CharacterSelect3.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('crab');
            playerIcon.classList.add('active', 'crab');
        }
        cell[0].appendChild(playerIcon);
        document.getElementById('playerIconBar').appendChild(playerBarIcon[i]);

        playerBoardIcon[i] = document.createElement('div');
    }
    //Code below creates each player and their data
    for (let i = 0; i < document.getElementById("PCSelect").value; i++) {
        players.push(player = {
            budget: startingBudget, //gives their starting budget 
            property: [], //determines the player's amount of owned properties
            doubles: 0, //counts the player's times they role doubles in a row
            jailed: false, //simple boolean of if player is in jail
            goCounter: 0, //counts how many times player passes go
            position: 0, //Determines what tile a player is on for all logic purposes. 
        })
    }
    console.log(players);
}

function playerTurnMovement() { //This is being called in "dice.js" line 9.
    // player position, data
    cell[players[turnIndicator].position].removeChild(playerIcon);
    console.log('Player position is ' + players[turnIndicator].position);
    console.log(`the dice say ${diceMove}`);
    //Moves the player both statistically and physically
    cell[(players[turnIndicator].position + diceMove) % 40].appendChild(playerIcon);
    players[turnIndicator].position = (players[turnIndicator].position + diceMove) % 40; 
    //Checks what tile the player is on: (property, chance, chest, etc)
    checkPlayerCurrentTile();
}

function checkPlayerCurrentTile() {
    
    if (players[turnIndicator].position != 2, 17, 33, 8, 22, 36, 5, 15, 25, 35, 4, 12, 28, 38) { //Add all the tiles that are not property ones.
        pP()
    } else if (players[turnIndicator].position = 2, 17, 33) { //Chest cards
        
    } else if (players[turnIndicator].position = 8, 22, 36) { //Chance cards

    } else if (players[turnIndicator].position = 5, 15, 25, 35) { //Transport tiles
        
    } else if (players[turnIndicator].position = 4, 12, 28, 38) {//Extra tiles

    } 
}

function currentPlayerBar() {
        // current player bar, html 
        console.log(playerName.value);
        let currentPlayerBar = document.getElementById('currentPlayerBar');
        currentPlayerBar.style.fontSize = (4 - (playerName.textContent.length / 10));
        console.log(currentPlayerBar.value);
        currentPlayerBar.innerText = playerName.value + "'s" + " " + "Turn";
}