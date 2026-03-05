// 10828 스택
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let runNum = Number(input[0])
let stack = []
let ans = ""
for(let i = 1; i <= runNum; i++) {
  let [cmd, num] = input[i].split(' ')
  switch (cmd) {
    case "push":
      stack.push(num)
      break
    case "pop":
      ans += `${stack.length != 0 ? stack.pop() : -1}\n`
      // console.log(stack.length != 0 ? stack.pop() : -1)
      break
    case "top":
      ans += `${stack.length != 0 ? stack[stack.length - 1] : -1}\n`
      // console.log(stack.length != 0 ? stack[stack.length - 1] : -1)
      break
    case "size":
      ans += `${stack.length}\n`
      // console.log(stack.length)
      break    
    case "empty":
      ans += `${stack.length == 0 ? 1 : 0}\n`
      // console.log(stack.length == 0 ? 1 : 0)
      break
  }
}
console.log(ans.trim())
//console.log 를 남발하지말자
