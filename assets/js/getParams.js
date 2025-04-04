const question = document.getElementById("question");
const answer = document.getElementById("answer");
const image = document.getElementById("image");
const keyString = "key-super-secret";

const data = {};

async function processUrlParams() {
  const url = decodeURIComponent(location.search);

  if (!url) return;

  const encryptedParams = url.split("?")[1];
  const descryptedParams = await decryptFromUrl(encryptedParams, keyString);
  const params = descryptedParams.split("&");

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

async function decryptFromUrl(params, keyString) {
  const [ivBase64, dataBase64] = decodeURIComponent(params).split(":");
  const iv = Uint8Array.from(atob(ivBase64), (c) => c.charCodeAt(0));
  const encrypted = Uint8Array.from(atob(dataBase64), (c) => c.charCodeAt(0));

  const key = await generateKey(keyString);
  const descryptData = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encrypted
  );

  return new TextDecoder().decode(descryptData);
}

async function generateKey(keyString) {
  const enc = new TextEncoder();
  return await crypto.subtle.importKey(
    "raw",
    enc.encode(keyString.padEnd(32)), // AES-256 = 32 bytes
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  );
}

processUrlParams();
