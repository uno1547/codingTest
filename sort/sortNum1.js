//2752
let fs = require('fs')
//console.log(input)
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
input.sort(function(a, b) {
  return a - b
})
console.log(input)

/* 이렇게 세개의수, 데이터의개수가 작은수로 정해졌으면 시간복잡도 비효율적인 알고리즘 들을사용해도 무방하다
답을 출력시 console.log를 여러번 사용하는것보다 하나의 문자열에 형식에맞게 입력후 한번만 호출하는것을권장
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
//input = [3 1 2]
input.sort((a, b) => a - b)
let tmp = ""
for (num of input) {
  tmp += num+" "
}
console.log(tmp)
*/

// 24/ 8/ 24
let 