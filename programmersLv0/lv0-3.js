//콜라츠 수열 만들기
function solution(n) {
  let answer = []
  /*
  do {
    if (n % 2) { //홀수일경우

    } else { //짝수인경우

    }
    answer.push(n)
  } while (n != 1)
  */
  answer.push(n) // 1 이던 10이던 먼저들어감 
  while (n != 1) {
    if (n % 2) { //홀수
      n = 3 * n + 1
    } else { //짝수
      n /= 2
    } 
    answer.push(n)
  }
  console.log(answer);
  return answer
}
solution(1)
solution(10)