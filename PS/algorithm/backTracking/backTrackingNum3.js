//문제15651번 N과M(4) 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let number = input[0] // 선택범위
let length = input[1] // 수열의길이
//중복을 허용하며, 비내림차순의 모든 수열을 출력 
let strs = []
function BT(n, str, cur) {
  if (n === length) { //조건을만족하는 수열이 만들어지면 삽입후 종료
    strs.push(str)
    return
  }
  for (let i = 1 ; i <= number; i++) { 
    // console.log(i)
    if (cur <= i) {
      BT(n + 1, str + i, i)
    }
  }
}

BT(0, "", 0)
let result = ""
for (str of strs) {
  let tmp = ""
  for (char of str) {
    tmp += `${char} `
  }
  tmp.trim()
  result += `${tmp}\n`
}
result.trim()
console.log(result)