import { booksData } from "./data.js";

const workbookRadios = document.getElementById("workbook-radios");
const getImageBtn = document.getElementById("get-image-btn");
const workbookModal = document.getElementById("workbook-modal");
const workbookModalInner = document.getElementById("workbook-modal-inner");
const workbookModalCloseBtn = document.getElementById("workbook-modal-close-btn");
const prize = document.getElementById("prize");

workbookModalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
  workbookModal.style.display = "none";
}

// Btn.addEventListner("click", function() {
//   workbookModal.classList.add('on');
// });

getImageBtn.addEventListener("click", function() {
  getImageBtn.style.background = "rgb(218, 52, 2)";
   workbookModal.classList.add('on');
});

Btn.addEventListener("click", function() {
  Btn.style.background = "rgb(105, 39, 180)";
});

function clickresult() {
  let score = 0;
  const toTalscore = 20;

  const answers = {
    book: "biography-story",
    // card: "remember-card",
    // quiz: "proverb-quiz",
    // coloring: "animal-coloring",
    puzzle: "wedding-puzzle"
  };

  let totalCount = 0;

  for (let question in answers) {
    const selected = document.querySelector(input[?="${question}"]:checked);
    if (selected && selected.value === answers[question]) {
      totalCount++;
    }
  }

  score = totalCount * toTalscore;

  document.getElementById("score").innerText =
    `점수: ${score}점 
    (정답 ${totalCount}개 
    / 5문제)`;
}