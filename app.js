const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


// const note = getNotes();
// console.log(note);
// console.log(chalk.green.bold('Success'))

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note')
// } else if (command === 'remove') {
//     console.log('Remove note')
// }
// console.log(process.argv);

//Customize yargs version

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //to make title compulsory
            type: 'string' //to make sure it returns a string
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNote()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//add, remove, read, list

console.log(yargs.argv);