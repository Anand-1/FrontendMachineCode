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
  { city: "Chennai" },
  { city: "Hyderabad" },
];
// Step 4: (getting suggestions from keyword )
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
// Step 4 : (rendering suggestions)
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
// Step 3 : (populating with suggestions)
const populateSuggestions = (value) => {
  getSuggestions(value).then((suggestions) => {
    if (suggestions.length) {
      suggestionsBox.classList.add("suggestion-visible");
      renderItems(suggestions);
    } else {
      suggestionsBox.classList.remove("suggestion-visible");
    }
  });
};
// Step 2 : (taking input , providing debounce in progress)
const handleInputChange = (event) => {
  let timer;

  clearTimeout(timer);
  timer = setTimeout(() => {
    var value = event.target.value;
    console.log(value);
    if (value == "") {
      suggestionsBox.classList.remove("suggestion-visible");
    } else {
      populateSuggestions(value);
    }
  }, 1000);
};

//Step : 1 (attaching to HTML and providing eventlisteners)
const inputBox = document.getElementById("input-text");
const suggestionsBox = document.getElementById("suggestions-list");

inputBox.addEventListener("input", handleInputChange);
