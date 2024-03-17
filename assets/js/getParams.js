const question = document.getElementById("question");
const answer = document.getElementById("answer");
const image = document.getElementById("image");

const data = {};
const params = decodeURIComponent(location.search).slice(1).split("&");

console.log(params);

if (params.length !== 0) {
  params.forEach((param) => {
    const parts = param.split("=");
    const key = parts[0];
    const value = parts[1].replace(/_/g, " ");
    data[key] = value;
  });

  question.innerHTML = data.question;
  answer.innerHTML = data.answer;
  image.src = data.imageUrl;
}
