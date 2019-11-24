function addItem(bookTitle, bookURL) {

    //Using class to instantiate object
    import { Books } from './class.js';

    var yourBooks = [];

    var newBook = new Books(bookTitle, bookURL);
    console.log(newBook);
    yourBooks.push(newBook);

    // Save books to local storage
    localStorage.setItem("yourBooks", JSON.stringify(yourBooks));

    // load books from localStorage
    if (localStorage.getItem("yourBooks")) {
        yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
        console.log(yourBooks);
    }
}
