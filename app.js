const inputAuthor = document.getElementById('inputAuthor');
const inputTitle = document.getElementById('inputTitle');
const inputPages = document.getElementById('inputPages');
const submitBtn = document.getElementById('submitBtn');

let bookAuthor = inputAuthor.value;
let bookTitle = inputTitle.value;
let bookPages = inputPages.value;

let mylibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {
  let bookAuthor = inputAuthor.value;
  let bookTitle = inputTitle.value;
  let bookPages = inputPages.value;
  console.log(bookAuthor, bookTitle, bookPages);
  const newBook = new Book();
}
submitBtn.addEventListener('click', (e) => {
  console.log(bookAuthor, bookTitle, bookPages);
});
