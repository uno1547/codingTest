const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [M, N] = input[0].split(' ').map(Number)
const map = input.slice(1).map(line => line.split(' ').map(Number))

const visited = Array.from({ length : N }, () => new Array(M).fill(false))

const queue = []
let unStripeNum = 0

for(let i = 0; i < N; i++) {
  for(let j = 0; j < M; j++) {
    if(map[i][j] == 1) {
      queue.push([i, j, 0])
      visited[i][j] = true
    } else if(map[i][j] == 0) {
      unStripeNum++
    }
  }
}

let maxDays = 0
let head = 0
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

console.log("=== 🍅 토마토 익히기 시작! ===");

while(head < queue.length) {
  // 1. 큐에서 하나를 꺼냅니다.
  const [r, c, days] = queue[head++]
  
  // 디버깅: 현재 어떤 좌표를 처리 중인지 출력
  console.log(`\n[처리 중] 좌표: (${r}, ${c}) | 현재 시간: ${days}일차 | 남은 안 익은 토마토: ${unStripeNum}`);
  
  maxDays = days

  for(const [dr, dc] of dirs) {
    const nR = r + dr
    const nC = c + dc

    if(nR >= 0 && nR < N && nC >= 0 && nC < M) {
      if(!visited[nR][nC] && map[nR][nC] == 0) {
        visited[nR][nC] = true
        map[nR][nC] = 1 // 여기서 실제로 익음 처리
        unStripeNum--
        queue.push([nR, nC, days + 1])
        
        // 디버깅: 전염된 좌표 표시
        console.log(`   ㄴ ✨ 익음 발생! -> (${nR}, ${nC})`);
      }
    }
  }

  // 매 처리마다 맵의 모습을 보고 싶을 때 (console.table은 칸을 많이 차지하니 주의!)
  console.table(map); 
}

console.log("\n=== 최종 결과 ===");
console.table(map);
console.log(unStripeNum == 0 ? `결과: ${maxDays}일` : "결과: -1 (모두 익지 못함)");