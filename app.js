// const add=require('./utils.js')

// const sum=add(4,-2)

// const fs=require('fs');


// fs.writeFileSync('notes.txt','Hi this is first line')

// //appenfilesync is used to append to the file

// console.log(sum)
const validator=require('validator')
const getNotes=require('./notes')

const res=getNotes()
const chalk = require('chalk');


console.log(res)
console.log(validator.isURL('dghhhhhhhgmailom'))
console.log(chalk.green('Success'));
