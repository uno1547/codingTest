// 예상 대진표
const solution = (N, A, B) => {
  let round = 1
  while(true) {
    const aIdx = Math.ceil(A / 2) // 2
    const bIdx = Math.ceil(B / 2) // 4
    if(aIdx == bIdx) { // 두 참가자번호차이가 1이되면 만난거임 4 5면 안되는데?
      break
    }
    round++
    A = aIdx // 2
    B = bIdx // 4
  }
  return round
}
// console.log(solution(8, 4, 7));
console.log(solution(8, 3, 7));

const solution1 = (N, A, B) => {
  let round = 0;
  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    round++;
  }
  return round;
};

const solution2 = (N, A, B) => {
  let round = 0
  while(A != B) {
    A = Math.ceil(A / 2)
    B = Math.ceil(B / 2)
    round++
  }
  return round
}
