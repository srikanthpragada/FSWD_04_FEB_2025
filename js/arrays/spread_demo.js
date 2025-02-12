let a = [10, 20, 30]

//let b = a

// Spread a using spread operator 
let b = [1, ... a, 40, 50]
a[0] = 100
console.log(b)
