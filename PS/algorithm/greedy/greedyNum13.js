//회문 실패
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
for (let i = 1; i <= caseNum; i++) {
  let originStr = input[i].split('')
  let length = originStr.length
  let revStr = [...originStr]
  revStr.reverse()
  console.log(originStr)
  console.log(revStr)
  for (let i = 0; i <= Math.floor((0 + length - 1) / 2); i++) {
    if (originStr[i] == revStr[i]) {
      continue
    } else {
      let reverseIndex = length - 1 - i
      if (originStr[reverseIndex] == originStr[i])
    }
    /*if (originStr[i] == originStr[length - 2]) {
      continue
    } else {
      break
    }
    */
  }
}