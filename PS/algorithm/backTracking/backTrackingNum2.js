//15650 N과M 2번 성공!!
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let number = input[0]
let selectNum = input[1]

let ans = []
let v = []
for (let i = 0; i <= number; i++) {
  v.push(0)
}
function BT(n, str, last) {
  if (n == selectNum) { //조건을 만족하게 4개골랐으면, 정답처리후 return
    ans.push(str)
    return
  }
  for (let i = 1; i <= number; i++) {
    if ((v[i] == 0) && (last < i)) {
      v[i] = 1
      BT(n + 1, str + `${i} `, i)
      v[i] = 0
    }
  }
}
BT(0, "", 0)
// console.log(ans)
let result = ""
for (str of ans) {
  result += `${str.trim()}\n`
}
console.log(result.trim())