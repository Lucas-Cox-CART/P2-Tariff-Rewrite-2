// --- INDEX JS ---

const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const settingsPage = document.getElementById('settingsPage');
const mainGame = document.getElementById('mainGame');
let errorBoolean;

let propertyOfHolder = [];

// --- GAMEDATA JS ---

const propertyData = [
    //[name, rent, house1, house2, house3, house4, hotel, mortgage, pricehouse, pricehotel, purchaseCost]
    // ['Go'], //if players[turnindicator].position == 0
    ['Candy Land', 500, 2500, 7500, 22500, 40000, 62500, 7500, 12500, 50000, 15000],
    // ['Chest'], 
    ['Corndog Castle', 1000, 5000, 15000, 45000, 80000, 112500, 7500, 12500, 50000, 15000],
    // ['IRS Audit'],
    //For the railroads, the purchase cost is the same as the last value. 
    //For every railroad a player owns, the rent raises by 1, capping at the final value.
    ['Delta Airliner', 6250, 12500, 25000, 50000,],
    ['Mount President Face', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    ['Statue of Liberty', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    // ['Chance'],
    ['Pearl Harbor', 2000, 10000, 25000, 75000, 112000, 150000, 15000, 12500, 50000, 30000],
    // ['Jail'],
    ['Mark Yang Tech Museum', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    // ['Electric Bill'],
    ['Mason Peters Architectural Center', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    ['Lucas Cox Medical Clinic', 3000, 15000, 45000, 125000, 175000, 225000, 20000, 25000, 100000, 40000],
    ['Sputnik Express', , 6250, 12500, 25000, 50000,],
    ["Caesar's Palace", 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    // ['Chest'],
    ['Sun City Casino', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    ['Arroyo Grande Turtle Preservation', 4000, 20000, 55000, 150000, 200000, 250000, 25000, 25000, 100000, 50000],
    // ['Bank Loan'],
    ['NORAD', 4500, 22500, 62500, 175000, 218750, 262500, 27500, 37500, 150000, 55000],
    // ['Chance'],
    ['The Pentagon', 4500, 22500, 62500, 175000, 218750, 262500, 37500, 37500, 150000, 55000],
    ['Area 51', 5000, 25000, 75000, 187500, 231250, 275000, 30000, 37500, 150000, 60000],
    ['USS Montana', , 6250, 12500, 25000, 50000,],
    ['Colonel Cornelious Lighthouse', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    ["Fredbear's Family Diner", 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    // ['Water Works'],
    ['Pious Sanctuary', 6000, 30000, 90000, 212500, 256500, 256300, 35000, 37500, 150000, 70000],
    // ['Go to Jail'],
    ['Fast Fusion', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    ['Mary Allen Solar Field', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    // ['Chest'],
    ['Robert Atomic', 7000, 37500, 112500, 250000, 300000, 350000, 40000, 50000, 200000, 80000],
    ['American Ambulance', , 6250, 12500, 25000, 50000,],
    // ['Chance'],
    ['Chump Tower', 8700, 43800, 125000, 275000, 325000, 375000, 43700, 50000, 200000, 87500],
    // ['Luxury Tax'],
    ['Empire State Building', 12500, 50000, 150000, 350000, 425000, 500000, 50000, 50000, 200000, 100000]
]


//Contains all information for properties
const chanceCardData = [
    //There are 10 chance cards
    ['CandyLane', 'Advance to Candylane'],
    ['Bail', 'Get out of jail free card.'],
    ['Capital Gains', '+10,000 capital! You made so much money this year that you need to spend it before the IRS takes it! You must spend 10,000 dollars before the next passing go or else you have to pay interest...'],
    ['Big Sneeze', 'ACHOOO. You sneezed to hard you moved back 3 spaces.'],
    ['Whale Fishing', 'YOU\'VE BEEN TROLLED! You lost 5000.'],
    ['General Repairs', 'This one sucks late game... pay 15000 capital for each owned building'],
    ['Gospel Of Wealth', 'Your kind soul decided to give some money to charity. You donated 10000 capital to one. You lost 10000. How strange.'],
    ['Tax Evasion', 'Next time you pass go, there is a 50% chance you will avoid taxes, but also a 50% you get sent to jail.'],
    ['Taking A Ride', 'Move to the nearest transportation tile in front of you.'],
    ['The Bite Of 87', '\" WAS THAT THE BITE OF 87???"\ Advance to Fredbear\'s Family Diner.']
]
//Contains all information for Chance cards
const chestCardData = [
    // There are 10 chest cards
    ['framing', '\"IT WAS HIM. I SAW HIM VENT."\ Send one player of your choice to jail.'],
    ['Empty Chest', 'Wow. the chest hates you so much it didn\'t even give you any content! Sucks to be you!'],
    ['Jail Break', 'If you are ever in jail, use this and you can get out for free!'],
    ['Set Backs', 'You sucked so bad at capitalism that now you have to move back 3 tiles. '],
    ['Inheritance', 'Your uncle died. CONGRATS! You inherit 15,000 capital!'],
    ['Big Tower', 'LOOK AT YOU GOING BIG!! Advance to the Empire State Building. Do not pass go.'],
    ['Opportunist', 'Advance to the next chance card, and take a card.'],
    ['Caught Lackin', 'Timeout corner for you buster.'],
    ['Leap Year', 'Advance to go and instantly gain your annual income.']
    ['Tardis Tax', 'The TARDIS requests tax for a disclosed reason. -20000 capital. ']
]
//Contains all information for Chest cards
const worldEvents = [
    //I removed Impending doom because I have no time to make that. 
    ["Pandemic 1", "The pandemic has started! Lucky for you you get a 15,000$ stimulus, but... inflation is up 10%. Tread lightly. "],
    ["Pandemic 2", "Well that is not good... 5% inflation.... and you get only half your annual income!"],
    ["Bull Market", "At the end of every player's turn, the price of all stats on properties rise by 5-20%."],
    ["Recession", "OH NOES! The economy inflated by 15%, and now all properties produce 10% less!"],
    ["Waste of an event", "Some twitter person started up a whole conspiracy where something bad was going to happen. This is stupid. Nothing bad is ever going to happen."],
    ["War", "Some genius decided war is a good idea. This is super good for you! You get +20% extra on annual income... but be careful: Taxes are up."],
    ["Technological Revolution", "A revolutionary new invention was just made! One player dominated the market and nearly doubled their income! Every other player wasted valuable resources and lost 20% of their wealth."]
]

//Contains all information for World Events

let worldEventCooldown = false;
let worldEvent = null;
let president = null;

// --- PLAYER JS ---

//This makes the styling for the players. 
let players = [];
let turnIndicator = 0;

const playerIconData = [
    'P0','P1','P2','P3', 'P4', 'P5', 'P6', 'P7'
];

let playerIcon = [document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span')]

function playerCreation() {
    //Code below this creates the icons that appear on the top left side
    let playerBarIcon = [];
    let playerBoardIcon = [];
    let player;

    //Creates the players, and their statistics
    for (let i = 0; i < document.getElementById("PCSelect").value; i++) {
        players.push(player = {
            budget: startingBudget,
            property: [], 
            doubles: 0,
            jailed: false, 
            jailCounter: 0, 
            goCounter: 0, 
            position: 0, 
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

        // players[i].icon.classList.add('active', 'frog', playerIconData[i]);

        document.getElementById('playerIconBar').appendChild(playerBarIcon[i]);
        playerBoardIcon[i] = document.createElement('div');
    }  
    //Code below creates each player and their data 
}

let annualIncomeChecker;
annualIncomeChecker = 0;
//This is being called in "dice.js" line 19.
function playerTurnMovement() { 
    if (players[turnIndicator].position < 40 && players[turnIndicator].position > 28) {
        //Checking if the player is legible to pass go this turn
        annualIncomeChecker = 1;
    } else {
        annualIncomeChecker = 0;
    }
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

        for (let i = 0; i < diceMove; i++) {
            if (cell[players[turnIndicator].position].contains(players[turnIndicator].icon)) {
                //If a cell contains a player, remove the player visually.
                cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
            }
            cell[(players[turnIndicator].position + 1) % 40].appendChild(players[turnIndicator].icon);
            players[turnIndicator].position = (players[turnIndicator].position + 1) % 40;
        }

        // cell[(players[turnIndicator].position + diceMove) % 40].appendChild(players[turnIndicator].icon);
        // players[turnIndicator].position = (players[turnIndicator].position + diceMove) % 40;

        //Checks what tile the player is on: (property, chance, chest, etc)
        checkPlayerCurrentTile();
        playerBalanceBar();
        console.log("Player" + turnIndicator + "\'s position is:" + players[turnIndicator].position);
    }
    
    if (players[turnIndicator].doubles == 3) {
        //If the player has rolled doubles 3 times in a row, send them to jail
        players[turnIndicator].jailed = true;
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon);
        cell[10].appendChild(players[turnIndicator].icon);
        players[turnIndicator].position = 10; //This is jail
        return;
    } 

    if (players[turnIndicator].position > 0 && annualIncomeChecker == 1) {
        //Checks if the player has passed go this turn
        players[turnIndicator].budget = players[turnIndicator].budget + ((50000) - (50000 * tax) + (players[turnIndicator].property['length'] * 10000));
        annualIncomeChecker = 0;
    }
}

function checkPlayerCurrentTile() {
    if (players[turnIndicator].position != 2, 17, 33, 8, 22, 36, 5, 15, 25, 35, 4, 12, 28, 38, 30, 10, 20, 0) { //Add all the tiles that are not property ones.
        //pP(); //Prompts the player to buy a property, add buildings, or pay rent.
    } else if (players[turnIndicator].position == 2 || players[turnIndicator].position == 17 || players[turnIndicator].position == 33) { //Chest cards
        performChestCard();
    } else if (players[turnIndicator].position == 8 || players[turnIndicator].position == 22 || players[turnIndicator].position == 36) { //Chance cards
        performChanceCard();
    } else if (players[turnIndicator].position == 5 || players[turnIndicator].position == 15 || players[turnIndicator].position == 25 || players[turnIndicator].position == 35) { //Transport tiles
        
    } else if (players[turnIndicator].position == 4 || players[turnIndicator].position == 12 || players[turnIndicator].position == 28 || players[turnIndicator].position == 38) { //Extra tiles

    }

    if (diceMath1 == diceMath2) {
        players[turnIndicator].doubles = players[turnIndicator].doubles + 1;
        //If the player rolled doubles
        // showDoublePopup();
        setTimeout( rollDice(), 3000);
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
            cell[0].appendChild(player.icon);
        }
    }
    playerBalanceBar();
}

function loseGame() {
    endPlayerCurrentTurn();
    players.pop[turnIndicator];
    //Display the "UH OH YOU LOSE" thing, with like a spectate button as well.
}

function currentPlayerBar() {
    // current player bar, html 
    let currentPlayerBar = document.getElementById('currentPlayerBar');
    currentPlayerBar.style.fontSize = (4 - (playerName.textContent.length / 10));
    currentPlayerBar.innerText = playerName.value + "'s Turn";
}

function playerBalanceBar() { //Updates the balance of a player and displays it
    let playerBalanceBar = document.getElementById('playerBalance');
    playerBalanceBar.innerText = "Balance: " + players[turnIndicator].budget;
}


// --- SETTINGS JS ---

//Hides the main screen and displays the settings
function gotoSettings() {
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    settingsPage.style.display = "flex";
}

//Checks for missing values/errors in Settings Page before preceding to Game
function startGame(errorBoolean) {
    if (playerName.value == "") {
        errorBoolean = true;
        alert('Please enter your username!');
    } else if (tax < 0 || tax == "e") {
        errorBoolean = true;
        alert('Please enter a valid integer!');
    } else if (startingBudget <= 0 || startingBudget == +"e") {
        errorBoolean = true;
        alert('Please enter a valid integer!');
    } else if (CharacterSelect1.classList.contains('selectedCharacter') == false && CharacterSelect2.classList.contains('selectedCharacter') == false && CharacterSelect3.classList.contains('selectedCharacter') == false) {
        errorBoolean = true;
        alert('Please select a character icon!');
    } else if (startingBudget > 10000000) {
        errorBoolean = true;
        alert('Maximum starting budget is 10,000,000! Please enter a lower value!');
    } else {
        errorBoolean = false;
        settingsPage.style.display = "none";
        mainGame.style.display = "flex";

        playerCreation();
        currentPlayerBar();
        playerBalanceBar();
        rentMake();
        hideProp();
    }
}

//Hides the settings and displays the game
let playerName = document.getElementById('playerName');
playerName.addEventListener('change', (e) => {
    playerName.value = document.getElementById('playerName').value;
});

let startingBudget;
//Default value for the budgets of players
startingBudget = document.addEventListener("change", (e) => {
    startingBudget = initialBudget.value;
    startingBudget = Math.floor(startingBudget);
});
startingBudget = 600000;

let tax;
let initialTax = document.getElementById('initialTax');

//Default value for tax
tax = document.addEventListener("change", (e) => {
    tax = initialTax.value;
    tax = Math.floor(tax) / 100;
});
tax = 0.09;

//Difficulty settings: 
let difficultySelector = document.getElementById('selectDifficulty');
let initialBudget = document.getElementById('initialBudget');

difficultySelector.addEventListener("change", (e) => {
    let difficulty = difficultySelector.value;
    // difficulty = Math.floor(difficulty);
    if (difficulty == 1) {
        initialBudget.value = 600000;
        startingBudget = 600000;
        initialTax.value = 9;
        tax = 0.09;
    } else if (difficulty == 2) {
        initialBudget.value = 400000;
        startingBudget = 400000;
        initialTax.value = 12;
        tax = 0.12;
    } else if (difficulty == 3) {
        initialBudget.value = 200000;
        startingBudget = 200000;
        initialTax.value = 16;
        tax = 0.16;
    } else if (difficulty == 4) {
        initialBudget.value = "";
        startingBudget = "";
        initialTax.value = "";
        tax = "";
    }
});

initialBudget.addEventListener('keydown', (e) => {
    difficultySelector.value = 4;
});

initialTax.addEventListener('keydown', (e) => {
    difficultySelector.value = 4;
})



difficulty = 1;
//Default difficulty

// Setting for Darkmode of Game
let darkmode = document.getElementById('darkmode');
let settingsPageHeading = document.getElementById('settingsPageHeading');
let playerBalance = document.getElementById('playerBalance');
darkmode.addEventListener('change', (e) => {
    if (darkmode.checked) {
        settingsPage.style.backgroundColor = "black";
        settingsPageHeading.style.color = "white";
        mainGame.style.backgroundColor = "black";
        gameBoard.style.backgroundColor = "black";
        gameBoard.style.color = "white";
        for (let i = 0; i < 26; i ++) {
            cell[i].style.border = "2px solid white";
        }
        playerBalance.style.color = "white";
        playerBalance.style.textShadow = "2px 2px 5px black";
    } else {
        settingsPage.style.backgroundColor = "white";
        settingsPageHeading.style.color = "black";
        mainGame.style.backgroundColor = "white";
        gameBoard.style.backgroundColor = "white";
        gameBoard.style.color = "black";
        for (let i = 0; i < 26; i ++) {
            cell[i].style.border = "2px solid black";
        }
        playerBalance.style.color = "black"
        playerBalance.style.textShadow = "2px 2px 5px white";
    }
});

//Character selecting options
let CharacterSelect1 = document.getElementById('Cselection1');
let CharacterSelect2 = document.getElementById('Cselection2');
let CharacterSelect3 = document.getElementById('Cselection3');
CharacterSelect1.addEventListener('click', (e) => {
    CharacterSelect1.classList.add('selectedCharacter');
        CharacterSelect2.classList.remove('selectedCharacter');
        CharacterSelect3.classList.remove('selectedCharacter');
});
CharacterSelect2.addEventListener('click', (e) => {
    CharacterSelect2.classList.add('selectedCharacter');
        CharacterSelect1.classList.remove('selectedCharacter');
        CharacterSelect3.classList.remove('selectedCharacter');
});
CharacterSelect3.addEventListener('click', (e) => {
    CharacterSelect3.classList.add('selectedCharacter');
        CharacterSelect1.classList.remove('selectedCharacter');
        CharacterSelect2.classList.remove('selectedCharacter');
});

// --- DICE JS ---

// Remember that 'function rollDice()' needs to have an argument for player turn.
let diceMove;
let diceOne;
let diceTwo;
function rollDice() {
    /* Dice Data */
    diceMath1 = Math.round(Math.random() * 5) + 1;
    diceMath2 = Math.round(Math.random() * 5) + 1;
    diceMove = diceMath1 + diceMath2;
    if (diceMath1 == diceMath2) {
        rollDiceTimeout = setTimeout(rollDice, 0);
    }
    /* Dice Element */
    diceTimeout = setTimeout(diceLogoChanger, 10);
    diceOne = document.getElementById('diceOne');
    diceTwo = document.getElementById('diceTwo');
    diceOne.classList.remove('diceOne', 'diceTwo', 'diceThree', 'diceFour', 'diceFive', 'diceSix');
    diceTwo.classList.remove('diceOne', 'diceTwo', 'diceThree', 'diceFour', 'diceFive', 'diceSix');
    playerTurnMovement();
    diceLogoChanger();

        function diceLogoChanger() {
        switch(diceMath1) {
            case 1:
                diceOne.classList.add('diceOne');
                break;
            case 2:
                diceOne.classList.add('diceTwo');
                break;
            case 3:
                diceOne.classList.add('diceThree');
                break;
            case 4:
                diceOne.classList.add('diceFour');
                break;
            case 5:
                diceOne.classList.add('diceFive');
                break;
            case 6:
                diceOne.classList.add('diceSix');
                break;
        }
        switch(diceMath2) {
            case 1:
                diceTwo.classList.add('diceOne');
                break;
            case 2:
                diceTwo.classList.add('diceTwo');
                break;
            case 3:
                diceTwo.classList.add('diceThree');
                break;
            case 4:
                diceTwo.classList.add('diceFour');
                break;
            case 5:
                diceTwo.classList.add('diceFive');
                break;
            case 6:
                diceTwo.classList.add('diceSix');
                break;
        }
    }
}

// --- GAMEBOARD JS ---

let cell = [];
for (let i = 0; i < 40; i++) {
    cell[i] = document.getElementById(`cell${i}`);
}

//This is used as a way to have the player appear physically on the screen.
//Otherwise, this does nothing else. All the logic to determine what tile a player 
//is on, is caluclated using the "position" value inside an object. 

let properties = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
//Easy way to access what players have bought which buildings. 

let rentedProperty;
//This calculates all the information for if a player lands on a property, and if they own it

function pP() {  // pP = player property (If the player lands on property) 

    if (properties[players[turnIndicator].position] == null) {
        //If the property is un-owned the player will have an option to buy it
        propertyName.innerText = propertyData[players[turnIndicator].position][0];
        propertyPrice.innerText = propertyData[players[turnIndicator].position][10];
        askProperty();
        // if (players[turnIndicator].budget > propertyData[players[turnIndicator].position][10]) {
        // players[turnIndicator].budget = players[turnIndicator].budget - propertyData[turnIndicator][10];
        // properties.splice(players[turnIndicator].position, 1, (turnIndicator.valueOf = {buildings: 0}));
        // players[turnIndicator].property.push (propertyData[players[turnIndicator].position][0])
        // }
    } else if (properties[players[turnIndicator].position] == turnIndicator) {
         //If the property is owned
        if (properties[players[turnIndicator].position].buildings < 5) {
            if (players[turnIndicator].budget > propertyData[turnIndicator][8]) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][8];
            properties[players[turnIndicator].position].buildings = properties[players[turnIndicator].position].buildings + 1;
            } else if (players[turnIndicator].budget <= 0) {
                loseGame();
            }
        } else {
            if (players[turnIndicator].budget > propertyData[turnIndicator][9]) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][9];
            properties[players[turnIndicator].position].buildings = properties[players[turnIndicator].position].buildings + 1;
            }
        }
    } else {
        rentedProperty = properties[players[turnIndicator].postion];
        switch (properties[players[turnIndicator].position].buildings) {
            case (1):
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][3];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][3];
            break;
            case (2):
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][4];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][4];
            break;
            case (3):
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][5];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][5];
            break;
            case (4):
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][6];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][6];
            break;
            case (5):
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][7];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][7];
            }
        }
    console.log('blue waffles');
}

