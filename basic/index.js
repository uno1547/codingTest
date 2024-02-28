let fs = require('fs')
let input = Number(fs.readFileSync('input.txt').toString())
console.log(input)
let ans = ""
for (let i = 0; i < input; i++) {
  for (let j = 1; j < input - i; j++) {
    ans += " "
  }
  for (let k = 0; k < 2*i + 1; k++) {
    ans += "*"
  }
  ans += '\n'
}
for (let i = input - 1; i > 0; i--) {
  for (let j = 0; j < input - i; j++) {
    ans += " "
  }
  for (let k = 0; k < 2*i - 1; k++) {
    ans += "*"
  }
  ans += '\n'
}
console.log(ans)
// for (let)