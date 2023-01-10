// add a book delete button
// add a book is read button

document.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = new FormData(document.querySelector('form'))
    input = Object.fromEntries(input)
    input.isRead === 'on' ? input.isRead = 'yes' : input.isRead = 'no'
    document.querySelector('form').reset()
    myLibrary.push(input)
    for(let i = myLibrary.length; i > 0; i--) {

        document.querySelector('.books-container').appendChild(extractBooks(i - 1, myLibrary[i - 1]))
    
    }

})

// initialize book object storage
const myLibrary = []


// object constructor function
function book(input) {
    this.title
    this.author
    this.pages
    this.isRead
}

// adds book object to myLibrary array
function addBookToLibrary() {

}
// converts book objects into DOM lists
function extractBooks (index, book) {
    const cardDiv = createDiv('book-card', index + 1, '')
    cardDiv.appendChild(createDiv('title', null, `Title: ${book.title}`))
    cardDiv.appendChild(createDiv('author', null, `Author: ${book.author}`))
    cardDiv.appendChild(createDiv('pages', null, `Number of pages: ${book.pages}`))
    cardDiv.appendChild(createDiv('isRead', null, `Have I read it yet? ${book.isRead}`))
    cardDiv.appendChild(createButton('change-isRead-button', null, 'Finished Book'))
    cardDiv.appendChild(createButton('remove-book-button', `remove-button-${index + 1}`, 'Remove Book'))
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

function createButton (className, id, text) {
    const newElement = document.createElement('button')
    newElement.setAttribute('id', id)
    newElement.setAttribute('class', className)
    newElement.innerText = text
    return newElement
}