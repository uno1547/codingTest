let _n = 4
let m = 3
let ans = []
let visited = []
for (let i = 0; i <= _n; i++) {
  visited.push(0)
}
console.log(visited)
function BT(n, list) {
  if (n == m) { //m개의 수를 선택완료시, 정답배열에 추가및 종료 
    ans.push(list)
    return
  }
  for (let i = 1; i <= _n; i++) {
    if (visited[i] == 0) { //중복되지않으면
      visited[i] = 1
      let merge = list.concat([i])
      BT(n + 1, merge)
      visited[i] = 0
    }
  }
}
BT(0, [])
console.log(ans)
let result = ""
for (x of ans) {
  for (y of x) {
    result += `${y} `
  }
  result.trim()
  result += '\n'
}
result.trim()
console.log(result)