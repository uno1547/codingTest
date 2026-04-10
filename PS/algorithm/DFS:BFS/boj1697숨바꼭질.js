const fs = require('fs')
const [N, M] = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number)
console.log(N, M);

/*
미로탐색이랑 비슷하게 큐에 움직임을 넣어가면서 
시작점에서 걷기한번, 순간이동 한번 번갈아가면서 넣고
*/

const visited = new Array(100000).fill(false)
const queue = [[N, 0]]
visited[N] = true

let head = 0
while(queue.length != 0) {
  // const moves = [-1, 1, ]
  const [cord, time] = queue[head++]
  const moves = [-1, 1, cord]

  if(cord == M) {
    console.log(time);
    break
  }

  for(const move of moves) {
    const newCord = cord + move

    if(newCord >= 0 && newCord <= 100000) {
      if(!visited[newCord]) {
        queue.push([newCord, time + 1])
        visited[newCord] = true
      }
    }
  }
}

/*
const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

// 1. -1로 초기화 (아직 방문하지 않았다는 뜻)
const visited = new Array(100001).fill(-1)

// 2. 큐에는 '좌표'만 넣습니다. 몸만 가볍게!
const queue = [N]
visited[N] = 0 // 시작점의 소요 시간은 0초
let head = 0

while(head < queue.length) {
  const cord = queue[head++]

  // 목적지 도착 시 해당 칸에 적힌 시간을 출력
  if(cord === M) {
    console.log(visited[cord]);
    break
  }

  // 이동 가능한 후보들
  const nextPositions = [cord - 1, cord + 1, cord * 2]

  for(const next of nextPositions) {
    if(next >= 0 && next <= 100000) {
      // 3. visited[next]가 -1이라면 아직 한 번도 안 왔다는 뜻!
      if(visited[next] === -1) {
        // 현재 칸의 시간 + 1을 다음 칸에 적어줍니다.
        visited[next] = visited[cord] + 1
        queue.push(next)
      }
    }
  }
}
*/