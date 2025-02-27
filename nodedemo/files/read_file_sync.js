// Import fs module 
const fs = require("fs")

// construct filename 
const filename = __dirname + "/names.txt"

const data = fs.readFileSync(filename, "utf-8");
console.log(data)
console.log("The End!")
