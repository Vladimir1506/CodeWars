function score(arr) {
    let dice = arr
    if (Array === typeof (arr[0])) dice = arr[arr.length - 1]
    console.log(dice)
    let score = 0
    const sides = [1, 2, 3, 4, 5, 6]
    sides.forEach(side => {
        const counts = dice.filter(d => d === side)
        if (counts.length === 1) score += side === 1 ? 100 : side === 5 ? 50 : 0
        if (counts.length === 2) score += side === 1 ? 200 : side === 5 ? 100 : 0
        if (counts.length === 3) score += side === 1 ? 1000 : side * 100
        if (counts.length === 4) score += side === 1 ? 1100 : side === 5 ? 550 : 0
        if (counts.length === 5) score += side === 1 ? 1200 : side === 5 ? 600 : side * 100
    })
    return score
}