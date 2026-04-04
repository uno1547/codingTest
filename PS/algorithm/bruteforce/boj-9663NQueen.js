const fs = require('fs')
const n = Number(fs.readFileSync('./input.txt').toString().trim())
console.log(n);

const N = 8; // 예시
const board = new Array(N).fill(0); // index: 행, value: 열
let count = 0;

function isPossible(row) {
  for (let i = 0; i < row; i++) {
    // 1. 세로 체크: 같은 열(Value)에 이미 퀸이 있는가?
    if (board[row] === board[i]) return false;
    
    // 2. 대각선 체크: (행의 차이) === (열의 차이) 인가?
    if (Math.abs(row - i) === Math.abs(board[row] - board[i])) return false;
  }
  return true;
}

function dfs(row) {
  if (row === N) {
    count++; // N번째 행까지 무사히 도달했다면 성공!
    return;
  }

  for (let col = 0; col < N; col++) {
    board[row] = col; // 현재 행의 col번째 열에 퀸을 일단 놓아봄
    
    if (isPossible(row)) { // "여기 둬도 대각선/세로 안 걸려?"
      dfs(row + 1);       // 통과하면 다음 행으로!
    }
    // 통과 못 하면? 다음 col로 넘어가거나 자동으로 이전 행으로 돌아감
  }
}

dfs(0);
console.log(count);
// 브루트포스로 0~N-1의수로 길이N 인 순열 만드는 경우를 펼쳐놓고
// 여기서 대각선조건을 따지려면 방법이 없음
// 미리 가지치기로 쳐낸다? 그럴려면 이전 