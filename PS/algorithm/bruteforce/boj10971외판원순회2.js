// 26 / 3 / 26

const fs = require('fs')
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')
const n = Number(input[0])

const matrix = input.slice(1).map(line => line.split(' ').map(Number))
console.log(matrix);

/*
도시를 0번부터 

*/
let minCost = Infinity
const visited = new Array(n).fill(false) // 0번도시라고 가정하면되니 굳이 n+1불필요

function dfs(cur, count, currentCost) {
  if(currentCost >= minCost) return

  if(count == n) {
    // 모든 도시 방문했을때
    if(matrix[cur][0] != 0) {
      // 0번으로 회귀가능하면 계산
      minCost = Math.min(minCost, currentCost + matrix[cur][0])
    }
    return
  }


  for(let i = 0; i < n; i++) {
    if(matrix[cur][i] != 0 && !visited[i]) { // 다음 도시로의 길이 존재하고, 방문하지않았을경우에 탐색
      visited[i] = true
      dfs(i, count + 1, currentCost + matrix[cur][i])
      visited[i] = false
    }
  }
}

visited[0] = true
dfs(0, 1, 0)

console.log(minCost);