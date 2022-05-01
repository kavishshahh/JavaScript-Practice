//Challenge 1: Your age in Days
function ageInDays() {
    var currentYear = 2022
    var birthYear = prompt("What year were you born in?")
    var totaldays = (currentYear - birthYear) * 365;

    var h2 = document.createElement('h2');
    h2.setAttribute('id', 'ageInDays');

    var textAnswer = document.createTextNode('You are ' + totaldays + ' days old');
    h2.appendChild(textAnswer);

    document.getElementById('flex-box-result').appendChild(h2);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator
function generatecat() {
    var image = document.createElement('img');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"

    var div = document.createElement('div');
    div.setAttribute('id', 'allTheCats')

    div.appendChild(image);

    document.getElementById('flex-cat-gen').appendChild(div);

}
function resetcat() {
    document.getElementById('allTheCats').remove();
}

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    var humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomNum());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);

    rpsFrontEnd(humanChoice, botChoice, message);


}

function randomNum() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDataBase = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
    }

    var yourScore = rpsDataBase[humanChoice][botChoice]
    var computerScore = rpsDataBase[botChoice][humanChoice]

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }
    else if (yourScore === 1) {
        return { 'message': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanChoice, botChoice, message) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px;'>" + message['message'] + "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change color buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonGreen();
    }
    else if (buttonThingy.value === 'reset') {
        buttonReset();
    }
    else if (buttonThingy.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function buttonRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//Challenge 5 : Blackjack

let blackJackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box' },
    'dealer': { 'dealerSpan': '#dealer-blackjack-result', 'div': '#dealer-box' },
}

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitsound = new Audio('/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
    showCard(YOU);
}

function showCard(activeplayer) {
    let cardImage = document.createElement('img');
    cardImage.src = '/images/2.png';
    document.querySelector(activeplayer['div']).appendChild(cardImage);
    hitsound.play();
}
