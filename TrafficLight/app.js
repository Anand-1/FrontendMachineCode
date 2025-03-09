// Create Traffic Light
console.log("Traffic Light Loaded!");

const lights = document.querySelectorAll(".circle");
const durations = [4000, 500, 3000];
let currentLight = 0;

function colorChange() {
  lights.forEach((lights, index) => {
    lights.classList.toggle("active", index === currentLight);
  });

  setTimeout(() => {
    currentLight = (currentLight + 1) % durations.length;
    colorChange();
  }, durations[currentLight]);
}
colorChange();

//https://blog.stackademic.com/building-a-traffic-light-system-a-fun-take-on-frontend-interviews-9b3ae6d876b7
