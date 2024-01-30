const { owners } = require("../utils/database");
const request = require("../utils/request");

const fetchCatsByOwner = (owner) => {
  //console.log(owner)
  return request(`/owners/${owner}/cats`)
    .then((cats) => {
      return cats;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = fetchCatsByOwner;
