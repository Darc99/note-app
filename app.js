const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');
const { describe } = require('yargs');


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
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function (){
        console.log('Reading note')
    }
})

//add, remove, read, list

console.log(yargs.argv);








