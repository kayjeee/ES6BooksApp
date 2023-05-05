// app.js module
import { Books } from '../modules/books';
import { storeForm } from './storeForm';
import { displayBooks } from '../modules/display';

const books = JSON.parse(localStorage.getItem('form')) || [];

const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

for (let i = 0; i < books.length; i += 1) {
  const book = displayBooks(books[i], i);
  container.innerHTML += book;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const library = new Books(newAuthor.value, newTitle.value, books);
    library.addBook();
    storeForm(books);
    window.location.reload();
  }
  document.getElementById('addNewForm').reset();
});

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const libraryOne = new Books(newAuthor.value, newTitle.value, books, button);
    libraryOne.deleteBook();
    storeForm(books);
  });
});