let localData = [];

function fetchData() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.length) {
        localData = data;
        populateBox(localData);
      } else {
        populateBox(localData);
      }
    });
}

function populateBox(data) {
  let dataFragment = document.createDocumentFragment();
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    let mainelement = document.createElement("div");
    let priceElement = document.createElement("div");
    let imgElement = document.createElement("img");

    imgElement.classList.add("image-box");
    priceElement.classList.add("price-box");
    mainelement.classList.add("card-box");
    imgElement.src += element.image;
    mainelement.innerHTML += `Name : ${element.id}`;
    priceElement.innerHTML += ` Price Change : ${element.price_change_24h}`;
    mainelement.appendChild(imgElement);
    mainelement.appendChild(priceElement);

    dataFragment.appendChild(mainelement);
  }
  card.appendChild(dataFragment);
}

fetchData();
let card = document.getElementById("card-container");
