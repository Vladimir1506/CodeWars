function alphabetPosition(text) {
    text = text.toLowerCase().replace(/[^a-z]/g, '')
    let arr = []
    for (let i of text) {
        arr.push(i.charCodeAt() - 96)
    }
    return arr.join(' ');
}