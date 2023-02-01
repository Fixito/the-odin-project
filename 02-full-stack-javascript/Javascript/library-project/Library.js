import { Book } from './Book.js';

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

export class Library {
  constructor(element) {
    this.myLibrary = [
      {
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: false
      }
    ];
    this.addBtn = element.querySelector('.btn');
    this.booksCenter = element.querySelector('.books-center');
    this.modal = element.querySelector('.modal-overlay');
    this.form = element.querySelector('.form');

    this.handleForm = this.handleForm.bind(this);
    this.openModal = this.openModal.bind(this);

    this.displayBookItems();
    this.addBtn.addEventListener('click', this.openModal);
  }

  openModal() {
    this.modal.classList.add('open-modal');
    this.form.addEventListener('submit', this.handleForm);

    this.modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('open-modal')) {
        this.modal.classList.remove('open-modal');
      }
    });
  }

  handleForm(e) {
    e.preventDefault();
    const title = getElement("[name='title']");
    const author = getElement("[name='author']");
    const pages = getElement("[name='pages']");
    const read = getElement("[name='read']");

    if (title.value && author.value && pages.value) {
      const book = new Book(
        title.value,
        author.value,
        pages.value,
        read.checked
      );

      this.addBookToLibrary(book);
    }

    this.modal.classList.remove('open-modal');
    this.displayBookItems();
    title.value = '';
    author.value = '';
    pages.value = '';
  }

  addBookToLibrary = (book) => {
    this.myLibrary.push(book);
  };

  displayBookItems = () => {
    const library = this.myLibrary
      .map((book) => {
        const { id, title, author, pages, read } = book;

        return `<div class="card" data-id="${id}">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle text-small">${author}</h6>
                    <p class="card-text text-small">${pages} pages</p>
                    <div class="btn-container">
                      <button type="button" class="btn read-btn ${
                        read ? '' : 'btn-inverted'
                      }">${read ? 'lu' : 'pas lu'}</button>
                      <button type="button" class="btn delete-btn"><i class="fas fa-trash-can"></i></button>
                    </div>
                  </div>
                </div>`;
      })
      .join('');

    this.booksCenter.innerHTML = library;

    const books = document.querySelectorAll('.card');

    books.forEach((book) => {
      const deleteBtn = book.querySelector('.delete-btn');
      const readBtn = book.querySelector('.read-btn');

      readBtn.addEventListener('click', () => {
        const id = book.dataset.id;
        this.editReadBookState(id);
        this.displayBookItems();
      });

      deleteBtn.addEventListener('click', () => {
        const id = book.dataset.id;
        this.deleteBook(id);
        this.displayBookItems();
      });
    });
  };

  deleteBook(id) {
    this.myLibrary = this.myLibrary.filter((book) => book.id !== Number(id));
  }

  editReadBookState(id) {
    this.myLibrary = this.myLibrary.map((book) => {
      if (book.id === Number(id)) {
        return { ...book, read: !book.read };
      } else {
        return book;
      }
    });
  }
}
