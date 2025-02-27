const fs = require("fs").promises

let rp = fs.readFile(__dirname + "/names.txt", "utf-8")

rp.then(data => {
    console.log("Read file!")
    let wp = fs.writeFile(__dirname + "/names2.txt", data)
    wp.then(() => console.log("Copied!!!"))
    wp.catch( (err) => console.log("Error while writing!"))
}
,(error) => console.log("Error while reading!")
)





