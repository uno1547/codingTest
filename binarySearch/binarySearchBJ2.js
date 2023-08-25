//10816 숫자카드2 성공
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let numList = input[1].split(' ').map(Number)
let m = Number(input[2])
let tmp = input[3].split(' ').map(Number)
console.log(n, numList, m, tmp)
/*
function binarySearch(arr, value, start, end) {
  while(start <= end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] == value) return mid
    else if (arr[mid] < value) start = mid + 1
    else end = mid - 1
  }
  return -1
}
*/
function lowerBound(arr, value, start, end) {
  while(start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= value) end = mid
    else start = mid + 1
  }
  return end
}
function upperBound(arr, value, start, end) {
  while(start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] > value) end = mid
    else start = mid + 1
  }
  return end
}
numList.sort((a, b) => a - b)
// console.log(numList)
let result = ""
for (let i = 0; i < m; i++) {
  // console.log(tmp[i])
  let minIndex = lowerBound(numList, tmp[i], 0, n)
  let maxIndex = upperBound(numList, tmp[i], 0, n)
  // console.log(minIndex, maxIndex)
  result += `${maxIndex - minIndex} `
}
console.log(result)