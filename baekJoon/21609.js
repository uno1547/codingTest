// 그룹 : 일반 블록 적어도 하나, 일반블록의 색은 통일, 검은색있으면 안됌, 무지개색은 개수제한X(최대 그룹수-1 일듯 적어도한개는 일반이니)
// 그룹 : 크기 2이상 빨빨 or 빨무 or 빨무무
// 기준 블록 : 무지개 아닌 일반블록 중 행이 가장 작고, 그러한 것 중 열이 가장 작은 것
// 검은색 : -1, 무지개 : 0, 일반 : 1~M

/*
1. 그룹찾기
2. 그룹제거 및 점수
3. 중력
4. 90도 반시계 회전
5. 중력
6. 1~5 반복, 그룹없으면 종료
*/

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, colorNum] = input[0].split(' ').map(Number)

// 최초 input을 2차원 배열로 초기화
const matrix = input.slice(1).reduce((acc, val) => {
  acc.push([...val.split(' ').map(Number)])
  return acc
}, [])

console.log(matrix);

let score = 0

// 그룹이 존재하는동안 반복
// 그룹의 조건 만약에 N = 3, M = 4 일때
/*
[
  [2, 1, 3],
  [4, 0, 2],
  [1, 3, 4]
]
이러면 블록 그룹이 
10, 40, 20, 30 4개? 각 기준블록은 1, 4, 2, 3
크기가 가장큰 블록그룹찾기에서는 30 이 선택됨

*/

/*
그룹 찾는 함수 1, 2, 3 의 그룹을 어떤식으로 저장할까

[
  [그룹1],
  [그룹2],
  [그룹3]
]

블록그룹 크기, 무지개 블록수, 블록 그룹의 기준블록 등을 기록해야하니까 객체로 저장
[
  {
    groupSize : 3,
    rainbowCount: 1,
    critBlock: { r: 0, c: 1 },
    blocks: [ { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 1 } ]
  },
  {
    groupSize : 3,
    rainbowCount: 2,
    critBlock: { r: 1, c: 0 },
    blocks: [ { r: 1, c: 0 }, { r: 0, c: 1 }, { r: 2, c: 1 } ]
  },
  {
    groupSize : 1,
    rainbowCount: 0,
    critBlock: { r: 0, c: 0 }
  }
]


*/

// 모든 칸 탐색하면서 그룹 찾기
function findBlockGroups(matrix) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false))
  const groups = []

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(matrix[i][j] == -1 || matrix[i][j] == 0 || visited[i][j]) continue // 검은색블록이거나 방문한블록은 pass// 아 무지개는 탐색대상도아니고, 방문기록도되지않지만 그룹핑에는 사용됨
      
      const curBlock = matrix[i][j]
      
      /*
      그룹핑
      1. curBlock 기준으로 DFS 탐색 (visited 기록, 단 무지개블럭이면 방문처리안함 여러그룹에 속할수있으므로)
      2. 탐색하면서 그룹에 속하는 블록 좌표를 배열에 저장
      [
        {
          groupSize : 3,
          rainbowCount: 1,
          critBlock: { r: 0, c: 1 },
          blocks: [ { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 1 } ]
        },
        {
          groupSize : 3,
          rainbowCount: 2,
          critBlock: { r: 1, c: 0 },
          blocks: [ { r: 1, c: 0 }, { r: 0, c: 1 }, { r: 2, c: 1 } ]
        },
        {
          groupSize : 1,
          rainbowCount: 0,
          critBlock: { r: 0, c: 0 }
        }
      ]
      */
    }
  }
  return groups
}

// 모든 칸을 탐색해 찾은 그룹에 대해서 가장 큰 블록 그룹 찾기
function findMaxGroup(groups) {
  // 크기가 가장큰 그룹 찾기
  const maxBlockCnt = groups.reduce((acc, val) => {
    return val.length > acc ? val.length : acc
  }, 0)

  const maxGropus = groups.filter(group => group.length === maxBlockCnt)
  
  if(maxGropus.length === 1) return maxGropus[0] // 가장 큰 그룹이 하나면 바로 반환

  // 가장 큰 그룹이 여러개면 무지개블록 개수로 다시 필터링
  const maxRainbowCnt = maxGropus.reduce((acc, group) => {
    const rainBowCnt = group.reduce((acc, cord) => {
      return matrix[cord[0]][cord[1]] === 0 ? acc + 1 : acc
    }, 0)
    return rainBowCnt > acc ? rainBowCnt : acc
  }, 0)

  const maxRainbowGroups = maxGropus.filter(group => {

  })
}