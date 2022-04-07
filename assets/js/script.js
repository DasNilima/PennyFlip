// TODO: Declare any global variables we need
let totalFlip = 0
let numHeads = 0
let numTails = 0
let flip = document.querySelector("#flip")
let clear = document.querySelector("#clear")
let message = document.querySelector(".message-container")

// Used switch statement so some code could be used for additional outcomes
flip.addEventListener('click', function() {
let isHeads = Math.round(Math.random() * 100000) % 2 === 0 // " === 0 " can be removed and cases changed to modulus number for more outcomes
switch (isHeads) {
case true:
    numHeads++
    totalFlip++
    updateScores()
    message.textContent = "You Flipped Heads!"
    document.getElementById("pic").src="./assets/images/penny-heads.jpg";
    document.getElementById("pic").style.animationName = "blink"
    break;
case false:
    numTails++
    totalFlip++
    updateScores()
    message.textContent = "You Flipped Tails!"
    document.getElementById("pic").src="./assets/images/penny-tails.jpg";
    document.getElementById("pic").style.animationName = "blink"
    break;
}
})
// Updates scoreboard
function updateScores() {
document.getElementById("head").textContent = numHeads
document.getElementById("tail").textContent = numTails
document.getElementById("head-percent").textContent = Math.round(numHeads / totalFlip * 100) + "%"
document.getElementById("tail-percent").textContent = Math.round(numTails / totalFlip * 100) + "%"

}
// Clears Scoreboard
clear.addEventListener('click', function() {
    numHeads = 0
    numTails = 0
    totalFlip = 0
    document.getElementById("head").textContent = 0
document.getElementById("tail").textContent = 0
document.getElementById("head-percent").textContent = "0%"
document.getElementById("tail-percent").textContent = "0%"
message.textContent = "Let's Get Rolling!"
    
})
