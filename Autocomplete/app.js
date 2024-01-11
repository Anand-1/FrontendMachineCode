const suggestionsData = [
  { city: "Samastipur" },
  { city: "Patna" },
  { city: "Delhi" },
  { city: "Kolkata" },
  { city: "Bangalore" },
  { city: "Pune" },
  { city: "Mumbai" },
  { city: "Darbhanga" },
  { city: "Goa" },
  { city: "Pondi" },
  { city: "Mumbai" },
  { city: "Chennai" },
  { city: "Hyderabad" },
];

const getSuggestions = (keyword) => {
  // let result = suggestionsData.filter(
  //   (i) =>
  //     i.city.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  // );

  let result = suggestionsData.filter((i) =>
    i.city.toLowerCase().includes(keyword)
  );

  return new Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 0);
  });
};

const renderItems = (list = []) => {
  const suggestionFrag = document.createDocumentFragment();
  list.forEach((item) => {
    let el = document.createElement("div");
    el.innerHTML = item.city;
    suggestionFrag.appendChild(el);
  });
  suggestionsBox.innerHTML = "";
  suggestionsBox.appendChild(suggestionFrag);
};

const handleInputChange = (event) => {
  let value = event.target.value;
  if (value == "") {
    suggestionsBox.classList.remove("suggestion-visible");
  } else {
    getSuggestions(value).then((suggestions) => {
      if (suggestions.length) {
        suggestionsBox.classList.add("suggestion-visible");
        renderItems(suggestions);
      } else {
        suggestionsBox.classList.remove("suggestion-visible");
      }
    });
  }
};
const inputBox = document.getElementById("input-text");
const suggestionsBox = document.getElementById("suggestions-list");

inputBox.addEventListener("input", handleInputChange);
