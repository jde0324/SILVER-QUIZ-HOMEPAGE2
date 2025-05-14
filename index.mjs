import { booksData } from "./data.js";

const workbookRadios = document.getElementById("workbook-radios");
const getImageBtn = document.getElementById("get-image-btn");
const ModalClose = document.getElementById("modal-close");
const modalInner = document.getElementById("modal-inner");
const closeBtn = document.getElementById("close-btn");
const formBox = document.querySelector(".form-box");

closeBtn.addEventListener("click", function (){
    console.log ();
     formBox.style.display = "none";
});


// Btn.addEventListner("click", function() {
//    ModalClose.classList.add('on');
//  });

getImageBtn.addEventListener("click", function() {
  formBox.style.display = "block";
});

submitBtn.addEventListener("click", function() {
  submitBtn.style.background = "rgb(218, 52, 2)";
});

function clickresult() {
  let score = 0;
  const toTalscore = 10;

  const answers = {
    book: "biography-story",
    card: "remember-card",
    quiz: "proverb-quiz",
    coloring: "tradition-coloring",
    puzzle: "wedding-puzzle"
  };

  let totalCount = 0;
  
  for (let question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
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