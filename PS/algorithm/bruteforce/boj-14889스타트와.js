
const fs = require('fs')
const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

const n = Number(input[0])
const status = input.slice(1).map(line => line.split(' ').map(Number))
console.log(status);

// cnt가 n/2 이될때까지 탐색
// n 6 이면 
/*
1 2 3 4 5 6

1 2 3
1 2 4
1 2 5
1 2 6
1 3 4

조합임 어차피 합만구함
*/

let minDiff = Infinity
const visited = new Array(n).fill(false)

function makeCombination(start, cnt) {
  if(cnt == n / 2) {
    let startScore = 0
    let linkScore = 0

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(visited[i] && visited[j]) startScore += status[i][j]
        if(!visited[i] && !visited[j]) linkScore += status[i][j]
      }
    }

    const diff = Math.abs(startScore - linkScore)
    minDiff = Math.min(diff, minDiff)
    if(minDiff == 0) {
      console.log(0);
      process.exit()
    }

    return
  }

  for(let i = start; i < n; i++) {
    if(!visited[i]) {
      visited[i] = true
      makeCombination(i + 1, cnt + 1)
      // makeCombination(i + 1, cnt + 1)
      visited[i] = false
    }
  }
}

makeCombination(0, 0)
console.log(minDiff);

function solution() {
  const fs = require('fs')
  const input = fs.readFileSync('./memo.txt').toString().trim().split('\n')

  const n = Number(input[0])
  const matrix = input.slice(1).map(line => line.split(' ').map(Number))

  console.log(matrix);
}












solution()