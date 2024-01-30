const request = require("../utils/request");
const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = () => {
  return fetchAllOwners().then((owners) => {
    const newArr = owners.map((owner) => fetchCatsByOwner(owner));
    return Promise.all(newArr).then((cat) => {
      const catArray = cat.flat(Infinity);
      return catArray.sort();
    });
  });
};

module.exports = fetchAllCats;
