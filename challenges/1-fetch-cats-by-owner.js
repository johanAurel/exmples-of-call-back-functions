const { owners } = require("../utils/database");
const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
    console.log(owner)
    return new Promise((resolve, reject)=>{
    request(`/owners/${owner}/cats`,(err, cats)=>{
        console.log(owners)
        if(err){
        reject(`404 - ${owner} not found`)
        }
        if(cats){ 
            console.log(cats)
           resolve(cats)
        }

    })
})
};

module.exports = fetchCatsByOwner;
