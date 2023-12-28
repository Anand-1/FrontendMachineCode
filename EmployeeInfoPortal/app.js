import data from "./data.json" assert { type: "json" };
console.log(data);

function renderList(list = []) {
  const itemsFrag = document.createDocumentFragment();
  list.forEach((item) => {
    let el = document.createElement("div");
    el.innerHTML = "Name: " + item.name + ",Place: " + item.place;
    el.classList.add("items-visible");
    itemsFrag.appendChild(el);
  });
  employeeList.innerHTML = "";
  employeeList.appendChild(itemsFrag);
}

var employeeList = document.getElementById("employee-list");
document.addEventListener("DOMContentLoaded", function () {
  renderList(data);
});
