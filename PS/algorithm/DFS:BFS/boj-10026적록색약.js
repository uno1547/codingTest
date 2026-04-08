const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

// R과 G가 인접한경우가 아니면
// 인접의 기준이 일반인은 RGB이고, 색약은 NB 2가지인셈
/*
정상인

현재 R > R
    G > G
    B > B

색맹

현재 R > RG
    G > RG
    B > B

조건분기
if(color == "B") {
  if(next == "B")
} else {
  if(next != "B")
}
*/


const n = Number(input[0])

const map = []
for(let i = 1; i <= n; i++) {
  map.push(input[i].split(''))
}
console.log(map);

// const visited1 = new Array(n).fill(new Array(n).fill(false))
const visited1 = Array.from({length : n}, () => new Array(n).fill(false))
// const visited2 = new Array(n).fill(new Array(n).fill(false))
const visited2 = Array.from({length : n}, () => new Array(n).fill(false))
console.log(visited1);
// console.log(visited2);
let cnt1 = 0
let cnt2 = 0

// exit(0)
// 정상인의 구역
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    const curColor = map[i][j]
    // console.log(curColor);
    if(!visited1[i][j]) {
      bfs(i, j, map, visited1, curColor, false)
      cnt1++
    }
  }
}

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    const curColor = map[i][j]
    // console.log(curColor);
    if(!visited2[i][j]) {
      bfs(i, j, map, visited2, curColor, true)
      cnt2++
    }
  }
}
console.log(`${cnt1} ${cnt2}`);
function bfs(r, c, map, visited, color, isBlind) {
  const queue = [[r, c]]
  visited[r][c] = true  
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  while(queue.length != 0) {
    const [curR, curC] = queue.shift()

    for(const [dr, dc] of dirs) {
      const newR = curR + dr
      const newC = curC + dc
      // const newNode = map[newR][newC]
      if(newR >= 0 && newR < map.length && newC >= 0 && newC < map[0].length && !visited[newR][newC]) {
        if(isBlind) {
          // 색맹이라면 R > RG, G > RG
          if((color == "R" && (map[newR][newC] == "R" || map[newR][newC] == "G")) || (color == "G" && (map[newR][newC] == "R" || map[newR][newC] == "G")) || (color == "B" && map[newR][newC] == "B")) {
            queue.push([newR, newC])
            visited[newR][newC] = true
          }
        } else {
          if(map[newR][newC] == color) {
            queue.push([newR, newC])
            visited[newR][newC] = true
          }
        }
        // visited1[newR][newC] = true
      }
    }
  }
}



// const visited2 = new Array(n).fill(new Array(n).fill(false))