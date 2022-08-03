const bookCenter = document.querySelector('.book-center');
const btn = document.querySelector('.btn');
const addBooks = document.querySelector('.add-books');

let myLibrary = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: false }
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

addBookToLibrary = () => {
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name="pages"]').value;
  const radios = document.querySelectorAll('input[name="read"]');
  const read = +[...radios].find((radio) => radio.checked)?.value;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
};

const displayBookItems = (bookItems) => {
  const displayBooks = bookItems
    .map((book, i) => {
      let info = `<p class="book" data-id="${i}">${book.title} de ${
        book.author
      }, ${book.pages} pages, ${
        book.read ? 'lu' : 'pas encore lu'
      } <button type="button" class="read-btn">${
        book.read ? 'pas lu' : 'lu'
      }</button><button type="button" class="remove-btn">supprimer</button></p>`;

      return info;
    })
    .join('');

  bookCenter.innerHTML = displayBooks;

  const books = document.querySelectorAll('.book');

  books.forEach((book) => {
    const removeBtn = book.querySelector('.remove-btn');
    const readBtn = book.querySelector('.read-btn');

    readBtn.addEventListener('click', () => {
      const id = book.dataset.id;
      myLibrary = myLibrary.map((book, i) => {
        if (i === +id) {
          book.read = !book.read;
        }

        return book;
      });

      displayBookItems(myLibrary);
    });

    removeBtn.addEventListener('click', () => {
      const id = book.dataset.id;

      myLibrary = myLibrary.filter((_, i) => i !== +id);

      displayBookItems(myLibrary);
    });
  });
};

const displayForm = () => {
  addBooks.innerHTML = `
    <form>
      <div>
        <label for='title'>titre</label>
        <input type='text' id='title' name='title' />
      </div>
      <div>
        <label for='author'>auteur</label>
        <input type='text' id='author' name='author' />
      </div>
      <div>
        <label for='pages'>nombre de pages</label>
        <input type='text' id='pages' name='pages' />
      </div>
      <div>
      <p>avez-vous lu le livre ?</p>
      <div>
        <input type='radio' id='read' name='read' value="1"/>
        <label for='read'>oui</label>
      </div>
      <div>
        <input type='radio' id='notRead' name='read' value="0"/>
        <label for='notRead'>non</label>
      </div>
      <button>ajouter une livre</button>
    </form>`;
};

btn.addEventListener('click', () => {
  btn.style.display = 'none';
  displayForm();
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    addBookToLibrary();
    displayBookItems(myLibrary);
    btn.style.display = 'inline-block';
    form.remove();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  displayBookItems(myLibrary);
});
