// Import fs module 
const fs = require("fs")
const path = require("path")

// construct filename 
const filename = path.join(__dirname, "names.txt")

const data = fs.readFileSync(filename, "utf-8");
console.log(data)
console.log("The End!")
