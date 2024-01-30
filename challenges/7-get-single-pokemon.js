const axios = require('axios');
const { error } = require('console');
const inquirer = require('inquirer');

return inquirer.prompt([{

     name:'number',
     message:'Choose a number?',
     type:'input'

}])
.then((output)=>{
 axios.get(`https://pokeapi.co/api/v2/pokemon/${output.number}`)
 .then(function (response) {
    console.log(response.data.name)   
  });
})
.catch((error)=>{
console.log('that pokemon does not exist')
})
