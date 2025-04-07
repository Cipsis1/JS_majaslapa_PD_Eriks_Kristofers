var cardHTML = document.getElementById("cardImage");
var scoreHTML = document.getElementById("scoreDisplay");
var resultHTML = document.getElementById("result");

var possibleCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var previousCard = 0;
var numQuestionsAsked = 0;
var numCorrect = 0;

function resetCardGame() {
    previousCard = generateCard();
    cardHTML.src = "kartinas/card" + previousCard + ".png";

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function submitGuess(highLowGuess) {
    console.log("Clicked:", highLowGuess);
    var newCard = generateCard();
    var correctGuess = guessCard(highLowGuess, newCard);
    updateScores(correctGuess);
    updateDisplay(correctGuess);
    setPreviousCard(newCard);
}

function generateCard() {
    let randomCard;
    do {
        let randomIndex = Math.floor(Math.random() * possibleCards.length);
        randomCard = possibleCards[randomIndex];
    } while (randomCard === previousCard);
    return randomCard;
}

function guessCard(highLowGuess, newCard) {
    if (highLowGuess === "Higher") {
        return newCard > previousCard;
    } else if (highLowGuess === "Lower") {
        return newCard < previousCard;
    }
    return false;
}

function updateScores(correct) {
    if (correct){ numCorrect++;
    numQuestionsAsked++;
    addPoints(10)
}else{
    subtractPoints(10)
}
}

function updateDisplay(correctGuess) {
    let result = correctGuess ? "Correct" : "Incorrect";
    resultHTML.innerText = "You were: " + result;
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function setPreviousCard(newCard) {
    previousCard = newCard;
    cardHTML.src = "kartinas/card" + previousCard + ".png";
}


resetCardGame();


function laiks() {
    const tagad = new Date();
    const formatetsLaiks = tagad.getFullYear() + "-" +
    String(tagad.getMonth() + 1).padStart(2, '0') + "-" +
    String(tagad.getDate()).padStart(2, '0') + " " +
    String(tagad.getHours()).padStart(2, '0') + ":" +
    String(tagad.getMinutes()).padStart(2, '0') + ":" +
    String(tagad.getSeconds()).padStart(2, '0');
  
    document.getElementById("laiks").textContent = formatetsLaiks;
  }
  
  laiks();
  setInterval(laiks, 1000);

  let person = window.localStorage.getItem("person");
  document.getElementById("speletajs").innerHTML = person;


let points = window.localStorage.getItem("points");
if (points === null) {
  points = 0;
} else {
  points = parseInt(points);
}

function updatePointsDisplay() {
  document.getElementById('punkti').innerHTML = points;
}

function addPoints(amount) {
  points += amount;
  localStorage.setItem('points', points);
  updatePointsDisplay();
}

function subtractPoints(amount) {
    points -= amount;
    if (points < 0) points = 0;
    localStorage.setItem('points', points);
    updatePointsDisplay();
  }

updatePointsDisplay();
  