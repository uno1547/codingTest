const btn = document.querySelector(".btn")
btn.addEventListener("click", function(){
  el.style.baeckgroundcolor = 'red'
})
//기본적인 반복문
function loop () {
  let sum = 0 
for(i = 0; i < 5; i++) {
  sum += i
}
}
console.log(sum)
//readline 모듈
function readl() {
const rl = require('readline').createInterface({
  input: process.stdin, 
  output: process.stdout
});
let input = [];
rl.on('line', function(line) {
// 콘솔 입력 창에서 출바꿈(Enter)를 입력할 때마다 호출
input.push(line);
}).on('close', function () {
//콘솔 입력 창에서 Ctrl + C 혹은 ctrl + D를 입력하면 호출(입력의 종료)
console.log(input);
process.exit();
})
}
//두정수 입력받은후 A+B를 출력하시오 성공!!!
function num2 () {
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split(' ')//파일읽고 문자열변환후 공백기준 split input = ['3','4']
  let sum = Number(input[0])+Number(input[1])
  console.log(sum)
}
//문제 3번(10098)
function num3 () {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split(' ')
  let multiply = Number(input[0]) * Number(input[1])
  console.log(multiply)
}
//문제 4번(10869)
function num4() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split(' ')
  let a = Number(input[0])
  let b = Number(input[1])
  console.log(a + b)
  console.log(a - b)
  console.log(a * b)
  console.log(Math.floor(a / b))
  console.log(a % b)
}
//문제 5번(2588) 틀림 
function num5() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n') // input = ['471','385']
  let a = Number(input[0])
  let b = Number(input[1])
  let nums = input[1].split('') //nums = ['3','8','5']
  let sum1 = a * Number(nums[2]) //
  let sum2 = a * Number(nums[1]) //
  let sum3 = a * Number(nums[0]) //
  let totalSum = sum1 + (sum2 * 10) + (sum3 * 100)
  console.log(sum1)
  console.log(sum2)
  console.log(sum3)
  console.log(totalSum)
}
//문제 6번(9498) 성공
function num6() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString() // input = "300"
  let score = Number(input) //score = 300
  if(score >= 90 && score <= 100) {
    console.log('A')
  }else if(score >= 80 && score <=89) {
    console.log('B')
  }else if(score >= 70 && score <= 79) {
    console.log('C')
  }else if(score >= 60 && score <= 69) {
    console.log('D')
  }else {
    console.log('F')
  }
}
//문제 7번(2884) 성공
function num7() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split(' ') // 입력 10 10, 0 10
  let H = Number(input[0])
  let M = Number(input[1])
  if(M >= 45) {
    console.log(H, M - 45)
  } else { 
    if(H == 0) {
      console.log(23, 60 + (M - 45))
    } else {
      console.log(H - 1, 60 + (M -45))
    }
  }
}
//문제 8번(2525) 성공!!
function num8() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n') // input = ['14 30', '20']
  let startTime = input[0].split(' ')
  let startHour = Number(startTime[0]) // 14
  let startMinute = Number(startTime[1]) // 30
  let cookTime = Number(input[1]) //20
  let minuteSum = startMinute + cookTime // 50, 
  let addHour = parseInt(minuteSum / 60)
  let addMinute = minuteSum % 60
  if(startHour + addHour >= 24) {
    console.log(startHour + addHour - 24, addMinute)
  } else {
    console.log(startHour + addHour, addMinute)
  }
}
//문제 9번(2480) 성공!! 오래걸림
function num9() {
  let fs = require('fs')
  let input2 = fs.readFileSync('/dev/stdin').toString().split(' ') //input = ['3','3','6']
  let nums = [Number(input2[0]), Number(input2[1]), Number(input2[2])] 
  if (nums[0] == nums[1] && nums[1] == nums[2]) { //셋다같을때
    console.log(10000 + nums[0] * 1000)
  } else if (nums[0] == nums[1] || nums[1] == nums[2] || nums[0] == nums[2]) { //셋다같은건 위에서 체크하고 조건체크 끝
     /* 
     1 1 3
     3 1 1
     1 3 1 
     */ 
    let dupNum = nums.filter(function(item, index) {
      return nums.indexOf(item) != index
    })[0]
    console.log(1000 + dupNum * 100)
  } else {
    let maxNum = Math.max(nums[0], nums[1], nums[2])
    console.log(maxNum * 100)
  }
}
/* 배열내에서 중복된요소 찾는법
const ages = [32, 33, 16, 40]; // filter메소드 함수검사 만족하는 값을 리스트로 반환
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
****첫번째 중첩반복문
let ages = [5, 6, 8, 1, 6] //이해됨 중첩반복문으로 확인
for(i = 0; i < ages.length; i++) {
  for(j = 0; j < ages.length; j++) {
    if(i != j) {
      if (ages[i] == ages[j]) {
        return true
      }
    }
  }
}
return false 
****두번째 filter메소드
let ages = [1, 2, 1, 3, 4, 3, 5] 
let duplicateEls = ages.filter((item, index) => 
ages.indexOf(item) != index) 중복되어 나오는 요소 ex index2인1 일때 ages.indexOf(1) 은 0이나오므로 2와달라 조건만족 > 반환 
console.log(duplicateEls)
 */
