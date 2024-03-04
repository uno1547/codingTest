//1406 에디터
/*
L : 커서왼쪽으로한칸(끝무시)
D : 커서오른쪽으로한칸(끝무시)
B : 커서왼쪽에있는 문자삭제(끝무시)
P X : 커서왼쪽에 X추가
abcd
*/
//첫번째시도 중도포기
//두번째시도 성공 shit
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let [str, num, ...cmdLines] = input
// console.log(str, num, cmdLines)
let leftStack = [...str]
let rightStack = []
console.log(leftStack, rightStack)
for (let i = 0; i < num; i++) {
  let lines = cmdLines[i].split('\n')[0].split(' ')
  console.log("명령",lines);
  let cmd = lines[0]
  let arg = lines[1]
  switch (cmd) {
    case "L":
      if (leftStack.length == 0) {
        continue
      } else {
        rightStack.push(leftStack.pop())
      }
      break
    case "D":
      if (rightStack.length == 0) {
        continue
      } else {
        leftStack.push(rightStack.pop())
      }
      break
    case "B":
      if (leftStack.length == 0) {
        continue
      } else {
        leftStack.pop()
      }
      break
    case "P":
      leftStack.push(arg)
      break
  }
  console.log(leftStack, rightStack)
}
let ans = ""
for(let l = 0; l < leftStack.length; l++) {
  ans += leftStack[l]
}
console.log(ans)

for (let r = rightStack.length - 1; r >= 0; r--) {
  ans += rightStack[r]
}
console.log(ans)
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let [str, num, ...cmdLines] = input
console.log(str)
const strLinkedList = {
  cursor : str.length
}
for (let i = 0; i < str.length; i++) {
  strLinkedList[i+1] = str[i]
}
console.log("시작", strLinkedList)
for (let i = 0; i < num; i++) {
  let lines = cmdLines[i].split('\n')[0].split(' ')
  let cmd = lines[0]
  let arg = lines[1]
  console.log(cmd, arg)
  switch(cmd) {
    case "L":
      // 커서--, 단 커서위치가 0이면 무시
      if (strLinkedList.cursor != 0) strLinkedList.cursor--
      break
    case "D":
      // 커서++, 단 커서위치가 단어길이와 같으면 무시
      console.log('keynums : ', Object.keys(strLinkedList).length)
      strLinkedList.cursor++
      break
    case "B":
      // 커서위치의 단어지우고, 커서-- 단 커서가0이면 무시
      delete strLinkedList[strLinkedList[cursor--]]
      break
    case "P":
      // 커서++, 
      break
  }
  console.log(strLinkedList)
}
*/