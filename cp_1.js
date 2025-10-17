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

