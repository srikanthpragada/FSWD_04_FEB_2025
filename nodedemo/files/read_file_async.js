const fs = require("fs")

// construct filename 
const filename = __dirname + "/names.txt"

fs.readFile(filename, "utf-8", 
               (err, data) => {
                if(err)
                   console.log("Error --> " + err.message)
                else
                   console.log(data)
               })

console.log(new Date())
