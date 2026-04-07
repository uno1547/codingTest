const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const n = Number(input[0])
const matrix = input.slice(1).map(str => str.split('').map(Number))
console.log(matrix);

const visited = matrix.map(e=> new Array(n).fill(false))
const result = []

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    // 방문하지않았고, 집이라면 탐색 
    if(!visited[i][j] && matrix[i][j] == 1) {
      const count = dfs(i, j)
      result.push(count)
    }
  }
}

function dfs(r, c) {
  visited[r][c] = true
  let count = 1
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  
  for(const [dr, dc] of dirs) {
    const nr = r + dr
    const nc = c + dc
    if(nr < 0 || nr >= n || nc < 0 || nc >= n) continue
    if(matrix[nr][nc] == 1 && !visited[nr][nc]) {
      count += dfs(nr, nc)
    }
  }
  return count
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));