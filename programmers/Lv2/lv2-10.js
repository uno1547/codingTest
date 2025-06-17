// 점프와 순간 이동
const solution = (n) => {
    let cnt = 0
    while(n != 0) { // 0이될때까지 나누고빼고 반복
      if(n % 2 == 0) { // 짝수면 순간이동처리
        n = n / 2
        console.log(`${n} 으로 빠꾸순간이동`);
        continue
      } else { // 홀수면 빠꾸 처리
        n = n - 1
        cnt++
        console.log(`${n} 으로 빠꾸`);
        continue
      }
    }
    console.log(`${cnt}번만에 이동가능해요`);
}

solution(5000)