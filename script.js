'use strict';

// Define the secretNumber outside the event code block since we only want to define it once, and not everytime a user click on the check button
let secretNumber = Math.trunc(Math.random() * 100) + 1
let score = 100;
let highScore = 0;

// Functions created to avoid writing the same lines of code several times for the same purpose
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const displaySecretNumber = function (number) {
    document.querySelector('.number').textContent = number
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score
}

const secretNumberMargin = function (margin) {
    document.querySelector('.number').style.width = margin;
}

const backgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
    //Important to convert the entry to a number because by default the input value is a string, which is not good to perform number comparaison in condition logics below
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input number
    if (!guess) {
        displayMessage('No number ⛔')

        // When users have the right answer
    } else if (guess === secretNumber) {
        displayMessage('Correct number! 🎉');
        displaySecretNumber(secretNumber);
        secretNumberMargin('30rem');
        backgroundColor('#60b347');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When users have the wrong answer
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Number too high ⬆️' : 'Number too low ⬇️');
            score = score - 2
            displayScore(score);
        } else {
            displayMessage('You lost the game🥺');
            displayScore(0);
        }
    }
});

// Set everything back to default when users click reset
document.querySelector('.again').addEventListener('click', function () {
    score = 100;
    secretNumber = Math.trunc(Math.random() * 100) + 1
    document.querySelector('.guess').value = '';
    backgroundColor('#222');
    secretNumberMargin('15rem');
    displaySecretNumber('?');
    displayMessage('Start guessing...');
    displayScore(score);
})
