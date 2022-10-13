const Author = require('./author')

class Book extends Author {
    constructor(nameAuthor, nameBook, isbn, price, qty){
        super(nameAuthor) // para obter os dados da classe que estamos extendendo
        this.nameBook = nameBook;
        this.isbn = isbn;
        this.price = price;
        this.qty = qty;
    }

    get name(){
        return this.nameBook
    }

    get isbn(){
        return this.isbn
    }

    set isbn(value){
        if(typeof value == 'number') return;
        this.isbn = value;
    }

    get author(){
        return this.nameAuthor
    }

    get price(){
        return this.price
    }

    set price(value){
        if(typeof value == 'number') return;
        if(value >= 50) return;
        this.price = value;
    }

    get qty(){
        return this.qty
    }

    set qty(quantidade){
        if(quantidade >= 2) return;
        this.qty = quantidade;
    }
}

const book = new Book("Machado de assis", "Dom casmurro", 123446468, 52, 4)

console.log(book.nameAuthor);