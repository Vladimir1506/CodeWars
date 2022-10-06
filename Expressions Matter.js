function expressionMatter(a, b, c) {
  const result1 = (a + b) * c
  const result2 = a * (b + c)
  const result3 = a + b + c
  const result4 = a * b * c
  return Math.max(result1, result2, result3, result4)
}