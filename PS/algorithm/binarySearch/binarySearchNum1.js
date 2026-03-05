// 문제2512번 예산 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let bud = input[1].split(' ').map(Number)
let maxBud = Number(input[2])

let start = 1
let end = bud.reduce((a, b) => Math.max(a, b))
console.log(start, end) //1, 150

let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  console.log(`상한가는 ${mid}`)
  let total = 0
  for (x of bud) {
    total += Math.min(mid, x) //요청예산 vs mid(상한액) 비교해서 1. 요청예산 > 상한액 => 상한액지급 2. 요청예산 < 상한액 => 요청예산지급 이걸 한줄로 표현 ㄷㄷㄷ
  }
  console.log(`평가총액은 ${total}`)
  if (total <= maxBud) { //평가총액 <= 실총액 이라면 아직 여유가 있는거니, 상한액증가 (start를 오른쪽으로)
    result = mid // 각 배정예산은 최대로 많이받아도 상한가 만큼 받기때문에 배정예산중최댓값 result 는 mid이다
    start = mid + 1
    console.log(`평가총액 <= 실총액이고, 증가된 최소상한가는 ${start}`)
  } else {
    end = mid - 1
    console.log(`평가총액 > 실총액이고 감소된 최대상한가는 ${end}`)
  }
}
console.log(result)