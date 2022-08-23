// Wait for the DOM to finish loading before running the game
// Get The button elements and add event Listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The Main game "Loop", called when thje script is first loaded
 * and After the sers answer jas neem processed
 */

function runGame(gameType) {

    // Creates two random Numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }
    else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}. Aborting!`;
    }

}

/**
 * Check The answer against the first element in
 * the return calculateCorrectAnswer array.
 */

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey, You Got it right! :D');
        incrementScore();
    }
    else {
        alert(`Awww... You answered ${userAnswer}. The Correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 *  Get the operands (The Numbers) and the operator (plus, minus etc)
 *  directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, "addition"];
    }
    else {
        alert(`Unimplemented Operator ${operator}`);
        throw `Unimplemented Operator ${operator}. Aborting!`;
    }

}

/**
 * Get the current score from the DOM and increment it by 1
 */

function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Get the current tall if the incorrect answer from the DOM and increment it by 1
 */

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}