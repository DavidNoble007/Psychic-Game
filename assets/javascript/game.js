

// function retrieves random

function generateAlphabet() {
    var arr = [];
    for (var i = 97; i <= 122; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr
}

// creates variables for use later as wins, losses, guessesleft sofar and generate alphabet array
var wins = 0;
var losses = 0;
var guessesleft = 10;
var sofar = 0;

var alphabet = generateAlphabet();
var sofar = document.getElementById("so-far");
console.log(sofar);

// Create variables that hold references to the places in the HTML where we want to display things.

var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $guessesleft = document.getElementById("guessesleft");
var $sofar = document.getElementById("sofar");
var $computerGuess = document.getElementById("computerGuess")
var guessessofar = [];

// performs the following functions whenever a key is pressed. 
document.onkeyup = function (event) {
  
        // Determines which key was pressed.
    var guess = event.key;
    guessessofar.push(guess);
    guess = guess.toLowerCase();
    console.log(guess);




    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerguess)

    // This logic determines the outcome of the game (win/loss), and increments the appropriate number
    // guess equals computerguess
    if (guess === computerguess) {
        wins++;
    }
    console.log(wins)
    {
        losses++;
    }
    console.log(losses)
    guess.textContent = "You chose: " + guess;
    $computerGuess.textContent = "The computer chose: " + computerguess;
    $wins.textContent = "wins: " + wins;
    $losses.textContent = "losses: " + losses;
    $guessesleft.textContent = "Guesses Left: " + guessesleft;
}


