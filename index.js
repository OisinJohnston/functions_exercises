
const sub = (n1, n2) => n1-n2
const sum = (n1, n2) => n1+n2
const mul = (n1, n2) => n1*n2
const div = (n1, n2) => n1/n2

const palindrome = s => s == s.split('').reverse().join('')

const vowelCount = s => s.toLowerCase().replace(/[^aeiou]/gm, '').length


const compute = (left, operator, right) => {	"+": sum, "-": sub, "*": mul, "/": div}[operator](left, right)
	


