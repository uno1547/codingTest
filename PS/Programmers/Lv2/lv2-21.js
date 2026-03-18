// 삼총사

function solution(number) {
  const len = number.length
  for(let i = 0; i < len - 2; i++) {
        // 두 번째 숫자는 첫 번째 숫자 다음부터 탐색
    for(let j = i + 1; j < len - 1; j++) {
            // 세 번째 숫자는 두 번째 숫자 다음부터 탐색
      for(let k = j + 1; k < len; k++) {
        console.log(i,j,k);
        // if (number[i] + number[j] + number[k] === 0) {
        //     cnt++;
        // }
      }
    }
  }  
}

solution([-2, 3, 0, 2, -5])
// solution([-3, -2, -1, 0, 1, 2, 3])
// solution([-1,1,-1,1])