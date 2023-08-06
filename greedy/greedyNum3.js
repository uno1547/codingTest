// 1541 번 잃어버린 괄호 실패
/*
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
*/

//두번째 시도 성공 제발 이상한거 문법실수 때문에 틀리지말기
let input = "110+10-20+30"
// let input = "00009-00009"
let tokens = input.split("-")
console.log('tokens', tokens)
let ans = 0
for (let i = 0; i < tokens.length; i++) {
  console.log(`${i+1} 번째 token`)
  let token = tokens[i].split('+').map(Number)
  console.log('token',token)
  let tokenSum = 0
  token.forEach((value) => {tokenSum += value})
  console.log(tokenSum)
  if (i == 0) {ans += tokenSum}
  else {ans -= tokenSum}
}
console.log(ans)
