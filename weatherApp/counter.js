export function setupCounter(element) {
  let counter = 1;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter * 2));
  setCounter(1);
}
