//피보나치 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number)
let num = Number(input[0])
for (let i = 1; i <= num; i++) { //주어진 정수 
  let int = input[i]
  let phibo = [0, 1] // [0, 1, 1] [0, 1, 1, 2]
  for (let j = 0; phibo[j] + phibo[j + 1] <= int; j++) {
    phibo[j + 2] = phibo[j] + phibo[j + 1] 
  }
  console.log(phibo)
  let result = []
  for (let k = phibo.length - 1; k >= 0; k--) {
    if (int - phibo[k] >= 0) {
      int -= phibo[k]
      result.push(phibo[k])
    }
    if (int == 0) {
      break
    }
  }
  result.sort((a, b) => a - b)
  let str = ""
  for (n of result) {
    str += `${n} `
  }
  console.log(str)
}
