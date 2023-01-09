// const { doc } = require("prettier");

document.querySelector('.books-container').appendChild(displayBooks())


// dummy books
const book1 = {
    title: "title_1",
    author: "author_1",
    pages: "pages_1",
    isRead: true
}

const book2 = {
    title: "title_2",
    author: "author_2",
    pages: "pages_2",
    isRead: false
}

// book object storage
const myLibrary = [
   book1,
   book2
];

// object constructor function
function book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// adds book object to myLibrary array
function addBookToLibrary() {

}
// appends multiple DOM elements in one package
function displayBooks () {
    const cardDiv = createElement('div', 'book-card', '1', '')
    const titleDiv = createElement('div', 'title', null, 'Title:')
    const titleValue = createElement('span', null, null, 'Example Title')
    cardDiv.appendChild(titleDiv)
    titleDiv.appendChild(titleValue)
    const authorDiv = createElement('div', 'author', null, 'Author:')
    const authorValue = createElement('span', null, null, 'John Smith')
    authorDiv.appendChild(authorValue)
    cardDiv.appendChild(authorDiv)
    const pagesDiv = createElement('div', 'pages', null, 'Number of pages:')
    const pagesValue = createElement('span', null, null, '500')
    cardDiv.appendChild(pagesDiv)
    pagesDiv.appendChild(pagesValue)
    const isReadDiv = createElement('div', 'isRead', null, 'Have I read it yet?')
    const isReadValue = createElement('span', null, null, 'Yes')
    cardDiv.appendChild(isReadDiv)
    isReadDiv.appendChild(isReadValue)
    return cardDiv
}

// creates DOM element
function createElement (element, className, id, text) {
    const newElement = document.createElement(element)
    newElement.setAttribute('id', id)
    newElement.setAttribute('class', className)
    newElement.innerText = text
    return newElement
}

