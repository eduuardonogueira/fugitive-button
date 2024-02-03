const buttonNao = document.getElementById("nao");
const buttonSim = document.getElementById("sim");
const buttonRestart = document.getElementById("restart");
const res = document.getElementById("res");
const background = document.getElementById("background");

const getRandomNumberHeight = () => (Math.floor(Math.random() * (window.innerHeight - 37)))

const getRandomNumberWidth = () => (Math.floor(Math.random() * (window.innerWidth - 79)))

buttonNao.addEventListener("mouseover", () => {
  buttonNao.style.position = "absolute";
  buttonNao.style.top = `${getRandomNumberHeight()}px`;
  buttonNao.style.left = `${getRandomNumberWidth()}px`;
});

buttonSim.addEventListener("click", () => {
  res.style.display = "block";
  background.style.display = "flex";
  buttonRestart.style.display = "flex";
});

buttonRestart.addEventListener("click", () => {
  res.style.display = "none";
  background.style.display = "none";
  buttonRestart.style.display = "none";

  buttonNao.style.position = "relative";
  buttonNao.style.top = "unset";
  buttonNao.style.left = "unset";
});;
