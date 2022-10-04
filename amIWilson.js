function amIWilson(p) {
    return ((factorial(p - 1) + 1) / (p * p)) % 1 === 0
}
function factorial(num) {
    if (num === 1) return num
    else {
        return num * factorial(num - 1)
    }
}