//문제 10번 (8393) 성공!!
function num10() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString()
  let n = Number(input)
  let sum = 0
  for(i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum)
}
//문제 11번 (2739)
function num11() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString()
  let n = Number(input)
  for(i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`)
  }
}
//문제 12번 (2438)
function num12() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString()
  let n = Number(input)
  for (i = 1; i <= n; i++) {
    let str = ""
    for(j = 1; j <= i; j++) {
      str += "*"
    }
    console.log(str)
  }
}
//문제 13번 (15552) 빠른 출력사용하기
function num13() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n')
  let time = Number(input[0])
  let sum = ""
  for (i = 1; i <= time; i++) { //5번반복 1,2,3,4,5
    let lines = input[i].split(' ') // lines = ['1', '1']
    let eachsum = 0
    for (j = 0; j < lines.length; j++) {//굳이 반복문안쓰고 Num(line[0] + Num(line[1]
      eachsum += Number(lines[j])
    }
    sum += eachsum + '\n'
  }
  console.log(sum)
  }
//문제 14번 (10818)
function num14why() {
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let arr = input[1].split(' ') // arr = ['1', '2', '5', '7', '6']
for (i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i])
} //arr = [1, 2, 5, 7, 6]
arr.sort(function(a, b) {return a - b})
console.log(arr[0], arr[4])
}
/*
function num14() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n')
  
}
*/
/*이거 왜틀린건지 이해가안됌 sort 쓰는게 틀렸다는건가 결과는 잘나오는디 
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let arr = input[1].split(' ') // arr = ['1', '2', '5', '7', '6']
for (i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i])
} //arr = [1, 2, 5, 7, 6]
arr.sort(function(a, b) {return a - b})
console.log(arr[0], arr[4])
*/
//음 채점하는데 상당히 오래걸림 시간초과느낌 밑이 정답
function num14() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n')
  let arLength = Number(input[0])
  let arr = input[1].split(' ')
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i])
  }
  let minValue = 1000001
  let maxValue = -1000001 
  for (i = 0; i < arLength; i++) {
    if(arr[i] > maxValue) {
      maxValue = arr[i]
    }if(arr[i] < minValue) { //이거 else if 했는데 틀림 왜지 if//if 와 if//else if의차이
      minValue = arr[i]
    }
  }
  console.log(minValue, maxValue)
}
/*음 받은 input[1]문자열 배열을 숫자배열로 바꾸고싶다
let array = ['1', '2', '5', '8']
for (i = 0; i < array.length; i++) {
  array[i] = Number(array[i])
}
*/
/*배열(순서섞인 숫자배열)을 크기순으로 정렬하는 함수 만들기
let array = [4, 6, 8, 20, 1]
let max = 0
for(i = 0; i < array.length; i++) {
  if(max )
}

*/
//문제 15번 (2562)
function num15() {
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n')
  let inputLength = input.length
  for(i = 0; i < inputLength; i++) {
    input[i] = Number(input[i])
  }
  let maxValue = -1
  let minValue = 101
  for(i = 0; i < inputLength; i++) {
    if(input[i] > maxValue) {
      maxValue = input[i]
    }
    if(input[i] < minValue) {
      minValue = input[i]
    }
  }
  console.log(maxValue)
  console.log(input.indexOf(maxValue)+1)
}
function num152() { //이것도맞음
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  let nums = input.map(Number)
  console.log(nums)
  let max = 101
  let maxValue = 0
  for(i = 0; i < nums.length; i++) {
    if(nums[i] < max) {
      if(nums[i] > maxValue){
        maxValue = nums[i]
      }
    }
  } 
  console.log(maxValue, nums.indexOf(maxValue)+1)
}
function num153 () { //크으으 이런방법이
  let fs = require('fs')
  let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
  let maxValueIndex = 0
  let maxValue = 0
  for (i = 0; i < input.length; i++) {
    if(input[i] > maxValue) {
      maxValueIndex = i
      maxValue = input[maxValueIndex]
    }
  }
  console.log(maxValue, maxValueIndex+1)
}
//문제 16번 (3052) 왜틀린지모르겟네 ㅋㅋㅋ 
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n') 
let inputLength = input.length
for(i = 0; i < inputLength; i++) {
  input[i] = Number(input[i])
}//input = [1,2,3,4,5,6,7,8,9,10]
let remainders = input.map((el) => el % 42)
console.log(remainders) // [0,0,1,0,0]
//나머지배열 완료, but 중복된 나머지있을경우 처리해줘야함
let newArr = []
for(i = 0; i < remainders.length; i++) {
  !(newArr.includes(remainders[i])) ? newArr.push(remainders[i]) : ""
}
console.log(newArr.length)
function num162 () {
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n').map(Number)
  console.log(input)
  let remainders = []
  for (i = 0; i < input.length; i++) {
    remainders.push(input[i] % 42)
  }
  console.log(remainders)
  let censored = []
  for (i = 0; i < remainders.length; i++) {
    if (!(censored.includes(remainders[i]))){
      censored.push(remainders[i])
    }
  }
  console.log(censored.length)
}
function num17() {
  // let fs = require('fs')
  // let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
  // let grades = input.map(el => Number(el)) 
  // let grades = input.map(Number) NaN나와서 곤란 
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  // console.log(input)
  for(i = 1; i < input.length; i++) { //여기부분이문제인듯
    // console.log(input[i])
    let eachCase = input[i].split(' ').map(Number) // 각케이스 리스트형식으로 
    // console.log(eachCase)
    let nums = eachCase[0]
    let sum = 0
    for(j = 1; j <= nums; j++) {
      sum += eachCase[j]
    // console.log(`${j} 번째합 ${sum}`)
    }
    let avg = sum / nums
    // console.log(avg)
    let count = 0
    for(j = 1; j <= nums; j++) {
      if(eachCase[j] > avg) {
        count += 1
      }
    }
    let ratio = count / nums * 100
    console.log(`${ratio.toFixed(3)}%`)
  }
}
function num18() { //성공 !! reduce함수
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  // console.log(input) 
  let nums = Number(input[0]) // 과목수
  let scores = input[1].split(' ').map(Number) // scores = [40, 80, 60]
  // console.log(scores) 
  maxValue = scores.reduce((a,b) => Math.max(a, b))//maxValue = 80
  // console.log(maxValue)
  let newScores = scores.map(x => x / maxValue * 100) //newScores = [50, 100, 75]
  // console.log(newScores)
  let sum = 0 
  for(i = 0; i < nums; i++) {
    sum += newScores[i]
  }
  console.log(`${sum / nums}`)
}
function num19() { //성공!!
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  console.log(input)
  let num = Number(input[0])
  console.log(num)
  let nums = input[1].split('').map(Number)
  console.log(nums)
  let sum = 0 
  for(i = 0; i < num; i++) {
    sum += nums[i]
  }
  console.log(sum)
}
function num20() { //성공
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  // console.log(input)
  let caseNum = Number(input[0]) //caseNumb = 2
  // console.log(caseNum)
  for (i = 1; i <= caseNum; i++) {
  // console.log(input[i])
  // console.log(i)
    let data = input[i].split(' ')
  // console.log(data)
    let repeatNum = Number(data[0])
    let strings = data[1]
    let newString = ""
    for (x of strings) {
      for (j = 0; j < repeatNum; j++) {
        newString += x
      }
    }
    console.log(newString)
  }
}
function num21() {//성공
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split(' ')
  console.log(input)
  let constStrings = []
  for (i = 0; i < input.length; i++) {
    let strings = input[i]
    console.log(strings) //734, 893
    let constStr = "" + strings[2] + strings[1] + strings[0]
    constStrings.push(constStr)
  }
  console.log(constStrings)
  let nums = constStrings.map(Number)
  console.log(nums)
  let max = nums.reduce((a, b) => Math.max(a, b))
  console.log(max)
}
function num22() { //성공이라해도되나싶을정도로 오래걸림 ;; 
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().split('\n')
  // console.log(input)
  let caseNum = Number(input[0]) // caseNum = 3
  let groupNum = 0 
  for(i = 1; i <= caseNum; i++) {
    let data = input[i]
    // console.log(data)
    let indexes = []
    let isGroup = true
    for(j of data) {
      // console.log(j, data.indexOf(j))
      indexes.push(data.indexOf(j))
    }
    // console.log(indexes)
    for(k = 0; k < indexes.length - 1; k++) {
      // console.log(indexes[k], indexes[k + 1])
      if(indexes[k] > indexes[k + 1]) {
        isGroup = false
        // console.log(`falsefrom${indexes[k]}${indexes[k + 1]}`)
      }
    }
    isGroup ? groupNum += 1 : ""
  }
console.log(groupNum)
function num23 () { //실패후 성공
  let fs = require('fs')
  let input = fs.readFileSync('input.txt').toString().trim().split(' ')
  console.log(input)
  if(input.length == 1 && input[0] == "") {
    console.log(`length 1이고 ${input[0]} 출력`)
  }
  else {
    console.log(input.length)
  }
}
// let strings = ['a', 'b', 'c', 'a', 'b',' b']
// let indexes = strings.map((value, index) => strings.indexOf(value))
// console.log(indexes)
// let arr1 = [0, 1, 2, 2, 4]
// let arr2 = [0, 0, 2, 2, 0, 0]
// let arr3 = [0, 1, 2, 3]
// // arr1.reduce((a, b) => a + b)
// for(let i = 0; i < arr1.length - 1; i++) {
//   console.log(arr1[i], arr1[i + 1])
// }
}
/* array.map(par) par의 함수 형태에따라 선언,익명,화살표 다가능한듯해보임
let input = [1,2,3,4,5]
let newArr = input.map(myFunction)
function myFunction(el) {
  return el % 2
}
let newArr2 = input.map(function(el){
  return el % 2
})
let newArr3 = input.map((el) => el % 3)
console.log(newArr)
console.log(newArr2)
console.log(newArr3)
*/
/*
let cutArr = []
let arr = [1,2,3,1,3,5] > [1,2,3,5]이되게
for(i = 0; i < arr.length; i++) {
  if(cutArr.includes(arr[i])) {

  } else {
    cutArr.push(arr[i])
  }
}
console.log(cutArr)

for(i = 0; i < arr.length; i++) {뭐야 간단한데 또돌아감
  for(j = 0; j < arr.length; j++) {
    if(i != j) { //자기자신제외한나머지원소들중
      if(arr[i] == arr[j]) { //arr에서 중첩된요소있을경우
        if(cutArr.includes(array[i])) { cutArr에있으면 안넣고
        } else { cutArr에없으면 push
          cutArr.push(arr[i])
        }
      }
    }
  }
}
*/