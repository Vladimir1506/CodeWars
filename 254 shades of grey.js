function shadesOfGrey(n) {
    const resultArr = []
    if (n <= 0) return resultArr
    if (n > 254) return shadesOfGrey(254)
    for (let i = 1; i <= n; i++) {
        resultArr.push('#' + i.toString(16).padStart(2, 0).repeat(3))
    }
    return resultArr
}