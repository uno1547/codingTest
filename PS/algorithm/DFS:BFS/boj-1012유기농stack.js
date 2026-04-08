const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim()

let line = 0
const T = Number(input[line++])
const results = []

for(let i = 0; i < T; i++) {
  const [M, N, K] = input[line++].split(' ').map(Number)
  const matrix = Array.from({ length : N }, () => new Array(M).fill(0))
  
  for (let j = 0; j < K; j++) {
    const [x, y] = input[line++].split(' ').map(Number)
    matrix[y][x] = 1
  }

  results.push(getWormNum(M, N, matrix))
}

function getWormNum(M, N, matrix) {
  const visited = Array.from({ length : N }, () => new Array(M).fill(false))
  let wormNum = 0

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      if(!visited[i][j] && matrix[i][j] == 1) {
        stackDfs(M, N, i, j, visited, matrix)
        wormNum++
      }
    }
  }

  return wormNum
}


function stackDfs(M, N, startR, startC, visited, matrix) {
  const stack = [[startR, startC]]
  visited[startR][startC] = true

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  while(stack.length > 0) {
    const [r, c] = stack.pop()

    for(const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc

      if(nr >= 0 && nr < N && nc >= 0 && nc < M) {
        if(!visited[nr][nc] && matrix[nr][nc] == 1) {
          visited[nr][nc] = true
          stack.push([nr, nc])
        }
      }
    }

  }
}