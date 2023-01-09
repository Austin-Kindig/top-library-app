// const { doc } = require("prettier");
const form = document.querySelector('form')

const book1 = form.addEventListener('submit', callbackFunction)
function callbackFunction (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formObject = Object.fromEntries(formData.entries())
    console.log(formObject)
    return formObject

}

// dummy books
const booko1 = {
    title: "title_1",
    author: "author_1",
    pages: "pages_1",
    isRead: "Yes"
}

const book2 = {
    title: "title_2",
    author: "author_2",
    pages: "pages_2",
    isRead: "No"
}

// book object storage
const myLibrary = [
    book1
]

for(let i = myLibrary.length; i > 0; i--) {

    document.querySelector('.books-container').appendChild(extractBooks(i - 1, myLibrary[i - 1]))

}


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
function extractBooks (index, book) {
    const cardDiv = createDiv('book-card', index + 1, '')
    cardDiv.appendChild(createDiv('title', null, `Title: ${book.title}`))
    cardDiv.appendChild(createDiv('author', null, `Author: ${book.author}`))
    cardDiv.appendChild(createDiv('pages', null, `Number of pages: ${book.pages}`))
    cardDiv.appendChild(createDiv('isRead', null, `Have I read it yet? ${book.isRead}`))
    return cardDiv
}

// creates 'div' DOM element
function createDiv (className, id, text) {
    const newElement = document.createElement('div')
    newElement.setAttribute('id', id)
    newElement.setAttribute('class', className)
    newElement.innerText = text
    return newElement
}

