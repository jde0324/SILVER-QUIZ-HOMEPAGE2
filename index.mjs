
const workbookRadios = document.getElementById("workbook-radios");
const getImageBtn = document.getElementById("get-image-btn");
const ModalClose = document.getElementById("modal-close");
const modalInner = document.getElementById("modal-inner");
const closeBtn = document.getElementById("close-btn");
const formBox = document.querySelector(".form-box");
const score = document.getElementById("score");
const prize = document.getElementById("prize");


getImageBtn.addEventListener("click", function() {
  formBox.classList.add('on');
  clickresult ();
  
  setTimeout(function () {
  prize.style.display="flex";
  score.style.display="none";
  }, 1500);

  });

closeBtn.addEventListener("click", function (){
    console.log ();
     formBox.style.display = "none";
});

closeBtn.addEventListener("click", function() {
   formBox.style.display = "block";
 });

submitBtn.addEventListener("click", function() {
  formBox.style.dispaly + "none";
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
    / 5문제)`};