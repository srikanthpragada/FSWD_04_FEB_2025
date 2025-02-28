const fs = require("fs").promises

async function read_write() {
    try {
        var data = await fs.readFile("./files/names.txt", "utf-8")
        await fs.writeFile("./files/names2.txt", data)
        console.log("Copied Successfully!")
    }
    catch (error) {
        console.log("Error -->" + error)
    }
}

read_write()
console.log(new Date())




