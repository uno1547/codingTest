// 1541 번 잃어버린 괄호 실패
let fs = require('fs')
let exp = fs.readFileSync('input.txt').toString().trim().split('\n')[0]
// console.log(exp)
let input = exp.split('-')
console.log(input)
let result = 0
for(i = 0; i < input.length; i++) {
  let cur = input[i].split('+').map(Number).reduce(function(a, b) {
    console.log(a + b)
    return a + b
  })
  if (i == 0) {result += cur}
  else {result -= cur}
}
console.log(result)