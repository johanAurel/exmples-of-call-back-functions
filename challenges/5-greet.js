const inquirer = require('inquirer')
function name() {
    return inquirer
  .prompt({
    name: 'name',
    message: 'What is your name?',

    type: 'input'
  })
  .then(output =>{
    console.log(`Hello ${output.name}`);
})
}
name()