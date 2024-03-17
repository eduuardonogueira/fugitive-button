const data = {};
const url = window.location.toString().replace("customize.html", "");

const question = document.getElementById("question");
question.addEventListener("input", () => {
  getInputValue(question);
});

const answer = document.getElementById("answer");
answer.addEventListener("input", () => {
  getInputValue(answer);
});

const imageUrl = document.getElementById("image-url");
imageUrl.addEventListener("input", () => {
  getInputValue(imageUrl);
});

const generatedUrl = document.getElementById("generated-url");

function placeParams() {
  const parts = Object.entries(data);
  const params = parts.map(
    (part) => `${part[0]}=${part[1].replace(/ /g, "_")}`
  );
  const concatenatedParams = params.reduce(
    (prev, current) => (prev = `${prev}&${current}`)
  );

  return concatenatedParams;
}

function getInputValue(inputName) {
  const value = inputName.value;
  const key = inputName.name;
  data[key] = value;
  generatedUrl.value = `${url}?${placeParams()}`;
}

const copyButton = document.getElementById("copy");
const testButton = document.getElementById("test");

testButton.addEventListener("click", () => {
  window.location.replace(generatedUrl.value);
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedUrl.value);
  alert("Url copiada com sucesso!");
});
