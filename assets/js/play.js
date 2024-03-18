const buttonNot = document.getElementById("not");
const buttonYes = document.getElementById("yes");
const buttonRestart = document.getElementById("restart");

const text = document.getElementById("answer");
const questionBox = document.getElementById("question-box");
const answerBox = document.getElementById("answer-box");

const getRandomNumberHeight = () =>
  Math.floor(Math.random() * (window.innerHeight - buttonNot.clientHeight));

const getRandomNumberWidth = () =>
  Math.floor(Math.random() * (window.innerWidth - buttonNot.clientWidth));

buttonNot.addEventListener("mouseover", () => {
  buttonNot.style.position = "absolute";
  buttonNot.style.top = `${getRandomNumberHeight()}px`;
  buttonNot.style.left = `${getRandomNumberWidth()}px`;
});

buttonYes.addEventListener("click", () => {
  text.style.display = "block";
  questionBox.style.display = "none";
  answerBox.style.display = "flex";
  buttonRestart.style.display = "flex";
});

buttonRestart.addEventListener("click", () => {
  text.style.display = "none";
  answerBox.style.display = "none";
  buttonRestart.style.display = "none";
  questionBox.style.display = "flex";

  buttonNot.style.position = "relative";
  buttonNot.style.top = "unset";
  buttonNot.style.left = "unset";
});
