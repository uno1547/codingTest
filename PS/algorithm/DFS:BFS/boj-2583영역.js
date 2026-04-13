const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M, K] = input[0].split(' ').map(Number)

const graph = Array.from({ length : N }, () => new Array(M).fill(0))
// console.log(graph);

// 채우고
for(l = 1; l <= K; l++) {
  console.log(input[l]);
  const [sr, sc, er, ec] = input[l].split(' ').map(Number)
  
  for(let r = sc; r < ec; r++) {
    for(let c = sr; c < er; c++) {
      graph[r][c] = 1
    }
  }
  
  console.log(graph);
}

const visited = Array.from({ length : N }, () => new Array(M).fill(false))
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

// let cnt = 0

const result = []
let areaNum = 0
for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    // 방문하지않은 노드라면 bfs탐색후 넓이 반환
    // result에 push
    if(!visited[i][j] && graph[i][j] == 0) {
      areaNum++
      const areaDiv = bfs(i, j, visited)
      result.push(areaDiv)
    }
  }
}

result.sort((a, b) => a - b)
console.log(areaNum);
console.log(result.join(' '));
// 남은 영역 넓이 구하기
function bfs(r, c, visited) {
  const queue = [[r, c]]
  visited[r][c] = true //////
  let div = 0

  while(queue.length != 0) {
    const [r, c] = queue.shift()
    div++

    for(const [dr, dc] of dirs) {
      const newR = r + dr
      const newC = c + dc

      if(newR >= 0 && newR < N && newC >= 0 && newC < M) {
        if(!visited[newR][newC] && graph[newR][newC] == 0) {
          visited[newR][newC] = true
          queue.push([newR, newC])
        }
      }
    }
  }
  return div
}

// bfs(0, 0, visited)  
// 9시 10분