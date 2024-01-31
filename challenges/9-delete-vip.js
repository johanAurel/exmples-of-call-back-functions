const fs = require("fs/promises");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "VIP",
      message: "what VIP do you want to remove",
      type: "input",
    },
  ])
  .then((person) => {
    
    return fs.readFile("./vip-list.txt", "utf8").then((guy) => {
     
        const guys = guy.split("\n");
      
        for (let i = 0; i < guys.length; i++) {
        
            const man = guys[i];
        
            if (man.includes(person.VIP)) {
          
                guys.splice(i, 1);
          
                const back = guys.join("\n");
         
                fs.writeFile("./vip-list.txt", back, "utf8");
                
                console.log(`${man} was deleted from ${("./vip-list.txt")}`)
        }
      }
    });
  });