let chanceTitle = document.getElementById("chanceTitle");
let chanceDesc = document.getElementById("chanceDesc");

let chanceAffectedPlayer;
let chanceCard;
let capitalGainsTimer;
let taxEvasionTimer;
let capitalGains = false;
function performChanceCard() {
    chanceAffectedPlayer = turnIndicator;
    chanceCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chanceCard == 1) {
        chanceTitle.innerText = (chanceCardData[0][0]);
        chanceDesc.innerText = (chanceCardData[0][1]);
        //candy Lane
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[1].appendChild(players[turnIndicator].icon);
        players[chanceAffectedPlayer].position = 1;
    } else if (chanceCard == 2) {
        chanceTitle.innerText = (chanceCardData[1][0]);
        chanceDesc.innerText = (chanceCardData[1][1]);
        //bail
        // I can not write this yet
    } else if (chanceCard == 3) {
        chanceTitle.innerText = (chanceCardData[2][0]);
        chanceDesc.innerText = (chanceCardData[2][1]);
        capitalGains = true;
        //Capital Gains
        //WIP
    } else if (chanceCard == 4) {
        chanceTitle.innerText = (chanceCardData[3][0]);
        chanceDesc.innerText = (chanceCardData[3][1]);
        //Big Sneeze
        players[chanceAffectedPlayer].position = players[chanceAffectedPlayer].position - 3;
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[players[turnIndicator].position - 3].appendChild(players[turnIndicator].icon);
    } else if (chanceCard == 5) {
        chanceTitle.innerText = (chanceCardData[4][0]);
        chanceDesc.innerText = (chanceCardData[4][1]);
        //Whale Fishing
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 5000;
    } else if (chanceCard == 6) {
        chanceTitle.innerText = (chanceCardData[5][0]);
        chanceDesc.innerText = (chanceCardData[5][1]);
        //General Repairs
        if (players[chanceAffectedPlayer].property['length'] == 0) {
            //Do nothing
        } else {
            players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - (15000 * players[chanceAffectedPlayer].property['length']); 
        }
    } else if (chanceCard == 7) {
        chanceTitle.innerText = (chanceCardData[6][0]);
        chanceDesc.innerText = (chanceCardData[6][1]);
        //Gospel of Wealth
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 10000
    } else if (chanceCard == 8) {
        chanceTitle.innerText = (chanceCardData[7][0]);
        chanceDesc.innerText = (chanceCardData[7][1]);
        //Tax Evasion
        //WIP
    } else if (chanceCard == 9) {
        chanceTitle.innerText = (chanceCardData[8][0]);
        chanceDesc.innerText = (chanceCardData[8][1]);
        //Takin' a ride
        if (players[chanceAffectedPlayer].position == 8) {
            cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
            cell[15].appendChild(players[turnIndicator].icon);
            players[chanceAffectedPlayer].position = 15;
        } else if (players[chanceAffectedPlayer].position == 22) {
            cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
            cell[25].appendChild(players[turnIndicator].icon);
            players[chanceAffectedPlayer].position = 25;
        } else if (players[chanceAffectedPlayer].position == 36) {
            cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
            cell[5].appendChild(players[turnIndicator].icon);
            players[chanceAffectedPlayer].position = 5;
        } else {
            console.log("Something is going wrong with the takin a ride chance card")
        }
        //Player advances to closest transportation tile
    } else if (chanceCard == 10) {
        chanceTitle.innerText = (chanceCardData[9][0]);
        chanceDesc.innerText = (chanceCardData[9][1]);
        //WAS THAT THE BITE OF 87????????
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[27].appendChild(players[turnIndicator].icon);
        players[chanceAffectedPlayer].position = 27; 
        //Player is advanced to Fredbear's family diner
    }
}

