function getTotal(nums) {
    let total = 0;
    for (let n of nums) {
        if (n > 0)
            total += n;
    }
    return total;
}

console.log(getTotal([1, 4, -5, 6, -10]))