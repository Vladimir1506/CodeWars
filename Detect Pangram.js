function isPangram(string) {
    const a = 'a'.charCodeAt()
    const z = 'z'.charCodeAt()
    const arr = string.split('').map(char => char.toLowerCase())
    for (let i = a; i <= z; i++) {
        if (!arr.find(el => el === String.fromCharCode(i))) return false
    }
    return true
}