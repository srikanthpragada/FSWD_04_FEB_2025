const cp = require("child_process")

let result = cp.execSync("dir")
console.log(result.toString())