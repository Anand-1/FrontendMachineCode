//without Event Delegation
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);
  });
});

//============================================
// With Event Delegation
const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.innerText);
  }
});
