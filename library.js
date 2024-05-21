const myLibrary = []

function createBook (title, author, pages, readStatus) {
    const info = title + " by " + author + ", " + pages + " pages, " + readStatus;

    return { title, author, pages, readStatus, info }
}

const librarian = (function () {
    const addBooktoLibrary = (book) =>
        myLibrary.push(book)
    
    const removeBookFromLibrary = (book) =>
        // myLibrary.findIndex(book)
        myLibrary.splice(myLibrary.findIndex(book), 1)

    // const updateLibrary = () =>
        // var table = "test"
        

    return { addBooktoLibrary, removeBookFromLibrary }
})();

const book = createBook (title, author, pages, readStatus)
