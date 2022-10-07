function sameCase(a, b) {
    const isUpperCase = (x) => (x == x.toUpperCase())
    const isNotLetter = (x) => (x.toUpperCase() === x.toLowerCase())
    return (isNotLetter(a) || isNotLetter(b)) ? -1 : (isUpperCase(a) == isUpperCase(b)) && 1 || 0
}