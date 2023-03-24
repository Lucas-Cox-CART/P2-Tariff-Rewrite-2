function gotoSettings() {
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    settingsPage.style.display = "flex";
}
//Hides the main screen and displays the settings

function startGame() {
    playerCreation();
    settingsPage.style.display = "none";
    mainGame.style.display = "flex";
    currentPlayerBar();
}

//Hides the settings and displays the game

let playerName = document.getElementById('playerName');
playerName.addEventListener('change', (e) => {
    playerName.value = document.getElementById('playerName').value;
});

let startingBudget;
//Default value for the budgets of players
startingBudget = document.addEventListener("change", (e) => {
    startingBudget = document.getElementById("initialBudget").value;
    startingBudget = Math.floor(startingBudget);
});
startingBudget = 600000;

let tax;
//Default value for tax
tax = document.addEventListener("change", (e) => {
    tax = document.getElementById("initialTax").value;
    tax = Math.floor(tax) / 100;
});
tax = 0.09;

let difficulty;
difficulty = document.addEventListener("change", (e) => {
    difficulty = document.getElementById('selectDifficulty').value;
    difficulty = Math.floor(difficulty);
});
//Difficulty settings: 
document.getElementById("selectDifficulty").addEventListener("change", (e) => {
    if (difficulty == 1) {
        document.getElementById("initialBudget").value = 600000;
        startingBudget = 600000;
        document.getElementById("initialTax").value = 9;
        tax = 0.09;
    } else if (difficulty == 2) {
        document.getElementById("initialBudget").value = 400000;
        startingBudget = 400000;
        document.getElementById("initialTax").value = 12;
        tax = 0.12;
    } else if (difficulty == 3) {
        document.getElementById("initialBudget").value = 200000;
        startingBudget = 200000;
        document.getElementById("initialTax").value = 16;
        tax = 0.16;
    } else if (difficulty == 4) {
        document.getElementById("initialBudget").value = "";
        startingBudget = "";
        document.getElementById("initialTax").value = "";
        tax = "";
    }
});
difficulty = 1;
//Default difficulty

//Character selecting options
let CharacterSelect1 = document.getElementById('Cselection1');
let CharacterSelect2 = document.getElementById('Cselection2');
let CharacterSelect3 = document.getElementById('Cselection3');

CharacterSelect1.addEventListener('click', (e) => {
    CharacterSelect1.classList.add('selectedCharacter');
        CharacterSelect2.classList.remove('selectedCharacter');
        CharacterSelect3.classList.remove('selectedCharacter');
})
CharacterSelect2.addEventListener('click', (e) => {
    CharacterSelect2.classList.add('selectedCharacter');
        CharacterSelect1.classList.remove('selectedCharacter');
        CharacterSelect3.classList.remove('selectedCharacter');
})
CharacterSelect3.addEventListener('click', (e) => {
    CharacterSelect3.classList.add('selectedCharacter');
        CharacterSelect1.classList.remove('selectedCharacter');
        CharacterSelect2.classList.remove('selectedCharacter');
})