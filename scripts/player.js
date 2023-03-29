//This makes the styling for the players. 
let players = [];
let turnIndicator = 0;

const playerIconData = [
    'P0','P1','P2','P3', 'P4', 'P5', 'P6', 'P7'
];

//Essentially, turnIndicator = 1 is for statistics
//turnIcon = whoever player's turn's icon it is. 

// cell[players[turnIndicator].position].removeChild(turnIcon);
// cell[(players[turnIndicator].position + diceMove) % 40].appendChild(turnIcon);
//This is what it should look like ^

let playerIcon = [document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span')]
// document.createElement('span');

function playerCreation() {
    //Code below this creates the icons that appear on the top left side
    let playerBarIcon = [];
    let playerBoardIcon = [];

    //Creates the players, and their statistics
    for (let i = 0; i < document.getElementById("PCSelect").value; i++) {
        players.push(player = {
            budget: startingBudget, //gives their starting budget 
            property: [], //determines the player's amount of owned properties
            doubles: 0, //counts the player's times they role doubles in a row
            jailed: false, //simple boolean of if player is in jail
            jailCounter: 0, //counts how many turns player is in jail for
            goCounter: 0, //counts how many times player passes go
            position: 0, //Determines what tile a player is on for all logic purposes. 
            icon: playerIcon[i],
        })
    }
    console.log(players);

    //Creates the physical appearances of the characters. 
    for (let i = 0; i < PCSelect.value; i++) {
        playerBarIcon[i] = document.createElement('div');
        if (CharacterSelect1.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('frog');    
            players[i].icon.classList.add('active', 'frog', playerIconData[i]);
            cell[0].appendChild(players[i].icon); 
        }
        if (CharacterSelect2.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('dragon');
            players[i].icon.classList.add('active', 'dragon', playerIconData[i]);
            cell[0].appendChild(players[i].icon); 
        }
        if (CharacterSelect3.classList.contains('selectedCharacter')) {
            playerBarIcon[i].classList.add('crab');
            players[i].icon.classList.add('active', 'crab', playerIconData[i]);
            cell[0].appendChild(players[i].icon); 
        }

        players[i].icon.classList.add('active', 'frog', playerIconData[i]);
        // cell[0].appendChild(players[i].icon); 

        document.getElementById('playerIconBar').appendChild(playerBarIcon[i]);
        playerBoardIcon[i] = document.createElement('div');
    }  
    //Code below creates each player and their data 
}

function playerTurnMovement() { 
    //This is being called in "dice.js" line 9.
    // player position, data
    console.log("The dice rolled:" + diceMove);
    if (players[turnIndicator].jailed == true) {
        //If the player is in jail
        if (diceMath1 == diceMath2) {
            //If the player rolled doubles inside jail
            cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
            let newPosition = cell[(players[turnIndicator].position + diceMove) % 40];
            newPosition.appendChild(players[turnIndicator].icon);
            players[turnIndicator].position = (players[turnIndicator].position + diceMove) % 40; 
            players[turnIndicator].jailCounter = 0;
            players[turnIndicator].doubles = players[turnIndicator].doubles + 1;
        } else {
            if (players[turnIndicator].jailCounter == 3) {
                //If the player has been in jail for 3 turns, let them move regularily
                cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
                cell[(players[turnIndicator].position + diceMove) % 40].appendChild(players[turnIndicator].icon);
                players[turnIndicator].position + diceMove % 40; 
                players[turnIndicator].jailCounter = 0;
                players[turnIndicator].doubles = 0;
            } else {
                //Otherwise, keep them in jail and raise the counter.
                players[turnIndicator].position = 10; 
                players[turnIndicator].jailCounter++;
                players[turnIndicator].doubles = 0;
                return;
            } 
        }
    } else {
        //Basic movement

        if (cell[players[turnIndicator].position].contains(players[turnIndicator].icon)) {
            //If a cell contains a player, remove the player visually.
            cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
        }

        while (players[turnIndicator].position != (players[turnIndicator].position + diceMove)) {
            console.log("While loop activated");
            setTimeout( cell[(players[turnIndicator].position + 1) % 40].appendChild(players[turnIndicator].icon), 2000);
            players[turnIndicator].position = players[turnIndicator].position + 1;
        }

        // cell[(players[turnIndicator].position + diceMove) % 40].appendChild(players[turnIndicator].icon);
        players[turnIndicator].position = (players[turnIndicator].position + diceMove) % 40;

        //Checks what tile the player is on: (property, chance, chest, etc)
        checkPlayerCurrentTile();
        playerBalanceBar();
        console.log("Player" + turnIndicator + "\'s is:" + players[turnIndicator].position);
    }


    if (players[turnIndicator].position > 0 && players[turnIndicator].position < 12) { 
        //If the player passes go (Still WIP)
        players[turnIndicator].budget = players[turnIndicator].budget + ((50000) - (50000 * tax) + (players[turnIndicator].property['length'] * 10000))
    }

    if (players[turnIndicator].doubles == 3) {
        //If the player has rolled doubles 3 times in a row, send them to jail
        players[turnIndicator].jailed = true;
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
        cell[10].appendChild(players[turnIndicator].icon);
        players[turnIndicator].position = 10; //This is jail
        return;
    } 
}

function checkPlayerCurrentTile() {
    if (players[turnIndicator].position != 2, 17, 33, 8, 22, 36, 5, 15, 25, 35, 4, 12, 28, 38, 30, 10, 20, 0) { //Add all the tiles that are not property ones.
        //pP(); //Prompts the player to buy a property, add buildings, or pay rent.
    } else if (players[turnIndicator].position == 2, 17, 33) { //Chest cards
        performChestCard();
    } else if (players[turnIndicator].position == 8, 22, 36) { //Chance cards
        performChanceCard();
    } else if (players[turnIndicator].position == 5, 15, 25, 35) { //Transport tiles
        
    } else if (players[turnIndicator].position == 4, 12, 28, 38) { //Extra tiles

    }

    if (diceMath1 == diceMath2) {
        players[turnIndicator].doubles = players[turnIndicator].doubles + 1;
        //If the player rolled doubles
        rollDice();
        return;
    }

    //Does any extra logical stuff at the end of a player's turn.
    endPlayerCurrentTurn();
    playerBalanceBar();
}

function endPlayerCurrentTurn(){
    if (diceMath1 != diceMath2) {
        players[turnIndicator].doubles = 0;
    }
    // players[turnIndicator].goCounter = players[turnIndicator].goCounter + 1;
    //Checks any logistics behind the go counter, such as W events or elections
    goCounterChecker();
    turnIndicator = turnIndicator + 1;
    if (turnIndicator == PCSelect.value) {
        turnIndicator = 0;
    }
}

function goCounterChecker() {//triggers goCounter-based events
    if (players[turnIndicator].goCounter == 2) {
        if (worldEventCooldown = false) {
            //trigger worldly events
        } 
    } else if (players[turnIndicator].goCounter == 4) {
        for (let player of players) {  
            //trigger presidential elections
            player.goCounter = 0;
            player.position = 0;
            cell[player.position].removeChild(player.icon);
            cell[0].appendChild(player.icon)
        }
    }
    playerBalanceBar();
}

function loseGame() {
    players.pop[turnIndicator];
    //Display the "UH OH YOU LOSE" thing, with like a spectate button as well.
}

function currentPlayerBar() {
    // current player bar, html 
    let currentPlayerBar = document.getElementById('currentPlayerBar');
    currentPlayerBar.style.fontSize = (4 - (playerName.textContent.length / 10));
    currentPlayerBar.innerText = playerName.value + "'s Turn";
}



function playerBalanceBar() {
    let playerBalanceBar = document.getElementById('playerBalance');
    playerBalanceBar.innerText = "Balance: " + players[turnIndicator].budget;
}