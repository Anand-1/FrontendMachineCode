
import { data } from "./infoData.js";

function applyRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
applyRandomColor();

function populateBox() {
  const mainBox = document.getElementById('navbar-home')
  data.forEach((item, index) => {
    const element = document.createDocumentFragment()
    const mainElement = document.createElement('div')
    mainElement.classList.add('box-info')
    mainElement.innerText = item.info;
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.name + ' >';
    element.appendChild(mainElement)
    mainElement.appendChild(link);
    mainBox.append(element)
  })
}

populateBox(data)