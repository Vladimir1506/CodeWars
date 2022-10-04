function howMuchILoveYou(nbPetals) {
    const phrases = ["I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"]
    const length = phrases.length
    return nbPetals <= length ? phrases[nbPetals - 1] : phrases[nbPetals % length - 1]
}
