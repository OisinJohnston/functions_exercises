
const sub = (n1, n2) => n1-n2
const sum = (n1, n2) => n1+n2
const mul = (n1, n2) => n1*n2
const div = (n1, n2) => n1/n2

const palindrome = s => s == s.split('').reverse().join('')

const vowelCount = s => s.match(/[aeiou]/gmi).length

const upperCount = s => s.match(/[A-Z]/gm, '').length

const numCount = s => s.match(/[0-9]/gm, '').length

const ops = {"+":sum, "-": sub, "*": mul, "/": div}
const compute = (left, operator, right) => ops[operator](left, right)

const calcMean = arr => arr.reduce((ps, a) => ps+a)/arr.length





function calcFrequency(arr) {
	
	counts = {}
	Array.from(new Set(arr)).forEach((x) => {
		counts[x] = 0;
	})
	for (i=0; i<arr.length; i++) {
		counts[arr[i]]++
	}
	return counts
}

function calcMode(arr) {
	resp = []
	counts = calcFrequency(arr)
	getLargest = (dict) =>  Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b)
	largest = getLargest(counts)
	largest_val = counts[largest]
	resp.push(Number(largest))
	delete counts[largest]
	for (x =getLargest(counts);counts[x] == largest_val; x=getLargest(counts)) {
		resp.push(Number(x))
		delete counts[x]
	}
	return resp
}




