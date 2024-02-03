const buttonNao = document.getElementById("nao");
const buttonSim = document.getElementById("sim");
const buttonRestart = document.getElementById("restart");
const res = document.getElementById("res");
const background = document.getElementById("background");

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (window.innerHeight - 79));

  return randomNumber;
};

buttonNao.addEventListener("mouseover", () => {
  buttonNao.style.position = "absolute";
  buttonNao.style.top = `${getRandomNumber()}px`;
  buttonNao.style.left = `${getRandomNumber()}px`;
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
