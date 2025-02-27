const fs = require("fs").promises

// readFile returns a promise object 
let p = fs.readFile(__dirname + "/names.tx", "utf-8")

// Handle fulfilled and rejected states 
p.then (data => console.log(data))                  // fulfilled 
 .catch(error => console.log('Error :' + error))    // reject

console.log("The End!")




