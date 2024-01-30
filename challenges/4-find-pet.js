const { log } = require("console");
const fs = require("fs/promises");

const findPet = (catName) => {
   return fs.readFile(`./data/${catName}.json`, 'utf8')
    .then(data =>{
        console.log(data)
        return JSON.parse(data)
    })
    .catch(err =>{
        return `soz couldnt find ${catName} :(`
    })
};

module.exports = findPet;
