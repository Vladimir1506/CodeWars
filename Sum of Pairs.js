function sumPairs(ints, s) {
    let result
    let minIndex = ints.length
    const recursion = (ar, minIndex) => {
        let array = [...ar]
        if (array.length < 2) return
        let first = array.shift()
        let potSecond = s - first
        let second = array.find(el => el === potSecond)
        if ('number' === typeof second) {
            let firstIndex = ints.indexOf(first)
            let secondIndex = ints.indexOf(second, firstIndex + 1)
            if (secondIndex < minIndex) {
                minIndex = secondIndex
                result = [first, second]
                array = array.slice(0, array.indexOf(secondIndex))
                return recursion(array, minIndex)
            }
        }
        else recursion([...ar.slice(1)].filter(el => el !== first), minIndex)
    }
    recursion(ints, minIndex)
    return result
}