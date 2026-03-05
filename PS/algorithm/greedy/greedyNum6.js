//문제 6번 수들의 합 1789번 실패 재도전 성공 뭔가 구려보임
// let fs = require('fs')
// let input = Number(fs.readFileSync('input.txt').toString().trim())
let input = 200
let [tmp,cnt] = [0, 0]
while (true) {
  tmp += 1
  // console.log(`현재 S는${input} 이고 ${tmp}뺄예정`)
  if (input - 2 * tmp <= 0) {
    break
  } else {
    input -= tmp
    cnt += 1
  }
}
// console.log(input, tmp)
while (input - tmp > 0) {
  tmp += 1
  console.log(tmp)
}
cnt += 1
console.log(cnt)