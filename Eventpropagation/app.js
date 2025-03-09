const user = document.getElementsByClassName("user")[0];
const cta = document.getElementsByClassName("user__cta")[0];
const result = document.getElementsByClassName("result")[0];

user.addEventListener(
  "click",
  () => {
    result.classList.remove("hidden");
    result.innerHTML = `
  <em>"The most important thing in this world right now is money, followed by brains and inspiration."</em>
    <table>
  <tr>
    <th>Attribute</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>Gender</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Birthdate</td>
    <td>February 29 (Pisces)</td>
  </tr>
  <tr>
    <td>Residence</td>
    <td>Honekawas' Residence</td>
  </tr>
</table>
  `;
  },
  true
);

cta.addEventListener("click", (event) => {
  //   event.stopPropagation();
  event.stopImmediatePropagation();
  result.classList.remove("hidden");
  result.innerHTML = `
  <h2>Hey, I'm Suneo Honekawa</h2>
    <textarea rows="10"></textarea>
    <button>Send</button>
  `;
});

result.addEventListener("click", () => {
  result.classList.add("hidden");
});
