// Coding Project 1


const form = document.getElementById("feedback-form");
const submittedFeedback = document.getElementById("listFeedback");
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