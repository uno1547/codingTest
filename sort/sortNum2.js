//2750
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