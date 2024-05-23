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
    
    const removeBookFromLibrary = (index) =>
        {myLibrary.splice(index, 1)
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

    const setUpAddBookButton = () => 
        {
        const checkbox = document.getElementById("add-book-btn");

        checkbox.addEventListener("click", addbookClick, false);

        function addbookClick(event) {
            event.preventDefault();

            const title = document.getElementById("title").value
            const author = document.getElementById("author").value
            const pages = document.getElementById("pages").value
            const readStatus = document.getElementById("readStatus").value

            librarian.addBooktoLibrary(title , author, pages, readStatus)
        }
    }    

    return { addBooktoLibrary, removeBookFromLibrary, updateBookshelf, setUpAddBookButton }
})();

librarian.setUpAddBookButton()

librarian.addBooktoLibrary("a", "b", "c", "d")
librarian.addBooktoLibrary("e", "f", "g", "h")
librarian.addBooktoLibrary("i", "j", "k", "l")
librarian.addBooktoLibrary("m", "n", "o", "p")

console.log(myLibrary)