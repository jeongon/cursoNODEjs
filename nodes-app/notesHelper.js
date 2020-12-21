const fs = require('fs')

const FILENAME = './notas.json'




log = console.log


const putN = function putNote(title, body) {
    log('putN ' + title + ' ' + body)



    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.titulo === title
    })


    if (duplicateNotes.length === 0) {
        notes.push({
            titulo: title,
            cuerpo: body
        })
        saveNotes(notes)
        log('new note add');
    } else {
        log(' note title taken!!!')
    }






}


const getN = function getNote(title) {
    log('getN ' + title)
    const notes = loadNotes()

    const notesFilter = notes.filter((notes) => {
        return notes.titulo === title
    })

    if (notesFilter.length >= 1) {
        return notesFilter[0];
    } else {
        return {}
    }

}




const removeN = function removeNote(title) {
    log('removeN ' + title)
    const notes = loadNotes()

    const notesFilter = notes.filter((notes) => {
        return notes.titulo !== title
    })

    if (notes.length > notesFilter.length) {
        saveNotes(notesFilter)
        log('save other notes');
    } else {
        log(' no se encontro ninguna!!!')
    }

}



const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    log(dataJSON)
    fs.writeFileSync(FILENAME, dataJSON);
}


const loadNotes = function() {

    try {
        const buff = fs.readFileSync(FILENAME)

        return JSON.parse(buff.toString());
    } catch (error) {
        log('problem' + error)
        return [];
    }


}

module.exports = {
    getNotes: getN,
    putNotes: putN,
    removeNote: removeN

}