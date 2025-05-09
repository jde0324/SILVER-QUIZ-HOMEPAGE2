import { booksData } from "./data.js";

const workbookRadios = document.getElementById("workbook-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const workbookModal = document.getElementById("workbook-modal");
const workbookModalInner = document.getElementById("workbook-modal-inner");
const workbookModalCloseBtn = document.getElementById("workbook-modal-close-btn");

workbookModalCloseBtn.addEventListener("click", closeModal);
function closeModal() {
  workbookModal.style.display = "none";
}

getImageBtn.addEventListener("click", renderBook);

workbookRadios.addEventListener("change", function (e) {
    const radios = document.getElementsByClassName("radio");
    for (let radio of radios) {
      radio.classList.remove("highlight");
    }
    const selectedElement = document.getElementById(e.target.id);
    const selectedParentEl = selectedElement.parentElement;
    selectedParentEl.classList.add("highlight");
  });

  function renderBook() {
    const bookObject = getSinglebookObject();
    workbookModalInner.innerHTML = `
    <img
    class="book-img"
    src="./images/${bookObject.image}"
    >
    `;
    memeModal.style.display = "flex";
  }
  
  function getSingleBookObject() {
    const booksArray = getMatchingBooksArray();
    if (booksArray.length === 1) {
      return booksArray[0];
    } else {
      const randomNumber = Math.floor(Math.random() * booksArray.length);
      return booksArray[randomNumber];
    }
  }

  function getMatchingBooksArray() {
    const isGif = gifsOnlyOption.checked;
    const selectedworkbook = document.querySelector(
      `input[type="radio"]:checked`
    ).value;
    const matchingBooksArray = booksData.filter(function (book) {
      if (isGif) {
        return book.workbook.Tags.includes(selectedworkbook) && book.isGif;
      } else {
        return book.workTags.includes(selectedworkbook);
      }
    });
    return matchingBooksArray;
  }

  function getWorkbooksArray(books) {
    const workbooksArray = [];
    for (let item of cats) {
      for (let workbook of item.workbookTags) {
        if (!workbooksArray.includes(book)) {
          workbooksArray.push(book);
        }
      }
    }
    return workbookArray;
  }

  function renderWorkbookRadios(books) {
    const workbooks = getWorkbooksArray(books);
    let radioItems = "";
    for (let workbook of workbooks) {
      radioItems += `
      <div class="radio">
          <label for="${workbook}">${workbook}</label>
          <input 
              type="radio"
              id="${workbook}"
              value="${workbook}"
              name="workbooks"
          >
      </div>
      `;
    }
    workbookRadios.innerHTML = radioItems;
  }
  
  renderWorkbookRadios(booksData);
  