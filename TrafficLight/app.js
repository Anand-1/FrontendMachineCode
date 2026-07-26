// Traffic Light
console.log("Traffic Light Loaded!");

const lights = document.querySelectorAll(".circle");
const toms = document.querySelectorAll(".tom")
const durations = [1000, 1000, 1000];
let currentLight = 0;
console.log(lights)
function colorChange() {
  lights.forEach((light, index) => {
    light.classList.toggle("active", index === currentLight);
  });
  toms.forEach((tom, index) => {
    tom.classList.toggle("active", index === currentLight);
  });

  setTimeout(() => {
    currentLight = (currentLight + 1) % durations.length;
    colorChange();
  }, durations[currentLight]);
}

colorChange();
