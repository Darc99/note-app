const fs = require('fs')

const chalk = require('chalk');

//to add new note
const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes =
    //     notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }

}

//to remove note
const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)

    if (notes.length > keepNotes.length) {
        console.log(chalk.green.inverse('Notes removed'))
        saveNotes(keepNotes)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

//list note
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find((note) => note.title === title)

    if (selectedNote) {
        console.log(chalk.inverse(selectedNote.title))
        console.log(selectedNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }

}

//to save note
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}