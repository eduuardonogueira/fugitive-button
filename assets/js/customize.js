const data = {};
const url = window.location.toString().replace("customize.html", "");

const question = document
  .getElementById("question")
  .addEventListener("input", (event) => getInputValue(event));

const answer = document
  .getElementById("answer")
  .addEventListener("input", (event) => getInputValue(event));

const imageUrl = document
  .getElementById("image-url")
  .addEventListener("input", (event) => getInputValue(event));

const inputFile = document
  .getElementById("file")
  .addEventListener("change", (event) => uploadImage(event));

const generatedUrl = document.getElementById("generated-url");

function uploadImage(event) {
  const file = event.target.files[0];

  var formData = new FormData();

  formData.append("image", file);

  const HttpConfig = {
    method: "POST",
    headers: {
      Authorization: "Client-ID 5624532fa15df26",
    },
    body: formData,
  };

  fetch("https://api.imgur.com/3/image/", HttpConfig)
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      const imgurUrl = response.data.link;
      const imageUrl = document.getElementById("image-url");

      imageUrl.readOnly = true;
      imageUrl.value = imgurUrl;
      data["imageUrl"] = imgurUrl;

      putGenerateUrl();
    });
}

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

function getInputValue(event) {
  const value = event.target.value;
  const key = event.target.name;
  data[key] = value;
  putGenerateUrl();
}

function putGenerateUrl() {
  generatedUrl.value = `${url}play.html?${placeParams()}`;
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
