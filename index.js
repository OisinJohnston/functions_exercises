
const sub = (n1, n2) => n1-n2
const sum = (n1, n2) => n1+n2
const mul = (n1, n2) => n1*n2
const div = (n1, n2) => n1/n2

const palindrome = s => s == s.split('').reverse().join('')

const vowelCount = s => s.toLowerCase().replace(/[^aeiou]/gm, '').length

const upperCount = s => s.replace(/[^A-Z]/gm, '').length

const numCount = s => s.replace(/[^0-9]/gm, '').length

const ops = {"+":sum, "-": sub, "*": mul, "/": div}
const compute = (left, operator, right) => ops[operator](left, right)


