// 1102 유기농배추 성공!!
let fs = require('fs')
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const caseNum = Number(input.shift())
let infoLineIndex = 0
for (let i = 0; i < caseNum; i++) {
  const testCase = input[infoLineIndex]
  const [width, height, cactusNum] = testCase.split(' ').map(Number)
  const cols = new Array(height).fill(0)
  const field = cols.map(() => new Array(width).fill(0))
  let wormNum = 0
  for (let k = infoLineIndex + 1; k <= infoLineIndex + cactusNum; k++) {
    const [x, y] = input[k].split(' ').map(Number)
    field[y][x] = 1
  }
  const visitedRows = new Array(height).fill(0)
  const visited = visitedRows.map(() => new Array(width).fill(0))
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      const cactus = field[i][j]
      if (cactus && !visited[i][j]) { //배추있고, 방문한적없는 좌표면 지렁이설치
        wormNum++
        DFS(i, j, width, height,field, visited)
      }
    }
  }
  infoLineIndex = infoLineIndex + cactusNum + 1
  console.log(wormNum);
}
function DFS (cactusRow, cactusCol, width, height, field, visited) {
  visited[cactusRow][cactusCol] = 1
  const adjacentCords = [[cactusRow - 1, cactusCol], [cactusRow + 1, cactusCol], [cactusRow, cactusCol - 1], [cactusRow, cactusCol + 1]]
  for(let k = 0; k < adjacentCords.length; k++) {
    const [cordX, cordY] = adjacentCords[k]
    let valid = 0
    if (cordX >= 0 && cordX < height) {
      valid = 1
    }
    if (valid) {
      const isFilled = field[cordX][cordY] 
      const isVisited = visited[cordX][cordY] 
      if (isFilled && !isVisited) {
        DFS (cordX, cordY, width, height, field, visited)
      }
    }
  }
}
/*
const [width, height, cactusNum] = input[0].split(' ').map(Number)
// 가로 세로 만큼의 밭 좌표계 설정
const cols = new Array(height).fill(0)
const field = cols.map((el) => new Array(width).fill(0))
let wormNum = 0
// 배추 위치순서쌍을 순회하면서, 밭 좌표계에 기록
for (let i = 1; i <= cactusNum; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  field[y][x] = 1
}
//현재 밭 좌표계에 해당하는 visited2차원 배열
const visitedRows = new Array(height).fill(0)
const visited = visitedRows.map(() => new Array(width).fill(0))
// 좌표계 순회하면서 DFS
//현재 좌표계를 순회하면서, 배추가 있다면 일단 벌레 한마리 추가, DFS들어감

for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    const cactus = field[i][j]
    // console.log(`field [${i}][${j}]`);
    if (cactus && !visited[i][j]) { //배추있고, 방문한적없는 좌표면 지렁이설치
      wormNum++
      // console.log(`지렁이 ${++wormNum}마리 설치`);
      DFS(i, j)
    }
  }
}
console.log(wormNum);
function DFS (cactusRow, cactusCol) {
  //방문처리
  visited[cactusRow][cactusCol] = 1
  // console.log('changedField', field);
  // console.log('changevisited',visited);
  // console.log(`${cactusRow} ${cactusCol}방문처리!!`);
  const adjacentCords = [[cactusRow - 1, cactusCol], [cactusRow + 1, cactusCol], [cactusRow, cactusCol - 1], [cactusRow, cactusCol + 1]]
  //상하좌우의 좌표에 대해서 배추있고, 방문한적없으면 DFS또 들어감
  // console.log(adjacentCords);
  for(let k = 0; k < adjacentCords.length; k++) {
    const [cordX, cordY] = adjacentCords[k]
    let valid = 0
    if (cordX >= 0 && cordX < height) {
      valid = 1
    }
    if (valid) {
      // console.log(`유효한 주변좌표 x:${cordX} y:${cordY}`);
      const isFilled = field[cordX][cordY] 
      const isVisited = visited[cordX][cordY] 
      // console.log(isFilled ? '이좌표에 양배추 존재!!' : '이좌표 양배추 없음');
      // console.log(isVisited ? '이좌표 방문한적 있음!!' : '이좌표 방문한적 없음');
      if (isFilled && !isVisited) {
        // console.log('양배추가 존재하고 방문한적없다!!');
        // console.log(cordX, cordY);
        DFS (cordX, cordY)
      }
    }
  }
}
*/
/*
let fs = require('fs')
let input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const caseNum = Number(input.shift())
const [width, height, cactusNum] = input[0].split(' ').map(Number)
const cols = new Array(height).fill(0)
const field = cols.map((el) => new Array(width).fill(0))
let wormNum = 0
for (let i = 1; i <= cactusNum; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  field[y][x] = 1
}
const visitedRows = new Array(height).fill(0)
const visited = visitedRows.map(() => new Array(width).fill(0))
for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    const cactus = field[i][j]
    if (cactus && !visited[i][j]) { //배추있고, 방문한적없는 좌표면 지렁이설치
      DFS(i, j)
    }
  }
}
function DFS (cactusRow, cactusCol) {
  //방문처리
  visited[cactusRow][cactusCol] = 1
  const adjacentCords = [[cactusRow - 1, cactusCol], [cactusRow + 1, cactusCol], [cactusRow, cactusCol - 1], [cactusRow, cactusCol + 1]]
  for(let k = 0; k < adjacentCords.length; k++) {
    const [cordX, cordY] = adjacentCords[k]
    let valid = 0
    if (cordX >= 0 && cordX < height) {
      valid = 1
    }
    if (valid) {
      const isFilled = field[cordX][cordY] 
      const isVisited = visited[cordX][cordY] 
      if (isFilled && !isVisited) {
        DFS (cordX, cordY)
      }
    }
  }
}
*/