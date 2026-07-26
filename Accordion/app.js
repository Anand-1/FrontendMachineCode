var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function applyRandomColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
applyRandomColor();
