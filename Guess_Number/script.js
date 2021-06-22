'use strict';

let SCORE = 20;

function getRandNumber(max){
    return Math.floor(Math.random() * max);
}

const numberToGuess = getRandNumber(20);
console.log(numberToGuess);

const guessNumber = (number) => {
    if(SCORE != 0){
        if (Number(number)){
            console.log('Guessing - ' + number);
            if (number == numberToGuess){
                let questionElement = document.querySelector('.number');
                questionElement.innerHTML = `      <div class="number">${numberToGuess}</div>`;
                console.log('You win! With a score of: ' + SCORE);
                let messageElement = document.querySelector('.message');
                messageElement.innerHTML = `      <p class="message">You Win!</p>  `;
            }
            else{
                if (SCORE > 1){
                    SCORE = SCORE - 5;
                    console.log('Wrong! '+SCORE+" Points left.");
                    let scoreArea = document.querySelector('.score');
                    scoreArea.innerHTML = `<span class="score">${SCORE}</span>`

                    if (SCORE == 1 || SCORE == 0){
                        console.log('GAME OVER');
                        let messageElement = document.querySelector('.message');
                        messageElement.innerHTML = `      <p class="message">GAME OVER</p>  `;
                    }
                }
                else{
                    console.log('Game over');
                }
            }
        }
        else{
            console.log('Not a number');
        }
    }
}

document.getElementById('again').onclick = function(){
    document.location.href = '';
}

document.getElementById('check').onclick = function(){
    let guessArea = document.querySelector('.guess').value;
    console.log(guessArea);
    guessNumber(guessArea)
}

