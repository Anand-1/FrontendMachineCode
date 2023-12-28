let localData = [];

function fetchData() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      if (data.length) {
        localData = data;
        populateBox(localData);
      } else {
        populateBox(localData);
      }
    });
}

function populateBox(data) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    card.innerHTML += element;
  }
}

fetchData();
let card = document.getElementById("card-container");
let cardBox = document.getElementsByClassName("card-container")[0];
