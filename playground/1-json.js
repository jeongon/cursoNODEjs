const fs = require('fs')



// en memoria 
log = console.log;


const book = {
    title: 'ego is the enemy',
    author: 'ryan Holiday'
}

book.title = 'JAMON GRANDE'

const bookJSON = JSON.stringify(book);
log(bookJSON)


const parsedData = JSON.parse(bookJSON);
log(parsedData.title)


//en fichero
fs.writeFileSync('1-json.json', bookJSON);

// error: book no es string
// fs.writeFileSync('2-json.json', book);

const strBuffer = fs.readFileSync('1-json.json');
log(strBuffer)
log(strBuffer.toString())
const parsedSTR = JSON.parse(strBuffer.toString());

parsedSTR.title = 'JAMON CHICO'

log(parsedSTR)
log(parsedSTR.title)