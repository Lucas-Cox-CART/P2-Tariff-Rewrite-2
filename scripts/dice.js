// Remember that 'function rollDice()' needs to have an argument for player turn.
function rollDice() {
    /* Dice Data */
    let diceMath1 = Math.round(Math.random() * 6);
    let diceMath2 = Math.round(Math.random() * 6);
    let diceMove = diceMath1 + diceMath2;


    /* Dice Element */
    diceTimeout = setTimeout(diceLogoChanger, 5);
    let diceOne = document.getElementById('diceOne');
    let diceTwo = document.getElementById('diceTwo');
    diceOne.classList.remove('diceOne', 'diceTwo', 'diceThree', 'diceFour', 'diceFive', 'diceSix');
    diceTwo.classList.remove('diceOne', 'diceTwo', 'diceThree', 'diceFour', 'diceFive', 'diceSix');

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

function rare() {
    diceOne.classList.add('diceRare');
    diceTwo.classList.add('diceRare');
}