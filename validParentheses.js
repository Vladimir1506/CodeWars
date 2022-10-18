function validParentheses(parens) {
    let flag = 0
    for (let i of parens) {
        i === '(' ? flag++ : i === ')' ? flag-- : null
        if (flag < 0) return false
    }
    return flag === 0
}