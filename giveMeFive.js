function giveMeFive(obj) {
    let arr = []
    arr = arr.concat(Object.keys(obj).filter(key => key.length === 5))
    arr = arr.concat(Object.values(obj).filter(value => value.length === 5))
    return arr
}