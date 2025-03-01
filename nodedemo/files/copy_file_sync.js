// Import fs module 
const fs = require("fs")

// construct filename 
const srcfilename =  __dirname + "/names.txt"
const trgfilename = __dirname + "/names2.txt"

const data = fs.readFileSync(srcfilename, "utf-8");
fs.writeFileSync(trgfilename, data)
console.log("The End!")
