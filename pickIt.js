function pickIt(arr) {
    var odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i]
        if (el % 2 === 0) { even.push(el) } else { odd.push(el) }
    }
    return [odd, even];
}