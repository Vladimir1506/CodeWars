function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.health <= 0) return fighter2.name
    if (fighter2.health <= 0) return fighter1.name
    switch (firstAttacker) {
        case fighter1.name:
            fighter2.health = fighter2.health - fighter1.damagePerAttack
            firstAttacker = fighter2.name
            return declareWinner(fighter1, fighter2, firstAttacker)
        case fighter2.name:
            fighter1.health = fighter1.health - fighter2.damagePerAttack
            firstAttacker = fighter1.name
            return declareWinner(fighter1, fighter2, firstAttacker)
    }
}
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))