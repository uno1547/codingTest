//9012번 괄호 성공 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
for (let i = 1; i <= caseNum; i++) {
  let string = input[i]
  console.log(string)
  let stack = []
  let isVPS = true
  for (let char of string) {
    if (char == "(") {
      stack.push(char)
      // console.log(stack)
    } else {
      let top = stack[stack.length - 1]
      top ? stack.pop() : isVPS = false
      continue
    }
  }
  if (isVPS && (stack.length == 0)) {
    console.log('YES')
    continue
  } else {
    console.log('NO')
    continue
  }
}
