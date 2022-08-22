// Wait for the DOM to finish loading before running the game
// Get The button elements and add event Listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})

/**
 * The Main game "Loop", called when thje script is first loaded
 * and After the sers answer jas neem processed
 */

function runGame(){
    // Creates two random Numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){
    
}
function displayAdditionQuestion(){
    
}
function displayMultiplyQuestion(){
    
}