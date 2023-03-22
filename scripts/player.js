//This makes the styling for the players. 
function playerCreation() {
    let playerBarIcon = [];
    let playerIcon = [];

    for (let i = 1; i <= PCSelect.value; i++) {
        playerBarIcon[i] = document.createElement('div');
        playerIcon[i] = document.createElement('div');
    }
    
    let turnIndicator = 0;

    let players = [];

    for (let i = 0; i < document.getElementById("PCSelect").value; i++) {
        players.push(player = {
            budget: startingBudget, //gives their starting budget 
            property: [], //determines the player's amount of owned properties
            doubles: 0, //counts the player's times they role doubles in a row
            jailed: false, //simple boolean of if player is in jail
            goCounter: 0, //counts how many times player passes go
            position: 0, //Determines what tile a player is on for all logic purposes. 
        })
        console.log(players) 
    }
}