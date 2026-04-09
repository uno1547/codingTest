const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
console.log(N, M);

const map = input.slice(1).map(line => line.split('').map(Number))
console.log(map);

const visited = Array.from({ length : N }, () => new Array(M))


const distance = bfs(0, 0, visited)
console.log(distance);

function bfs(r, c, visited) {
  const queue = [[r, c, 1]]
  visited[r][c] = true
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  while(queue.length != 0) {
    const [r, c, distance] = queue.shift()

    if(r == N - 1 && c == M - 1) return distance

    for(const [dr, dc] of dirs) {
      const newR = r + dr
      const newC = c + dc

      if(newR >= 0 && newR < N && newC >= 0 && newC < M) {
        if(!visited[newR][newC] && map[newR][newC] == 1) {
          queue.push([newR, newC, distance + 1])
          visited[newR][newC] = true
        }
      }
    }
  }
}


/*
function bfs(start) {
  const queue = [start]
  visited[start] = true

  while(queue.length != 0) {
    const cur = queue.shift()
    for(const next of graph[cur]) {
      if(!visited[next]) {
        queue.push(next)
        visited[next] = true
      }
    }
  }
}
*/