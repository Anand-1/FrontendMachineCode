const suggestionsData = [
  "Samastipur",
  "Patna",
  "Delhi",
  "Kolkata",
  "Bangalore",
  "Pune",
  "Mumbai",
];

const getSuggestions = (keyword) => {
  let result = suggestionsData.filter(
    (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  return new Promise((res) => {
    setTimeout(() => {
      res(result);
    }, 1000);
  });
};

const renderItems = (list = []) => {
  const suggestionFrag = document.createDocumentFragment();
  list.forEach((item) => {
    let el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("items-visible");
    suggestionFrag.appendChild(el);
  });
  suggestionsBox.innerHTML = "";
  suggestionsBox.appendChild(suggestionFrag);
};

const handleInputChange = (event) => {
  let value = event.target.value;
  getSuggestions(value).then((suggestions) => {
    console.log(suggestions);
    if (suggestions.length) {
      suggestionsBox.classList.add("suggestion-visible");
      renderItems(suggestions);
    }
  });
};
const inputBox = document.getElementById("input-text");
const suggestionsBox = document.getElementById("suggestions-list");

inputBox.addEventListener("input", handleInputChange);
