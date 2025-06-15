// 숫자의 표현
/*
1 > 1 2 3 4 5 target == 15 cnt++
2 > 2 3 4 5 6 target > 15 이면 break해야함
:
:
:
15 > 15 target == 15 cnt++        15+16에서 break
*/
const solution = (n) => {
  let cnt = 0
  for(let i = 1; i <= n; i++) {
    // console.log(`${i}부터 시작`);
    let sum = 0

    for(let j = i; sum < n; j++) { // j = 5, sum = 10 이면 조건만족, sum = 15가되고, cnt++, 이후 j = 6이면 sum < n 불만족 종료
      sum += j
      if(sum == n) cnt++
      // console.log(sum);
    }

  }
  console.log(cnt);
}
// solution(1)
// solution(2)
// solution(3)
// solution(6)
solution(15)