let chestTitle = document.getElementById("chestTitle");
let chestDesc = document.getElementById("chestDesc");

let chestAffectedPlayer;
let chestCard;
function performChestCard() {
    console.log("Chest Card started");
    chestAffectedPlayer = turnIndicator;
    chestCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chestCard == 1) {
        chestTitle.innerText = (chestCardData[0][0]);
        chestDesc.innerText = (chestCardData[0][1]);
        //Framing
        //I can not do this at this current time
    } else if (chestCard == 2) {
        chestTitle.innerText = (chestCardData[1][0]);
        chestDesc.innerText = (chestCardData[1][1]);
        //Empty chest
        //LITTERALLY NOTHING HAPPENS
        console.log("Nothing happens");
    } else if (chestCard == 3) {
        chestTitle.innerText = (chestCardData[2][0]);
        chestDesc.innerText = (chestCardData[2][1]);
        //jailbreak
        //I can not do this at this current time 
    } else if (chestCard == 4) {
        chestTitle.innerText = (chestCardData[3][0]);
        chestDesc.innerText = (chestCardData[3][1]);
        //Set backs
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[players[turnIndicator].position - 3].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = players[chestAffectedPlayer].position - 3;
        console.log("Set backs");
    } else if (chestCard == 5) {
        chestTitle.innerText = (chestCardData[4][0]);
        chestDesc.innerText = (chestCardData[4][1]);
        //Inheritance
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget + 15000;
        console.log("Inhertance");
    } else if (chestCard = 6) {
        chestTitle.innerText = (chestCardData[5][0]);
        chestDesc.innerText = (chestCardData[5][1]);
        //Big Tower 
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[39].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = 39;
        console.log("Big tower");
    } else if (chestCard = 7) {
        chestTitle.innerText = (chestCardData[6][0]);
        chestDesc.innerText = (chestCardData[6][1]);
        //Opportunist
        if (players[chestAffectedPlayer].position == 2) {
            cell[players[turnIndicator].position].removeChild(playerIcon);
            cell[8].appendChild(playerIcon);
            players[chestAffectedPlayer].position = 8;
        } else if (players[chestAffectedPlayer].position == 17) {
            cell[players[turnIndicator].position].removeChild(playerIcon); 
            cell[22].appendChild(playerIcon);
            players[chestAffectedPlayer].position = 22;
        } else if (players[chanceAffectedPlayer].position == 33) {
            cell[players[turnIndicator].position].removeChild(playerIcon); 
            cell[36].appendChild(playerIcon);
            players[chestAffectedPlayer].position = 36;
        } else {
            console.log("Something is going wrong with the opportunist card")
        }
    } else if (chestCard = 8) {
        chestTitle.innerText = (chestCardData[7][0]);
        chestDesc.innerText = (chestCardData[7][1]);
        //CaughtLackin'
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[10].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].jailed = true;
        players[chestAffectedPlayer].position = 10;
        console.log("Caught Lackin");
    } else if (chestCard = 9) {
        chestTitle.innerText = (chestCardData[8][0]);
        chestDesc.innerText = (chestCardData[8][1]);
        //Leap Year
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[0].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = 0;
        //Player "should" collect their annual income
        console.log("Leap year");
    } else if (chestCard = 10) {
        chestTitle.innerText = (chestCardData[9][0]);
        chestDesc.innerText = (chestCardData[9][1]);
        //Tardis Taxes
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget - 20000;
        console.log("Tardis Taxes");
    } else {
        console.log("Chest cards are not working properly");
    }
} 

