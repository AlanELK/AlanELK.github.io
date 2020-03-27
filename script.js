let userScore = 0;
let computerScore = 0;
let maxScore = 0;
let person;
const userScoreSpan = document.getElementById("userScoreNum");
const computerScoreSpan = document.getElementById("computerScoreNum");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const userResultDiv = document.getElementById("userResult");
const computerResultDiv = document.getElementById("computerResult");

function name() {
  person = prompt("Введите своё имя:", "Игрок");
  document.getElementById("userLabel").innerHTML = person;
}
name();

function getMaxScore() {
  maxScore = prompt("Сколько очков нужно для победы?", 3);
  maxScore = Number(maxScore);
  console.log(maxScore);
  proverka ();
}
getMaxScore();

function proverka () {
if ((maxScore <= 0) || (isNaN(maxScore) == true)) {
  alert ("Введите целое число");
  getMaxScore(); 
}
}
function main() {
  rockDiv.addEventListener("click", () => game("r"));
  paperDiv.addEventListener("click", () => game("p"));
  scissorsDiv.addEventListener("click", () => game("s"));
}
main();

function game(userChoice) {
  const computerChoice = getComputerChoice();
  userResultDiv.classList.remove('ru');
  userResultDiv.classList.remove('pu');
  userResultDiv.classList.remove('su');
  computerResultDiv.classList.remove('rc');
  computerResultDiv.classList.remove('pc');
  computerResultDiv.classList.remove('sc');
  switch (userChoice) {
    case "r":
      userResultDiv.classList.add('ru'); 
      break;
    case "p":
      userResultDiv.classList.add('pu');
      break;
    case "s":
      userResultDiv.classList.add('su'); 
      break;
  }
  switch (computerChoice) {
    case "r":
      computerResultDiv.classList.add('rc'); 
      break;
    case "p":
      computerResultDiv.classList.add('pc');
      break;
    case "s":
      computerResultDiv.classList.add('sc'); 
      break;
  }
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice, maxScore, person);
      if (userScore == maxScore) {
        alert("Выиграл " + person + "!");
        let more = confirm("Сыграть ещё раз?");
        if (more == true) {
        location.reload()
      }
      }
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice, maxScore);
      if (computerScore == maxScore) {
        alert("Выиграл компьютер" );
        let more = confirm("Сыграть ещё раз?");
        if (more == true) {
        location.reload()}
      }
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter ===  "r") return "Камень";
  if (letter === "p") return "Бумага";
  return "Ножницы";
}

function win(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertToWord(userChoice)} > ${convertToWord(computerChoice)}. Ты выиграл!`;
  userChoiceDiv.classList.add('green');
  setTimeout(() => userChoiceDiv.classList.remove('green'), 300);
  userResultDiv.classList.add('greenUser');
  setTimeout(() => userResultDiv.classList.remove('greenUser'), 300);
}

function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultP.innerHTML = `${convertToWord(userChoice)} < ${convertToWord(computerChoice)}. Ты проиграл...`;
  userChoiceDiv.classList.add('red');
  setTimeout(() => userChoiceDiv.classList.remove('red'), 300);
  userResultDiv.classList.add('redUser');
  setTimeout(() => userResultDiv.classList.remove('redUser'), 300);
}

function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(userChoice)} = ${convertToWord(computerChoice)}. Ничья.`;
  userChoiceDiv.classList.add('white');
  setTimeout(() => userChoiceDiv.classList.remove('white'), 300);
  userResultDiv.classList.add('whiteUser');
  setTimeout(() => userResultDiv.classList.remove('whiteUser'), 300);
}






