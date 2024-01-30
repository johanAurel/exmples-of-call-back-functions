const request = require("../utils/request");

const fetchAllOwners = () => {
  return request("/owners") 
    .then((owner) => {
      console.log(owner)
     
      const lowerCaseOwners = owner.map((x) => x.toLowerCase());
      console.log(lowerCaseOwners)
      return lowerCaseOwners;
    })
    .catch((error) => {
      return error;
    });
}


// const people=['a','b','c','d'];
// const bigPPl=people.map((x)=>x.toUpperCase())
// console.log(bigPPl);

module.exports = fetchAllOwners;
