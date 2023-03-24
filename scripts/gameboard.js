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

function pP() {  // pP = player property
    if (properties[players[turnIndicator].position] == null) {
        if (players[turnIndicator].budget > propertyData[players[turnIndicator].position][10]) {
        players[turnIndicator].budget = players[turnIndicator].budget - propertyData[turnIndicator][10];
        properties.splice(players[turnIndicator].position, 1, (turnIndicator.valueOf = {buildings: 0}));
        }
    } else if (properties[players[turnIndicator].position] == turnIndicator) {
        if (properties[players[turnIndicator].position].buildings < 5) {
            if (players[turnIndicator].budget > propertyData[turnIndicator][8]) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][8];
            properties[players[turnIndicator].position].buildings = properties[players[turnIndicator].position].buildings + 1;
            }
        } else {
            if (players[turnIndicator].budget > propertyData[turnIndicator][9]) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][9];
            properties[players[turnIndicator].position].buildings = properties[players[turnIndicator].position].buildings + 1;
            }
        }
    } else {
        rentedProperty = properties[players[turnIndicator].postion];
        if (properties[players[turnIndicator].position].buildings == 1) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][3];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][3];
        } else if (properties[players[turnIndicator].position].buildings == 2) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][4];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][4];
        } else if (properties[players[turnIndicator].position].buildings == 3) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][5];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][5];
        } else if (properties[players[turnIndicator].position].buildings == 4) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][6];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][6];
        } else if (properties[players[turnIndicator].position].buildings == 5) {
            players[turnIndicator].budget = players[turnIndicator].budget - propertyData[players[turnIndicator].position][7];
            players[rentedProperty].budget = players[rentedProperty].budget + propertyData[players[turnIndicator].position][7];
        }
    }
    console.log('cornhub')
}