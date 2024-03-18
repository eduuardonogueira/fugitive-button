const question = document.getElementById("question");
const answer = document.getElementById("answer");
const image = document.getElementById("image");

const data = {};
const url = decodeURIComponent(location.search);

if (url) {
  const params = url.slice(1).split("&");

  params.forEach((param) => {
    const parts = param.split("=");
    const key = parts[0];
    const value = parts[1].replace(/_/g, " ");
    data[key] = value;
  });

  question.innerHTML = data.question;
  answer.innerHTML = data.answer;

  if (data.imageUrl) {
    image.src = data.imageUrl;
  } else {
    image.style.display = "none";
  }
}
