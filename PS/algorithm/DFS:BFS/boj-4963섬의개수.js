//
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

let line = 0
while(input[line] != "0 0") {
  const [w, h] = input[line++].split(' ').map(Number)
  // console.log(w, h);

  // const map = Array.from({ length : h }, () => new Array(w).fill(0))
  // console.log(map);
  const map = []

  for(let i = 0; i < h; i++) {
    // console.log(input[line++]);
    // const [x, y] = input[line++].split(' ').map(Number)
    map.push(input[line++].split(' ').map(Number))
  }

  let ans = 0
  
  // console.log(map);
  getIslandNum(map, w, h)
  // console.log('케이스끝!');
}

function getIslandNum(map, w, h) {
  const visited = Array.from({length : h}, () => new Array(w).fill(false))

  let cnt = 0
  for(let i = 0; i < h; i++) { // w, h 는 없어도되네???? 이게모임 ㅋㅋ
    for(let j = 0; j < w; j++) {
      if(!visited[i][j] && map[i][j] == 1) {
        cnt++
        bfs(map, visited, i, j)
      }
    }
  }
  console.log(cnt);
}

function bfs(map, visited, r, c) {
  const queue = [[r, c]]
  visited[r][c] = true

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]

  while(queue.length > 0) {
    const [curR, curC] = queue.shift()
    for(const [dr, dc] of dirs) {
      const newR = curR + dr
      const newC = curC + dc

      if(newR >= 0 && newR < map.length && newC >= 0 && newC < map[0].length) {
        if(!visited[newR][newC] && map[newR][newC] == 1) {
          queue.push([newR, newC])
          visited[newR][newC] = true
        }
      }

    }


  }
}