function giveMeFive(obj) {
    let arr = []
    for (let key in obj) {
        if (key.length === 5) arr.push(key)
        const value = obj[key]
        if (value.length === 5) arr.push(value)
    }
    return arr
}