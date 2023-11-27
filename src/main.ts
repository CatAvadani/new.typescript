import "./style.css";

window.addEventListener("DOMContentLoaded", main);

function main() {
  const button = document.querySelector("button");
  button?.addEventListener("click", randomizeBackgroundColor);
  const fullName = getFullName("My", "Myanssonn");
  console.log(fullName);
}

function randomizeBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

function getFullName(firstName: string, lastName: string) {
  // return firstName +" "+ lastName;
  return `${firstName} ${lastName}`;
}
