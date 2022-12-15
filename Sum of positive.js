function positiveSum(arr) {
    return arr.reduce((sum, el) => el > 0 ? sum + el : sum, 0)
}