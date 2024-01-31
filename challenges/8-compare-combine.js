const { error } = require("console");
const fs = require("fs/promises");

function findLongest() {
  Promise.all([
    fs.readFile("./super-secret-message.txt", "utf8"),
    fs.readFile("./secret-message.txt", "utf8"),
  ])
    .then(([data1, data2]) => {
      
      if (data1.length > data2.length) {
      console.log(`the file ${('./super-secret-message.txt')} is ${data1.length - data2.length} 
      longer than ${('./secret-message.txt')}`)
       
    }
      
      else{
      console.log(`the file ${('./secret-message.txt')} is ${data2.length - data1.length}
       longer than ${('./super-secret-message.txt')}`)
      
    }
    fs.writeFile(`./mega-secret-message.txt`, data1 + data2, 'utf-8')

    })
    .catch((error) => {
      console.log(error);
    });
}


findLongest();
