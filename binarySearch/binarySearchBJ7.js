//가장긴 증가하는부분수열 2 실패 후 참고해서 성공!
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let seq = input[1].split(' ').map(Number)
console.log(n, seq)

function lowerBound (arr, value, start, end) { //lowerBound정의 value이상의값이 처음등장하는index반환
  while (start < end) {
    let mid = parseInt((start + end) / 2)
    if (arr[mid] >= value) end = mid // 찾는값 >= 중간값 lowerBound가 될수있고, 더 최초의 index를 찾기위해 end = mid(mid도될수있으니까)
    else start = mid + 1
}
  return end
}
let arr = [0]
//let arr = []
for (let i = 0; i < n; i++) { //기존 수열의 원소를 순회하며, arr에 추가및 
  if (seq[i] > arr[n - 1]) { //스택의 마지막 원소보다 큰원소일경우 삽입 
    arr.push(seq[i])
  } else { //스택의 마지막원소보다 작거나 같은 원소일경우 이분탐색으로 lowerBound찾고 대체 
    let ind = lowerBound(arr, seq[i], 0, arr.length)
    arr[ind] = seq[i]
  }
}
console.log(arr)
console.log(arr.length - 1)
/*
//이렇게 원소각각에대한 수열을 만들면 시간초과가뜰듯 N = 1000이면 할만할지도
10 20 30 50
20 30 50 
10 30 50
30 50 
20 50
50 
*/
/*
let tmp = seq[0] //첫원소가 제일작은게 아니면 성립이안됌
let cnt = 1
for (let i = 0; i < seq.length - 1; i++) {
  if (tmp < seq[i + 1]) {
    cnt += 1
    tmp = seq[i + 1]
  }
}
console.log(cnt)
*/
