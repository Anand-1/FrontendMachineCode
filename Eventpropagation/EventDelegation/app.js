//Inserting some random links
let dropdownMenus = document.getElementsByClassName("dropdown-menu")[0];
dropdownMenus.forEach(function (menu) {
  for (let i = 1; i <= Math.floor(Math.random() * 2) + 4; i++) {
    let link = document.createElement("li");
    link.innerHTML = `<a href="#">Link ${i}</a>`;
    menu.appendChild(link);
  }
});

//Navbar interaction using Event Delegation
document.querySelector(".menu").addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("dropdown-toggle")) {
    let dropdown = target.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }
});
