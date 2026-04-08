const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n')

const n = Number(input[0])

// console.log(n);

const cases = input.slice(1)
// console.log(cases);

let line = 0

for(let i = 0; i < n; i++) {
  const [M, N, K] = cases[line++].split(' ').map(Number)
  console.log(M, N, K);
  
  const matrix = Array.from({length : N}, () => new Array(M).fill(0))
  // console.log(matrix);
  for(let j = line; j < line + K; j++) {
    // console.log(cases[j]);
    const [r, c] = cases[j].split(' ').map(Number)
    // console.log(r, c);
    matrix[c][r] = 1
    // matrix[r][c] = 1
  }
  // console.log(matrix);
  getWormNum(M, N, matrix)
  line += K
}

function getWormNum(M, N, matrix) {
  // 모든 노드를 돌면서, 1인경우에 dfs 탐색
  const visited = Array.from({length : N}, () => new Array(M).fill(false))
  let wormNum = 0

  for(let i = 0; i < N; i++) { // r
    for(let j = 0; j < M; j++) { // c
      const cur = matrix[i][j]
      if(!visited[i][j] && matrix[i][j] == 1) {
        dfs(M, N, i, j, visited, matrix)
        wormNum++
      }
    }
  }
  console.log(wormNum);
}

// 재귀 DFS 방식임!!! BFS로도 풀어보면 좋을듯 4963은 그렇게 품
function dfs(M, N, r, c, visited, matrix) {
  visited[r][c] = true
  // let count = 1
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for(const [dr, dc] of dirs) {
    const nr = r + dr
    const nc = c + dc

    if(nr >= 0 && nr < N && nc >= 0 && nc < M) { 
      if(!visited[nr][nc] && matrix[nr][nc] == 1) dfs(M, N, nr, nc, visited, matrix)
    }
  }
}