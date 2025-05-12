import { booksData } from "./data.js";

const workbookRadios = document.getElementById("workbook-radios");
const getImageBtn = document.getElementById("get-image-btn");
const workbookModal = document.getElementById("workbook-modal");
const workbookModalInner = document.getElementById("workbook-modal-inner");
const workbookModalCloseBtn = document.getElementById("workbook-modal-close-btn");

workbookModalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
  workbookModal.style.display = "none";
}

getImageBtn.addEventListener("click", function() {
  getImageBtn.style.background = "rgb(218, 52, 2)";
});

