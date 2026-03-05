// 문제 9번 회의실 배정 1931번 실패 두번째시도도실패
// 주어진 회의시간들을 1. 종료시간이 이른순 2. 종료시간이 같다면 시작시간이 빠른순으로 정렬을해야 선택가능한 회의의 최대갯수를 구할수있다 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let meetNum = Number(input[0])
let meetings = input.map((value) => value.split(' '))
console.log(meetings)

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let arr = []
for (let i = 1; i <= n; i++) arr.push(input[i].split(' ').map(Number))
arr.sort(function(a, b) {
  if (a[1] != b[1]) return a[1] - b[1]
  else return a[0] - b[0]
})
let cnt = 1, cur = 0
for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i
    cnt += 1
  }
}
console.log(cnt)