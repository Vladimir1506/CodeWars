function strCount(str, letter) {
    return str.split('').filter(w => w === letter).length
}