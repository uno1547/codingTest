//문제 10번 풍선맞추기 11509번 시간초과뜸
/*
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
let cnt = 0
while (arr.length != 0) {
  let maxHeight = Math.max(...arr) //5
  let maxIndex = arr.indexOf(maxHeight) //1
  let arrowHeight = maxHeight
  cnt += 1
  for (let i = maxIndex; i < n; i++) { 
    if (arr[i] == arrowHeight) { //화살이가다가 풍선만나면 풍선터트림()
      arrowHeight -= 1
      arr.splice(i, 1)
      i--
    } 
  }
}
console.log(cnt)
*/
/*
for (let i = maxIndex; i < arr.length; i++) {
  if (arrowHeight == arr[i]) { //화살높이 == 풍선높이 > 풍선터트리고,화살높이-1
    rmvIndex.push(i)
    console.log(`${i}번째 ${arr[i]}풍선 펑!`)
    arrowHeight -= 1
  }
}
for (i of rmvIndex) {
  console.log(i)
  arr.splice(i, 1)
}
console.log(arr)  
let cnt = 0
while (arr.length != 0) { // arr.length(전체풍선개수) == 0 일때까지 반복
  let maxHeight = Math.max(...arr)
  let maxIndex = arr.indexOf(maxHeight)
  let arrowHeight = maxHeight
  cnt += 1
  let rmvIndex = []
  for (let i = maxIndex; i < arr.length; i++) {
    if (arrowHeight == arr[i]) { //화살높이 == 풍선높이 > 풍선터트리고,화살높이-1
      // arr.pop(arr[i])
      rmvIndex.push(i)
      console.log(`${i}번째 ${arr[i]}풍선 펑!`)
      arrowHeight -= 1
    } 
  }
}

let cnt = 0
while (arr.length != 0) {
  let maxHeight = Math.max(...arr) //5
  let maxIndex = arr.indexOf(maxHeight) //1
  let arrowHeight = maxHeight
  cnt += 1
  console.log(`${cnt} 번째 화살`)
  for (let i = maxIndex; i < n; i++) { // 주어진 arr돌며 arrowHeight 이면 터트림 
    if (arr[i] == arrowHeight) {
      console.log(`${i}번째 ${arr[i]}펑!`)
      arrowHeight -= 1
      arr[i] = 0
    } 
  }
  console.log(`터진풍선들 과 남은자리${arr}`)
  for (let j = 0; j < arr.length; j++) { // 0포함된배열 돌면서 
    console.log(`${j}번째원소${arr[j]} 길이는${arr.length}`)
    if (arr[j] == 0) { //0 이있다면 제거 
      arr.splice(j, 1)
      console.log(`${j}번째 0지우면 ${arr}`)
      j--
    }
  }
  console.log(arr)
}
console.log(cnt)
while (arr.length != 0)  { // arr.length(전체풍선개수) == 0 일때까지 반복
  console.log(`남은풍선 ${arr}`)
  let maxHeight = Math.max(...arr)
  let maxIndex = arr.indexOf(maxHeight)
  let arrowHeight = maxHeight
  cnt += 1
  console.log(`${cnt}발째 화살`)
  for (let i = maxIndex; i < n; i++) {
  if (arrowHeight == arr[i]) { //화살높이 == 풍선높이 > 풍선터트리고,화살높이-1
    // arr.splice(arr.indexOf(arr[i]), 1) index처리가 곤란해짐 splice할때마다 index가 재배열 되어서 
    console.log(arr)
    console.log(`${i}번째 ${arr[i]}풍선 펑!`)
    arr[i] = 0
    arrowHeight -= 1
    console.log(`화살높이 ${arrowHeight}`)
    } 
  }
  minHeight = Math.min(...arr)
*/

//두번째 시도 8/9일 성공!! 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let num = Number(input[0])
let ballons = input[1].split(' ').map(Number)
console.log(num, ballons) //[2,1,5,4,3]
let maxIndex = 0
let cnt = 0
let done = false
while (!done) {
  for (let i = 0 ; i < num; i++) {
    if (ballons[i] > ballons[maxIndex]) {
      maxIndex = i
    }
  } // 최대높이의 index추출, 최대고도에서 화살발사
  cnt += 1
  console.log(`${cnt}번째 화살`)
  let arrowHeight = ballons[maxIndex] //5
  for (let j = maxIndex; j < num; j++) {// 최대높이의 풍선의 index 부터 오른쪽 배열 살펴보고 연속으로 터트리게해야함
    if (arrowHeight == ballons[j]) {
      ballons[j] = 0
      arrowHeight -= 1
    }
  }
  console.log(ballons)
  done = ballons.every((value) => value == 0)
}
console.log(cnt)