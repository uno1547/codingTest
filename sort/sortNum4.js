//11004
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
// console.log(input)
let caseNums = input[0].split(' ').map(Number)
// console.log(caseNums)
let number = caseNums[0]
let index = caseNums[1]
let nums = input[1].split(' ').map(Number)
nums.sort(function(a, b) {
  return a - b
})
// console.log(nums)
console.log(nums[index - 1])