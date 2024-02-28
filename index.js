let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let nums = Number(input[0])
let groupNum = 0
for (i = 1; i <= nums; i++) {
  let data = input[i]
  let indexes = []
  let isGroup = true
  for (j of data) {
    indexes.push(data.indexOf(j))
  }
  console.log(indexes)
  for (k = 0; k < indexes.length - 1; k++) {
    if (indexes[k] > indexes[k + 1]) {
      isGroup = false
    }
  }
  isGroup ? groupNum += 1 : ""
}
console.log(groupNum)