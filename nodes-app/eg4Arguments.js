const c = require('chalk')
const yargs = require('yargs')

const helperNotes = require('./notesHelper')

log = console.log

log(c `{blue ${process.argv[2]}}`)
log(process.argv[2])


log(process.argv)


log(' ------------------------------- ')


yargs.version('1.1.0')

//node eg4Arguments.js add --mTitle="hamo" --mBody="22222"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        mTitle: {
            describe: ' mi Title',
            demandOption: true,
            type: 'string'
        },
        mBody: {
            describe: ' mi Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log('suma dos numeros   ' + argv.mTitle + '  ' + argv.mBody)
        helperNotes.putNotes(argv.mTitle, argv.mBody);
    }
})




//node eg4Arguments.js remove --mTitle="MIIDE"

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    mTitle: {
        describe: ' id J',
        demandOption: true,
        type: 'string'
    },
    handler: (argv) => {
        log('remove new note   ' + argv.mTitle)
        helperNotes.removeNote(argv.mTitle);
    }
})


yargs.command({
    command: 'get',
    describe: 'get a new note',
    mTitle: {
        describe: ' id J',
        demandOption: true,
        type: 'string'
    },
    handler: (argv) => {
        log('remove new note   ' + argv.mTitle)
        notes = helperNotes.getNotes(argv.mTitle);
        log(notes.cuerpo)
    }
})


yargs.parse()


//log(yargs.argv)