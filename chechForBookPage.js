const book = {
    title : "Sophie's World",
    author : "Jostein Gaarder",
    pages : 500
}

// without destructuring
// const getBookDetails = (bookObj) => bookObj.pages>100;



// with destructuring

const getBookDetails = ({title,author,pages}) => pages>100;

console.log(getBookDetails(book));

