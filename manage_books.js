const MY_BOOKS = document.querySelector('#books');

function Book(title, author, genre="fantasy", read=true){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

let booksList = [
    new Book("The Fellowship of the Ring", "J.R.R Tolkin"),
    new Book("The Two Towers", "J.R.R Tolkin"),
    new Book("The Return of the King", "J.R.R Tolkin")
]


function addBookToTable(book, rowNumber=-1, table=MY_BOOKS){
    let newRow = table.insertRow(rowNumber);
    newRow.insertCell().innerText = book.title;
    newRow.insertCell().innerText = book.author;
    newRow.insertCell().innerText = book.genre;
    newRow.insertCell().innerText = book.read;
    newRow.appendChild(createRemoveCell());
}

function createRemoveCell(){
    let removeCell = document.createElement("th");
    removeCell.innerText = 'X';
    removeCell.classList = 'remove';
    removeCell.addEventListener('click', e => removeBook(e))
    return removeCell;
}

function removeBook(e){
    let row = e.target.parentNode;
    booksList.splice(row.rowIndex-1, 1);
    row.remove();
}

function addAllToTable(){
    booksList.forEach((book, index) => addBookToTable(book, index+2));
}

addAllToTable();

const ADD = document.querySelector('#books .add');
ADD.addEventListener('click', getNewBook);

const inputs = document.querySelectorAll('input');
function getNewBook(){
    newBook = new Book(inputs[0].value,
            inputs[1].value,
            inputs[2].value,
            inputs[3].checked);
    booksList.push(newBook);
    addBookToTable(newBook, booksList.length + 1);
    clearInputs()
}

function clearInputs(){
    inputs.forEach(input => {
        if (input.type == "text") {input.value = input.defaultValue}
        if (input.type == "checkbox") {input.checked = input.defaultChecked}
    });
}