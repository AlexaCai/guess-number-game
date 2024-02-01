'use strict';

// Define the secret number to find outside the event code block since we only want to define it once, and not everytime a user click on the check button
let secretNumber = Math.trunc(Math.random() * 10) + 1
// document.querySelector('.number').textContent = secretNumber

// Users initial score, set to 'score' variable
let score = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    //Important to convert to number because by default the input value is a string, which is not best to perform number comparaison
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input number
    if (!guess) {
        document.querySelector('.message').textContent = 'No number ⛔'

        // When users have the right answer
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number! 🎉';
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When users guess too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too high ⬆️';
            score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game🥺';
            document.querySelector('.score').textContent = 0;
        }

        // When users guess too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number too low ⬇️';
            score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game🥺';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
})