// --- PROPERTY JS ---

let propertyAsk = document.createElement('article');
propertyAsk.setAttribute('class', 'propertyAsk');

let propertyName = document.createElement('h3');
propertyName.setAttribute('class', 'propertyName');

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

    if (darkmode.checked) {
        propertyAsk.style.backgroundColor = "black";
        propertyAsk.style.color = "white";
        propertyName.style.color = "black";
    }

    switch(players[turnIndicator].position) {
        case 1:
            propertyName.innerText = propertyData[0][0];
            propertyName.style.backgroundColor = "brown";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[0][i];
            }
            break;
        case 3:
            propertyName.innerText = propertyData[1][0];
            propertyName.style.backgroundColor = "brown";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[1][i];
            }
            break;
        case 5:
            propertyName.innerText = propertyData[2][0];
            propertyName.style.backgroundColor = "";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[2][i];
            }
            break;
        case 6:
            propertyName.innerText = propertyData[3][0];
            propertyName.style.backgroundColor = "lightblue";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[3][i];
            }
            break;
        case 7:
            propertyName.innerText = propertyData[4][0];
            propertyName.style.backgroundColor = "lightblue";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[4][i];
            }
            break;
        case 9:
            propertyName.innerText = propertyData[5][0];
            propertyName.style.backgroundColor = "lightblue";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[5][i];
            }
            break;
        case 11:
            propertyName.innerText = propertyData[6][0];
            propertyName.style.backgroundColor = "rebeccapurple";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[6][i];
            }
            break;
        case 13:
            propertyName.innerText = propertyData[7][0];
            propertyName.style.backgroundColor = "rebeccapurple";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[7][i];
            }
            break;
        case 14:
            propertyName.innerText = propertyData[8][0];
            propertyName.style.backgroundColor = "rebeccapurple";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[8][i];
            }
            break;
        case 15:
            propertyName.innerText = propertyData[9][0];
            propertyName.style.backgroundColor = "";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[9][i];
            }
            break;
        case 16:
            propertyName.innerText = propertyData[10][0];
            propertyName.style.backgroundColor = "orange";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[10][i];
            }
            break;
        case 18:
            propertyName.innerText = propertyData[11][0];
            propertyName.style.backgroundColor = "orange";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[11][i];
            }
            break;
        case 19:
            propertyName.innerText = propertyData[12][0];
            propertyName.style.backgroundColor = "orange";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[12][i];
            }
            break;
        case 21:
            propertyName.innerText = propertyData[13][0];
            propertyName.style.backgroundColor = "red";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[13][i];
            }
            break;
        case 23:
            propertyName.innerText = propertyData[14][0];
            propertyName.style.backgroundColor = "red";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[14][i];
            }
            break;
        case 24:
            propertyName.innerText = propertyData[15][0];
            propertyName.style.backgroundColor = "red";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[15][i];
            }
            break;
        case 25:
            propertyName.innerText = propertyData[16][0];
            propertyName.style.backgroundColor = "";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[16][i];
            }
            break;
        case 26:
            propertyName.innerText = propertyData[17][0];
            propertyName.style.backgroundColor = "yellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[17][i];
            }
            break;
        case 27:
            propertyName.innerText = propertyData[18][0];
            propertyName.style.backgroundColor = "yellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[18][i];
            }
            break;
        case 29:
            propertyName.innerText = propertyData[19][0];
            propertyName.style.backgroundColor = "yellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[19][i];
            }
            break;
        case 31:
            propertyName.innerText = propertyData[20][0];
            propertyName.style.backgroundColor = "greenyellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[20][i];
            }
            break;
        case 32:
            propertyName.innerText = propertyData[21][0];
            propertyName.style.backgroundColor = "greenyellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[21][i];
            }
            break;
        case 34:
            propertyName.innerText = propertyData[22][0];
            propertyName.style.backgroundColor = "greenyellow";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[22][i];
            }
            break;
        case 35:
            propertyName.innerText = propertyData[23][0];
            propertyName.style.backgroundColor = "";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[23][i];
            }
            break;
        case 37:
            propertyName.innerText = propertyData[24][0];
            propertyName.style.backgroundColor = "cornflowerblue";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[24][i];
            }
            break;
        case 39:
            propertyName.innerText = propertyData[25][0];
            propertyName.style.backgroundColor = "cornflowerblue";
            for (let i = 1; i < 11; i++) {
                propertyPrice[i].innerText = propertyData[25][i];
            }
            break;
    }
}

