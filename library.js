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
        var index = 0;
        myLibrary.forEach(book=>{
            tr+='<tr>';
            tr+='<td> '+book.title+' </td>'+'<td> '+book.author+' </td>'+
            '<td> '+book.pages+' pages </td>'+
            '<td>'+`<button id=readStatusOfBook${index} onclick="librarian.changeReadStatus(this.id)">`+book.readStatus+`</button>`+'</td>'+
            '<td>'+`<button id=${index} onclick="librarian.removeBookFromLibrary(this.id)">Remove Book</button>`+'</td>'
            tr+='</tr>'
            index += 1
        })
        table.innerHTML+=tr;
    }

    const setUpAddButtons = () => 
        {
        document.getElementById("add-book-btn").addEventListener("click", addbookClick);

        function addbookClick(event) {
            event.preventDefault();

            const title = document.getElementById("title").value
            const author = document.getElementById("author").value
            const pages = document.getElementById("pages").value
            const readStatus = document.getElementById("readStatus").value

            if (title == "" || author == "" || pages == "" || readStatus == "") {
                alert("Some of your book's information is missing. Please try again.");
            } else {
                librarian.addBooktoLibrary(title , author, pages, readStatus)
                librarian.showForm("hidden")
            }
        }

        document.getElementById("hide-form-btn").addEventListener("click", hidebookClick, false);

        function hidebookClick(event) {
            event.preventDefault();

            librarian.showForm("hidden")
        }
    }    

    const showForm = (visibility) =>
        document.getElementById("add-book-form").style.visibility = visibility

    const changeReadStatus = (bookIndex) =>
        {const elem = document.getElementById(bookIndex)

            {if (elem.innerText == "Read") {
                elem.innerText = "Not Read"
            } else if (elem.innerText == "Not Read") {
                elem.innerText = "Read"
            } else {
                elem.innerText = "Not Read"
            }
            } 
        }

    return { addBooktoLibrary, removeBookFromLibrary, updateBookshelf, setUpAddButtons, showForm, changeReadStatus }
})();

librarian.setUpAddButtons()

librarian.addBooktoLibrary("The Alchemist", "Paulo Coelho", "208", "Read")
librarian.addBooktoLibrary("The Little Prince", "Antoine de Saint-Exupéry", "96", "Read")
librarian.addBooktoLibrary("The Metamorphosis", "Franz Kafka", "70", "Read")
librarian.addBooktoLibrary("Oh, the Places You'll Go!", "Dr. Seuss", "56", "Read")

console.log(myLibrary)