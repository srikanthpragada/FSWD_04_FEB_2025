let input = "70,55,80,75"

let marks = input.split(",")
console.log(marks)

let total = 0 
for (let m of marks)
    total = total + parseInt(m)

console.log(total)
