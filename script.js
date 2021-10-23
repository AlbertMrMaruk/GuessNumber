"use strict";
const again = document.querySelector(".again");
let guessNum = Math.round(Math.random() * 19 + 1);
console.log(guessNum);
const subm = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const userNum = document.querySelector(".guess");
const body = document.querySelector("body");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const winOrlose = function (text, color) {
  message.textContent = text;
  number.textContent = guessNum;
  subm.disabled = true;
  userNum.disabled = true;
  body.style.backgroundColor = color;
  number.style.width = "30rem";
};
const lose = function (text) {
  message.textContent = text;
  score.textContent = String(Number(score.textContent) - 1);
};
subm.onclick = function () {
  if (Number(userNum.value) > guessNum) {
    lose("📈 Too High!");
  } else if (!userNum.value) {
    message.textContent = "⛔️ No number!";
  } else if (userNum.value < guessNum) {
    lose("📉 Too Low!");
  } else {
    winOrlose("🎉 Yeees!", "#60b347");
    if (score.textContent > highScore.textContent)
      highScore.textContent = score.textContent;
  }
  if (score.textContent < 1) {
    winOrlose("❌ You lost the game. Try again!", "#cc3300");
  }
};
again.onclick = function () {
  guessNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  console.log(guessNum);
  number.textContent = "?";
  subm.disabled = false;
  number.style.width = "15rem";
  userNum.disabled = false;
  userNum.value = "";
  score.textContent = "20";
};
