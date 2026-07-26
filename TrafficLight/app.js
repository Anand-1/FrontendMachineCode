// Traffic Light
console.log("Traffic Light Loaded!");

const lights = document.querySelectorAll(".circle");
const durations = [3000, 1000, 3000];
let currentLight = 0;

function colorChange() {
  lights.forEach((light, index) => {
    light.classList.toggle("active", index === currentLight);
  });

  setTimeout(() => {
    currentLight = (currentLight + 1) % durations.length;
    colorChange();
  }, durations[currentLight]);
}

colorChange();

// https://blog.stackademic.com/building-a-traffic-light-system-a-fun-take-on-frontend-interviews-9b3ae6d876b7
