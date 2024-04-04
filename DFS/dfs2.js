let fs = require('fs')
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const caseNum = Number(input.shift())
// console.log(caseNum);
// const [top, bottom, left, right] = [[-1, 0], [1, 0], [0, -1], [0, 1]]
const [width, height, cactusNum] = input[0].split(' ').map(Number)
// 좌표계 설정
const cols = new Array(height).fill(0)
const field = cols.map((el) => new Array(width).fill(0))
// console.log(field);
// 배추 위치순서쌍을 순회하면서, 좌표계에 추가?
for (let i = 1; i <= cactusNum; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  field[y][x] = 1
}
console.log(field);
//현재 좌표계에 해당하는 visited2차원 배열
const visitedRows = new Array(height).fill(0)
const visited = visitedRows.map(() => new Array(width).fill(0))
console.log(visited);
// 좌표계 순회하면서 DFS
/*
현재 좌표계를 순회하면서, 배추가 있다면 상하좌우를 살핌
상하좌우에 배추가있다면, 인접배추를 돌면서 똑같은과정을 반복
*/
for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    const cactus = field[i][j]
    console.log(`arr[${i}][${j}]차례`);
    if (cactus && !visited[i][j]) { //배추가 존재하면 해당배추 기점으로 다시 탐색
      console.log(`arr[${i}][${j}] 에 배추존재!!`);
      DFS(i, j)
    }
    // DFS()
  }
}
function DFS (cactusRow, cactusCol) { // i, j  0, 0
  // const [top, bottom, left, right] = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  visited[cactusRow, cactusCol] = 1
  const adjacentCords = [[cactusRow - 1, cactusCol], [cactusRow + 1, cactusCol], [cactusRow, cactusCol - 1], [cactusRow, cactusCol + 1]]
  for(let k = 0; k < adjacentCords.length; k++) {
    const [cordX, cordY] = adjacentCords[k]
    let valid = 0
    if (cordX >= 0 && cordX < height) {
      valid = 1
    }
    console.log(`주변x:${cordX}주변y:${cordY}`);
    if (valid && field[cordX][cordY] && !visited[cordX][cordY]) { // 인접좌표에 배추존재, 방문한적없으면
      DFS(cordX, cordY)
    }
  }
}
//배열도 가능한가?
graph = {
  1 : [2, 3],
  2 : [1, 3],
  3 : [1, 2, 4, 5],
  4 : [3, 8],
  5 : [3, 6, 7],
  6 : [5], 
  7 : [5],
  8 : [4, 9],
  9 : [8]
}