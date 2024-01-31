const fs = require('fs/promises');
const axios = require('axios');
const inquirer = require('inquirer');
const bookLibrary = async()=>{
try{

const author=inquirer.prompt([{
 name:'author',
 message:'choose an author',
 type:'input'
},{
name:'book',
    message:'choose a book',
    type:'input'

}])

const webPage=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${author.book}+inauthor:${author.author}`)
console.log(webPage)
}
catch(error){
    console.log(error)
}



}
bookLibrary()
