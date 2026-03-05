//1920 수찾기 성공 왜다들근심이많지내가잘못된건가
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let nums = input[1].split(' ').map(Number)
let m = Number(input[2])
let tmp = input[3].split(' ').map(Number)
nums.sort(function(a, b) {
  return a - b
})
function binarySearchL(arr, value, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] == value) {return mid}
    else if (arr[mid] < value) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1 
}
let result = ""
for (let i = 0; i < m; i++) {
  binarySearchL(nums, tmp[i], 0, n - 1) == -1 ? result += `0\n` : result += `1\n`
}
console.log(result.trim())