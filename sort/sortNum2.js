//2750
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n').map(Number)
// console.log(input)
let length = input[0]
let nums = input.slice(1)
nums.sort(function(a, b) {
  return a - b
})
// console.log(nums)
for(i = 0; i < length; i++) {
  console.log(nums[i])
}
*/



/* 입출력의 형식이랑 index헷갈리지말기!! 성공
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
let num = input[0]
let sorted = []
for (i = 1; i < num; i++) {
  sorted.push(input[i])
}
sorted.sort((a, b) => a - b)
let result = ""
for (num of sorted) {
  result += num + '\n'
}
console.log(result)
*/

// 24 / 8 /24
let fs = require('fs')
let [n, ...nums] = fs.readFileSync('../input.txt').toString().trim().split('\n').map(Number)
console.log(n, nums);

nums.sort((a, b) => a - b)
let ans = ""
for(let i = 0; i < n; i++) {
  ans = ans + nums[i] + '\n'
}
console.log(ans.trim());