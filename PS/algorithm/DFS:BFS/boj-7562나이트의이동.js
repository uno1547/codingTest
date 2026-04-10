const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const n = Number(input[0])

const cases = input.slice(1)
let line = 0

for(let i = 0; i < n; i++) {
  const size = cases[line]
  const startCord = cases[line+1].split(' ').map(Number)
  const endCord = cases[line+2].split(' ').map(Number)
  // console.log(size, startR, startC, endR, endC);
  const ans = search(size, startCord, endCord)
  console.log(ans);
  line+=3
}

function search(size, startCord, endCord) {
  const [startR, startC] = startCord
  const [endR, endC] = endCord

  // let ans = 0

  const visited = Array.from({length : size}, () => new Array(size).fill(false))
  const queue = [[startR, startC, 0]]
  visited[startR][startC] = true
  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
  let head = 0

  while(head < queue.length) {
    const [curR, curC, dist] = queue[head++]
    if(curR == endR && curC == endC) return dist

    for(const [dr, dc] of moves) {
      const newR = curR + dr
      const newC = curC + dc

      if(newR >= 0 && newR < size && newC >= 0 && newC < size && !visited[newR][newC]) {
        visited[newR][newC] = true
        queue.push([newR, newC, dist + 1])
      }
    }
  }
}

/* visited 를 기록지로 사용하기
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const t = Number(input[0])

let line = 1 // 테스트 케이스 시작 라인

for (let i = 0; i < t; i++) {
  const size = Number(input[line++])
  const [startR, startC] = input[line++].split(' ').map(Number)
  const [endR, endC] = input[line++].split(' ').map(Number)

  console.log(solve(size, startR, startC, endR, endC))
}

function solve(size, startR, startC, endR, endC) {
  if (startR === endR && startC === endC) return 0

  // 1. visited를 -1로 초기화 (기록지 방식)
  const dist = Array.from({ length: size }, () => new Array(size).fill(-1))
  
  // 2. 큐에는 좌표만 넣기
  const queue = [[startR, startC]]
  dist[startR][startC] = 0 // 시작점 거리 0
  
  const moves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ]
  
  let head = 0
  while (head < queue.length) {
    const [r, c] = queue[head++]

    if (r === endR && c === endC) return dist[r][c]

    for (const [dr, dc] of moves) {
      const nR = r + dr
      const nC = c + dc

      if (nR >= 0 && nR < size && nC >= 0 && nC < size) {
        // 3. 아직 방문하지 않은(-1) 곳만 탐색
        if (dist[nR][nC] === -1) {
          dist[nR][nC] = dist[r][c] + 1 // 이전 거리 + 1 기록
          queue.push([nR, nC])
        }
      }
    }
  }
}

*/