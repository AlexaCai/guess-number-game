'use strict';

// Define the secret number to find outside the event code block since we only want to define it once, and not everytime a user click on the check button
const secretNumber = Math.trunc(Math.random() * 10) + 1
document.querySelector('.number').textContent = secretNumber

// Users initial score, set to 'score' variable
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
    //Important to convert to number because by default the input value is a string, which is not best to perform number comparaison
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    // When there's no input number
    if (!guess) {
        document.querySelector('.message').textContent = 'No number ⛔'

    // When users have the right answer
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number! 🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

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