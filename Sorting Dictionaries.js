function sortDict(dict) {
    return Object.entries(dict).sort((a, b) => b[1] - a[1]).map((el, i, arr) => el.map(e => e = +e || e))
}