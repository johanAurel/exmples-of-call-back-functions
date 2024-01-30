const request = require("../utils/request");
const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {

    let catArray = [];

    return fetchAllOwners()
    .then(owners)

    // for (const owner of fetchAllOwners()) {
    //     for (const cat of fetchCatsByOwner(owner)) {
    //         if (!catArray.includes(cat)) {
    //             catArray.push(cat);
    //         }
    //     }
    // };
    // return catArray.sort((a,b)=>a-b)
}

module.exports = fetchAllCats;
