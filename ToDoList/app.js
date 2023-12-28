console.log("Todo List");
let dataList = [];
let localValue = "";
const handleInputChange = () => {
  localValue = event.target.value;
};
const saveItem = () => {
  dataList.push(localValue);
  renderItems(dataList);
  localValue = "";
  inputBox.innerHTML = "";
};

const renderItems = (list = []) => {
  const itemsFrag = document.createDocumentFragment();
  list.forEach((item) => {
    let el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("items-visible");
    itemsFrag.appendChild(el);
  });
  itemsList.innerHTML = "";
  itemsList.appendChild(itemsFrag);
};
const inputBox = document.getElementById("input-text");
const inputButton = document.getElementById("input-button");
const itemsList = document.getElementById("list-Items");
inputButton.addEventListener("click", saveItem);
inputBox.addEventListener("input", handleInputChange);
