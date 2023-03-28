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
            cell[players[turnIndicator].playerPosition].removeChild(players[turnIndicator].icon); 
            cell[31].appendChild(players[turnIndicator].icon);
            players[chanceAffectedPlayer].playerPosition = 31;
        } else if (chanceCard == 2) {
            console.log("Bail");
            //bail
            // I can not write this yet
        } else if (chanceCard == 3) {
            console.log("Capital Gains");
            capitalGains = true;
            //Capital Gains
            players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget + 10000;
            capitalGainsTimer = players[chanceAffectedPlayer].goCounter
            //There is more in the dice + board file. 
        } else if (chanceCard == 4) {
            console.log("Big Sneeze");
            //Big Sneeze
            players[chanceAffectedPlayer].playerPosition = players[chanceAffectedPlayer].playerPosition - 3;
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
            taxEvasionTimer = players[chanceAffectedPlayer].budget;
            while (players[chanceAffectedPlayer].goCounter === taxEvasionTimer) {
                if (players[chanceAffectedPlayer].goCounter != taxEvasionTimer) {
                    if ((Math.floor(Math.random() * (100 - 1) + 1)) <= 50) {
                        players[chanceAffectedPlayer].budget = players[chanceAffectedPlayer].budget * (generalTax + 1)
                        //No taxes next round
                    } else {
                        players[chanceAffectedPlayer].playerPosition = cell[0]; //Go to jail
                    }
                }
            }
        } else if (chanceCard == 9) {
            console.log("Takin a ride");
            //Takin' a ride
            if (players[chanceAffectedPlayer].playerPosition == 38) {
                players[chanceAffectedPlayer].playerPosition = 5;
                cell[players[turnIndicator].playerPosition].removeChild(players[turnIndicator].icon); 
                cell[5].appendChild(players[turnIndicator].icon);
            } else if (players[chanceAffectedPlayer].playerPosition == 12) {
                cell[players[turnIndicator].playerPosition].removeChild(players[turnIndicator].icon); 
                cell[15].appendChild(players[turnIndicator].icon);
                players[chanceAffectedPlayer].playerPosition = 15;
            } else if (players[chanceAffectedPlayer].playerPosition == 26) {
                cell[players[turnIndicator].playerPosition].removeChild(players[turnIndicator].icon); 
                cell[35].appendChild(players[turnIndicator].icon);
                players[chanceAffectedPlayer].playerPosition = 35;
            } else {
                console.log("Something is going wrong with the takin a ride chance card")
            }
            //Player advances to closest transportation tile
        } else if (chanceCard == 10) {
            console.log("Bite of 87");
            //WAS THAT THE BITE OF 87????????
            cell[players[turnIndicator].playerPosition].removeChild(players[turnIndicator].icon); 
            cell[17].appendChild(players[turnIndicator].icon);
            players[chanceAffectedPlayer].playerPosition = 17; 
            //Player is advanced to Fredbear's family diner
        }
    }