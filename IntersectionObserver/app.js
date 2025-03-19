const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const intersecting = entry.isIntersecting;
    entry.target.style.backgroundColor = intersecting ? "blue" : "orange";
  }
});
const box = document.getElementById("box");
observer.observe(box);
