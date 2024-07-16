//9093번 단어뒤집기 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
for (let i = 1 ; i <= caseNum; i++) {
  let sentence = input[i].split(' ')
  let tmp = ""
  let stack = []
  sentence.forEach((el) => {
    for (let char of el) {
      stack.push(char)
    }
    let stackLength = stack.length //따로 길이값 기억해놔야함 stack.pop을 하면 매번 length가 달라지기 때문
    for (let j  = 0; j < stackLength; j++) {
      tmp += stack.pop()
    }
    tmp += ' '
  })
  console.log(tmp)
}