//부족한 금액 계산하기
function solution(price, money, count) {
  let fee = 0
  for(let i = 1; i <= count; i++) {
      fee += price * i
  }
  return money < fee ? fee - money : 0
}