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

let chanceAffectedPlayer;
let chanceCard;
let capitalGainsTimer;
let taxEvasionTimer;
let capitalGains = false;
function performChanceCard() {
    chanceAffectedPlayer = turnIndicator;
    chanceCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chanceCard == 1) {
        console.log("Advance to candy land");
        //candy Lane
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[1].appendChild(players[turnIndicator].icon);
        players[chanceAffectedPlayer].position = 1;
    } else if (chanceCard == 2) {
        console.log("Bail");
        //bail
        // I can not write this yet
    } else if (chanceCard == 3) {
        console.log("Capital Gains");
        capitalGains = true;
        //Capital Gains
        //WIP
    } else if (chanceCard == 4) {
        console.log("Big Sneeze");
        //Big Sneeze
        players[chanceAffectedPlayer].position = players[chanceAffectedPlayer].position - 3;
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[players[turnIndicator].position - 3].appendChild(players[turnIndicator].icon);
    } else if (chanceCard == 5) {
        console.log("Whale Fishing");
        //Whale Fishing
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 5000;
    } else if (chanceCard == 6) {
        console.log("General Repairs");
        //General Repairs
        if (players[chanceAffectedPlayer].property['length'] == 0) {
            //Do nothing
        } else {
            players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - (15000 * players[chanceAffectedPlayer].property['length']); 
        }
    } else if (chanceCard == 7) {
        console.log("Gospel Of Wealth");
        //Gospel of Wealth
        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget - 10000
    } else if (chanceCard == 8) {
        console.log("Tax Evasion");
        //Tax Evasion
        //WIP
    } else if (chanceCard == 9) {
        console.log("Takin a ride");
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
        console.log("Bite of 87");
        //WAS THAT THE BITE OF 87????????
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[27].appendChild(players[turnIndicator].icon);
        players[chanceAffectedPlayer].position = 27; 
        //Player is advanced to Fredbear's family diner
    }
}

let chestAffectedPlayer;
let chestCard;
function performChestCard() {
    console.log("Chest Card started");
    chestAffectedPlayer = turnIndicator;
    chestCard = Math.floor(Math.random() * (10 - 1) + 1);
    if (chestCard == 1) {
        //Framing
        //I can not do this at this current time
        console.log("Framing");
    } else if (chestCard == 2) {
        //Empty chest
        //LITTERALLY NOTHING HAPPENS
        console.log("Nothing happens");
    } else if (chestCard == 3) {
        //jailbreak
        //I can not do this at this current time 
    } else if (chestCard == 4) {
        //Set backs
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[players[turnIndicator].position - 3].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = players[chestAffectedPlayer].position - 3;
        console.log("Set backs");
    } else if (chestCard == 5) {
        //Inheritance
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget + 15000;
        console.log("Inhertance");
    } else if (chestCard = 6) {
        //Big Tower 
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[39].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = 39;
        console.log("Big tower");
    } else if (chestCard = 7) {
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
        //CaughtLackin'
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[10].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].jailed = true;
        players[chestAffectedPlayer].position = 10;
        console.log("Caught Lackin");
    } else if (chestCard = 9) {
        //Leap Year
        cell[players[turnIndicator].position].removeChild(players[turnIndicator].icon); 
        cell[0].appendChild(players[turnIndicator].icon);
        players[chestAffectedPlayer].position = 0;
        //Player "should" collect their annual income
        console.log("Leap year");
    } else if (chestCard = 10) {
        //Tardis Taxes
        players[chestAffectedPlayer].budget = players[chestAffectedPlayer].budget - 20000;
        console.log("Tardis Taxes");
    } else {
        console.log("Chest cards are not working properly");
    }
} 
