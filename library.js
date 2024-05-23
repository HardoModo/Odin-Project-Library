const myLibrary = [] // Consider turning this into a private array inside library

function createBook (title, author, pages, readStatus) {
    const info = title + " by " + author + ", " + pages + " pages, " + readStatus;

    return { title, author, pages, readStatus, info }
}

const librarian = (function () {
    // const myLibrary = []

    const addBooktoLibrary = (title, author, pages, readStatus) =>
        {const book = createBook (title, author, pages, readStatus)
        myLibrary.push(book)
        librarian.updateBookshelf()
        if (! book) {
            
        }
    }
    
    const removeBookFromLibrary = (book) =>
        {const index = myLibrary.findIndex(book)
        myLibrary.splice(index, 1)
        librarian.updateBookshelf()
    }

    const updateBookshelf = () =>
        {
        const table = document.getElementById("bookshelf")
        table.innerHTML="";
        var tr="";
        myLibrary.forEach(book=>{
            tr+='<tr>';
            tr+='<td>'+book.title+'</td>'+'<td>'+book.author+'</td>'+'<td>'+book.pages+'</td>'+'<td>'+book.readStatus+'</td>'
            tr+='</tr>'
        })
        table.innerHTML+=tr;
    }
        

    return { addBooktoLibrary, removeBookFromLibrary, updateBookshelf }
})();

librarian.addBooktoLibrary("a", "b", "c", "d")
librarian.addBooktoLibrary("e", "f", "g", "h")

console.log(myLibrary)