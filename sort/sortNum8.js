//18870번 문제 좌표압축 


/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let length = Number(input[0])
let numbs = input[1].split(' ').map(Number)
// console.log(numbs)
let newNums = []
for(i = 0; i < length; i++) {
  if(!newNums.includes(numbs[i])) {
    newNums.push(numbs[i])
  }
}
// console.log(newNums)
newNums.sort(function(a, b) {
  return a - b
})
// console.log(newNums)
for(i = 0; i < length; i++) {
  numbs[i] = newNums.indexOf(numbs[i])
}
// console.log(numbs)
let result = ""
for(i = 0; i < length; i++) {
  result += `${numbs[i]} `
}
console.log(result)
//시간초과 for문안의 includes의 코드가 N^2의 시간복잡도를 가지기에 N이 100만까지의 범위일경우 시간초과 발생 > ㄹ
*/

//두번째 시도
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')
let caseNum = Number(input[0])
let cords = input[1].split(' ').map(Number) //입력 좌표 배열
// console.log(cords) [2, 4, -10, 4, -9]
// let cordsSet = new Set(cords) //집합으로 중복제거
// console.log(cordsSet)
let setCords = [...new Set(cords)] 
// console.log(setCords) [2, 4, -10, -9]
setCords.sort(function(a, b) {
  return a - b
})
// console.log(setCords) [-10, -9, 2, 4] 중복제거되고 오름차순정렬된배열 setCords
// for (let i = 0; i < caseNum; i++) {
//   cords[i] = setCords.indexOf(cords[i]) // ************여기서 시간복잡도 N^2이라고보면 시간초과 나는듯 indexOf 대신 이분탐색 ?
// }
*/

//이분탐색으로 배열내에서 index찾기
/*
let arr = [1, 4, 6, 8, 9, 11]
let value = 11
let length = arr.length //6
let minIn = 0 //0
let maxIn = length - 1 //5
let midIn = Math.floor((minIn + maxIn) / 2)
console.log(minIn, midIn, maxIn)

while(arr[midIn] != value) {
  if (arr[midIn] < value) { //찾는 요소가 오른쪽에있음
    minIn = midIn + 1 // 처음에 minIn = midIn, maxIn = midIn으로 했다가 무한 루프
    midIn = Math.floor((minIn + maxIn) / 2)
    console.log(minIn, midIn, maxIn)
  } else {
    maxIn = midIn - 1
    midIn = Math.floor((minIn + maxIn) / 2) 
    console.log(minIn, midIn, maxIn)
  }
}
console.log(`${value} 의 index는 ${midIn}`)
*/


//위의 이분탐색 base로 indexof부분대신 넣어줌
/*
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let caseNum = Number(input[0])
let cords = input[1].split(' ').map(Number) //입력 좌표 배열
let setCords = [...new Set(cords)]
setCords.sort(function(a, b) {
  return a - b
})
for (let i = 0; i < caseNum; i++) {
  let minIn = 0
  let maxIn = setCords.length - 1
  let midIn = Math.floor((minIn + maxIn) / 2)
  while (setCords[midIn] != cords[i]) {
    if (setCords[midIn] < cords[i]) {
      minIn = midIn + 1
      midIn = Math.floor((minIn + maxIn) / 2)
    } else {
      maxIn = midIn - 1
      midIn = Math.floor((minIn + maxIn) / 2)
    }
  } 
  cords[i] = midIn
}
let result = ""
for (x of cords) {
  result += `${x} `
}
console.log(result)
*/


// 24 / 8 / 24

const fs = require('fs')
const input = fs.readFileSync('../input.txt').toString().trim().split('\n')
const [n, cords] = input
const arr = cords.split(' ').map(Number)

const set = new Set(arr)
const setArr = Array.from(set)
setArr.sort((a, b) => a - b)
console.log(arr);
console.log(setArr);
const grade = setArr.reduce((dic, el, idx) => {
  dic[el] = idx
  return dic
}, {})
console.log(grade);
for(let i = 0; i < n; i++) {
  arr[i] = grade[arr[i]]
}
console.log(arr);