function hideProp() {
    for (let i = 0; i < 26; i++) {
        propertyOfHolder[i] = document.getElementById(`property${[i]}`);
        propertyOfHolder[i].style.display = "none";
    }
}

function buyProperty() {
    mainGame.removeChild(propertyAsk);

    if (players[turnIndicator].budget > (+propertyData[players[turnIndicator].position][10])) {
        switch(players[turnIndicator].position) {
            case 1:
                propertyOfHolder[0].style.display = "flex";
                players[turnIndicator].property.push(propertyData[0]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[0][10];
                break;
            case 3:
                propertyOfHolder[1].style.display = "flex";
                players[turnIndicator].property.push(propertyData[1]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[1][10];
                break;
            case 5:
                propertyOfHolder[2].style.display = "flex";
                players[turnIndicator].property.push(propertyData[2]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[2][10];
                break;
            case 6:
                propertyOfHolder[3].style.display = "flex";
                players[turnIndicator].property.push(propertyData[3]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[3][10];
                break;
            case 7:
                propertyOfHolder[4].style.display = "flex";
                players[turnIndicator].property.push(propertyData[4]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[4][10];
                break;
            case 9:
                propertyOfHolder[5].style.display = "flex";
                players[turnIndicator].property.push(propertyData[5]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[5][10];
                break;
            case 11:
                propertyOfHolder[6].style.display = "flex";
                players[turnIndicator].property.push(propertyData[6]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[6][10];
                break;
            case 13:
                propertyOfHolder[7].style.display = "flex";
                players[turnIndicator].property.push(propertyData[7]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[7][10];
                break;
            case 14:
                propertyOfHolder[8].style.display = "flex";
                players[turnIndicator].property.push(propertyData[8]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[8][10];
                break;
            case 15:
                propertyOfHolder[9].style.display = "flex";
                players[turnIndicator].property.push(propertyData[9]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[9][10];
                break;
            case 16:
                propertyOfHolder[10].style.display = "flex";
                players[turnIndicator].property.push(propertyData[10]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[10][10];
                break;
            case 18:
                propertyOfHolder[11].style.display = "flex";
                players[turnIndicator].property.push(propertyData[11]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[11][10];
                break;
            case 19:
                propertyOfHolder[12].style.display = "flex";
                players[turnIndicator].property.push(propertyData[12]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[12][10];
                break;
            case 21:
                propertyOfHolder[13].style.display = "flex";
                players[turnIndicator].property.push(propertyData[13]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[13][10];
                break;
            case 23:
                propertyOfHolder[14].style.display = "flex";
                players[turnIndicator].property.push(propertyData[14]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[14][10];
                break;
            case 24:
                propertyOfHolder[15].style.display = "flex";
                players[turnIndicator].property.push(propertyData[15]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[15][10];
                break;
            case 25:
                propertyOfHolder[16].style.display = "flex";
                players[turnIndicator].property.push(propertyData[16]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[16][10];
                break;
            case 26:
                propertyOfHolder[17].style.display = "flex";
                players[turnIndicator].property.push(propertyData[17]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[17][10];
                break;
            case 27:
                propertyOfHolder[18].style.display = "flex";
                players[turnIndicator].property.push(propertyData[18]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[18][10];
                break;
            case 29:
                propertyOfHolder[19].style.display = "flex";
                players[turnIndicator].property.push(propertyData[19]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[19][10];
                break;
            case 31:
                propertyOfHolder[20].style.display = "flex";
                players[turnIndicator].property.push(propertyData[20]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[20][10];
                break;
            case 32:
                propertyOfHolder[21].style.display = "flex";
                players[turnIndicator].property.push(propertyData[21]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[21][10];
                break;
            case 34:
                propertyOfHolder[22].style.display = "flex";
                players[turnIndicator].property.push(propertyData[22]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[22][10];
                break;
            case 35:
                propertyOfHolder[23].style.display = "flex";
                players[turnIndicator].property.push(propertyData[23]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[23][10];
                break;
            case 37:
                propertyOfHolder[24].style.display = "flex";
                players[turnIndicator].property.push(propertyData[24]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[24][10];
                break;
            case 39:
                propertyOfHolder[25].style.display = "flex";
                players[turnIndicator].property.push(propertyData[25]);
                players[turnIndicator].budget = players[turnIndicator].budget - propertyData[25][10];
                break;
        }
    } else if (players[turnIndicator].budget < (+propertyData[players[turnIndicator].position][10])) {
        alert('Balance too low to purchase this property!');
    } else {
        alert('Developer error');
    }

    playerBalanceBar();
}

function waiveProperty() {
    mainGame.removeChild(propertyAsk);
}

let propertyCurrentRent = [];
function rentMake() {
    for (let i = 0; i < 26; i++) {
        propertyCurrentRent[i] = {
            root: document.getElementById(`propertyCurrentRent${[i]}`),
            houses: 0
        };
        propertyCurrentRent[i].root.innerText = propertyData[i][1];
    }
}

let houseBuy = [];
for (let i = 0; i < 26; i++) {
    houseBuy[i] = document.getElementById(`houseBuy${[i]}`);
    houseBuy[i].addEventListener('click', (e) => {

        if (players[turnIndicator].budget < (+propertyData[players[turnIndicator].position][8])) {
            alert("You can't afford this!");
        } else if (players[turnIndicator].budget < (+propertyData[players[turnIndicator].position][9])) {
            alert("You can't afford this!");
        } else if (propertyCurrentRent[i].houses == 5) {
            alert("You've reached the maximum number of houses for this property!");
        } else if (propertyCurrentRent[i].houses == 4) {
            propertyCurrentRent[i].houses += 1;
            players[turnIndicator].budget = players[turnIndicator].budget - (+propertyData[players[turnIndicator].position][9]);
            playerBalanceBar();
        } else if (propertyCurrentRent[i].houses < 4) {
            propertyCurrentRent[i].houses += 1;
            players[turnIndicator].budget = players[turnIndicator].budget - (+propertyData[players[turnIndicator].position][8]);
            playerBalanceBar();
        } else {
            alert("youre retarded");
        }

        switch(propertyCurrentRent[i].houses) {
            case 0:
                propertyCurrentRent[i].root.innerText = propertyData[i][1];
                break;
            case 1:
                propertyCurrentRent[i].root.innerText = propertyData[i][2];
                break;
            case 2:
                propertyCurrentRent[i].root.innerText = propertyData[i][3];
                break;
            case 3:
                propertyCurrentRent[i].root.innerText = propertyData[i][4];
                break;
            case 4:
                propertyCurrentRent[i].root.innerText = propertyData[i][5];
                break;
            case 5:
                propertyCurrentRent[i].root.innerText = propertyData[i][6];
                break;
        }
    });
}

// --- POTUS JS ---

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