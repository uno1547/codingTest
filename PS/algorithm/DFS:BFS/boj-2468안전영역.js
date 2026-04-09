const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const n = Number(input[0])
const map = input.slice(1).map(line => line.split(' ').map(Number))
console.log(map);

const max = Math.max(...map.map(row => Math.max(...row)))
const min = Math.max(...map.map(row => Math.min(...row)))



// 최소 강수량(min - 1)부터 최대 강수량전(max - 1)까지 물채워보면서 최대 안전영역 개수 갱신
let maxZoneNum = 0
for(let rainHeight = 0; rainHeight <= max - 1; rainHeight++) {
  const zoneNum = getZoneNum(rainHeight)
  console.log(`강수량이 ${rainHeight}일때 안전영역개수 ${zoneNum}`);
  maxZoneNum = Math.max(maxZoneNum, zoneNum)
}
console.log(maxZoneNum);

function getZoneNum(rainHeight) {
  const visited = Array.from({ length : n }, () => new Array(n).fill(false))
  let zoneNum = 0
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      const curHeight = map[i][j]
      if(!visited[i][j] && curHeight > rainHeight) {
        bfs(i, j, visited, rainHeight)
        zoneNum++
      }
    }
  }
  return zoneNum
}

function bfs(r, c, visited, rainHeight) {
  const queue = [[r, c]]
  visited[r][c] = true
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  while(queue.length != 0) {
    const [r, c] = queue.shift()
    
    for(const [dr, dc] of dirs) {
      const newR = r + dr
      const newC = c + dc
      if(newR >= 0 && newR < n && newC >= 0 && newC < n) {
        const nextHeight = map[newR][newC]
        if(!visited[newR][newC] && nextHeight > rainHeight) { //탐색하려면 방문하지않았고, 강수량보다 높으면 방문하면됌
          visited[newR][newC] = true
          queue.push([newR, newC])
        }
      }
    }
  }
}