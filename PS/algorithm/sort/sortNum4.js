//11004
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let caseNums = input[0].split(' ').map(Number)
let number = caseNums[0]
let index = caseNums[1]
let nums = input[1].split(' ').map(Number)
nums.sort(function(a, b) {
  return a - b
})
console.log(nums[index - 1])
*/

// 24/ 8/ 24
const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().split('\n')
const [n, k] = input[0].split(' ').map(Number)
const nums = input[1].split(' ').map(Number)
// console.log(n, k, nums);

nums.sort((a, b) => a - b)
const ans = nums[k - 1]
console.log(ans);