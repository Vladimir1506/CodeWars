function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] < 0) return false
    }
    return true
}