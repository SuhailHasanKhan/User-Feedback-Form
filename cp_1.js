// Coding Project 1

const form = document.getElementById("feedback-form");
const submittedFeedback = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");
const counter = document.getElementById("char-count");

form.addEventListener("input", (e) => {
  let t = e.target;
  if (t.id === "comments") {
    counter.textContent = `${t.value.length} characters`;
  }
});

form.addEventListener("mouseover", (e) => {
  let t = e.target;
  if (!t.matches("input, textarea, button, label")) return;
  let tTip = t.getAttribute("data-tooltip");
  if (!tTip) return;
  tooltip.textContent = tTip;
  tooltip.hidden = false;
});

form.addEventListener("mouseout", (e) => {
  let t = e.target;
  if (!t.matches("input, textarea, button, label")) return;
  tooltip.hidden = true;
});

form.addEventListener("mousemove", (e) => {
  if (tooltip.hidden) return;
  tooltip.style.left = (e.pageX + 5) + "px";
  tooltip.style.top = (e.pageY + 5) + "px";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.name.value.trim();
  let email = form.email.value.trim();
  let text = form.comments.value.trim();

  let ok = true;
  if (!name)  { setError("name", "This is a required field."); ok = false; }
  if (!email) { setError("email", "This is a required field."); ok = false; }
  if (!text)  { setError("comments", "This is a required field."); ok = false; }
  if (!ok) return;

  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
  <div>${name} (${email})</div>
  <p>${text}</p>
  `;
  submittedFeedback.prepend(item); 

});

function setError(field, message) {
  let x = form.querySelector(`.error[data-error-for="${field}"]`);
  if (x) x.textContent = message;
}


form.addEventListener("click", (e) => e.stopPropagation());
