//N과M 정말 어렵네;;
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)
let number = input[0]
let selectNum = input[1]
// 1에서 N까지의 수 중 중복없이 m개를 뽑는경우를 모두구하라
// let tmp = "" 
let ans = []
let visited = []
for (let i = 0; i <= number; i++) {
  visited.push(0)
}

function BT(n, list) {
  if (n == selectNum) { //m개의 수를 선택완료시, 정답배열에 추가및 종료 
    ans.push(list.trim())
    return
  }
  for (let i = 1; i <= number; i++) {
    if (visited[i] == 0) { //중복되지않으면
      visited[i] = 1
      BT(n + 1, list + `${i} `)
      visited[i] = 0
    }
  }
}
BT(0, "")
let result = ""
for (x of ans) {
  result += `${x}\n`
}
result.trim()
console.log(result)

// for (x of ans) {
//   for (y of x) {
//     result += `${y} `
//   }
//   result.trim()
//   result += '\n'
// }
// result.trim()
// console.log(result)


/*
1,2,3,4 (2)
1





*/