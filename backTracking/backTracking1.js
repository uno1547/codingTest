//N-Queens문제 실패
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim()
console.log(Number(input))
let seq = []

function BT()