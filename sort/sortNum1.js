//2752
let fs = require('fs')
//console.log(input)
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
input.sort(function(a, b) {
  return a - b
})
console.log(input)