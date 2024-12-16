/*---------------
    FUNCTIONS
-----------------*/
/**
 * Get random integer.
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Game over
 */
function gameOver() {
    gameContainerElm.classList.add("d-none");
    winnerContainerElm.classList.remove("d-none");
}

/*---------------
    VARIABLES
-----------------*/
const tableNumbers = [];
const extractedNumbers = [];

/*---------------
    DOM ELEMENTS
-----------------*/
const tableElm = document.getElementById("table");
const btnExtractElm = document.getElementById("btn-extract");
const btnGameOverElm = document.getElementById("btn-gameover");
const btnRestarElm = document.getElementById("btn-restart");
const lastNumberExtractElm = document.getElementById("last-number-extract");
const gameContainerElm = document.querySelector(".game-container");
const winnerContainerElm = document.querySelector(".winner-container");

/*---------------
    DOM EVENTS
-----------------*/

// On Document ready
let tableItems = "";
for(let i = 1; i <= 90; i++) {
    tableNumbers.push(i);
    tableItems += `<div class="table__cell">${i}</div>`;
}
tableElm.innerHTML = tableItems;

// On click btn extract
btnExtractElm.addEventListener("click", function() {
    const randomIndex = getRndInteger(0, tableNumbers.length - 1);
    const extractedNumber = tableNumbers[randomIndex];
    // Rimuovo il numero estratto dall'array tableNumbers 
    tableNumbers.splice(randomIndex, 1);
    // Aggiungo il numero estratto all'array extractedNumbers
    extractedNumbers.push(extractedNumber);
    // Seleziono il numero sul tabellone
    const extractedCellElm = tableElm.querySelector(`.table__cell:nth-child(${extractedNumber})`);
    extractedCellElm.classList.add("table__cell-extracted");
    // Aggiorno il valore del numero estratto
    lastNumberExtractElm.innerHTML = extractedNumber;

    // Se extractCounter === 15 allora tolgo il disabled dal button termina
    if(extractedNumbers.length === 15) {
        btnGameOverElm.disabled = false;
    }

    if(tableNumbers.length === 0) {
        gameOver();
    }
});

// On click btn gamover
btnGameOverElm.addEventListener("click", gameOver);

// On click btn restart
btnRestarElm.addEventListener("click", function() {
    location.reload();
});