//문제 7번 신입사원 1946번 왜틀림 슬라이싱 하는 방식바꾸고, 객체 아닌 배열 하지만 아마도 rest만드는 과정에서 메모리 초과발생하는듯함
/*
let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let caseNum = Number(input[0])  //2 
let indexes = []
for (let i = 1; i < input.length; i++) { // input에서 각케이스 크기의 index추출
  if (input[i].indexOf(" ") == -1) {
    indexes.push(i)
  }
} 
for (let i = 0; i < caseNum; i++) { // 각표본 slice후 빈배열에 추가,caseNum 만큼 반복
  let start = indexes[i] + 1
  let end = start + Number(input[indexes[i]])
  let arr = []
  let data = input.slice(start, end)
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i].split(" ").map(Number))
  }
  arr.sort(function(a, b) {
    return a[0] - b[0]
  })
  let cnt = 0 
  let minRank = 100001
  for ([a, b] of arr) {
    if (b < minRank) {
      minRank = b
      cnt += 1
    }
  }
  console.log(cnt)
}
*/


/*let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])  //2 
let line = 1 
for (let i = 0; i < caseNum; i++) { 
  n = Number(input[line])
  let arr = []
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number)
    arr.push(data)
  }
  arr.sort(function(a, b) {
    return a[0] - b [0] 
  })
  console.log(arr)
  let cnt = 0
  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(0, i)
    let fail = false
    console.log(rest)
    for (let j = 0; j < rest.length; j++) {
      if (arr[i][1] > rest[j][1]) { //현재 자신의 면접순위가 나머지 사원들의 면접순위보다 낮을경우 탈락처리 이방법은 너무 비효율적임 > 최소순위를 기준으로삼고 비교하며 갱신하면 된다
        fail = true
        break
      }  
    }
    if (fail == false) {
      cnt += 1
    }
  }
  console.log(cnt)
  line += n + 1
}
*/


/*let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
// console.log(caseNum)
let indexes = []
for (let i = 1; i < input.length; i++) { //input 순회하면서 크기(길이가 1인걸로 구분) 추출
  if (input[i].length == 1) {
    indexes.push(i)
  }
}
console.log(indexes)
for (let i = 0; i < caseNum; i++) {
  let start = indexes[i] + 1
  let end = start + Number(input[indexes[i]])
  let sample = input.slice(start, end)
  console.log(sample)
  let emps = []
  for (let i = 0; i < sample.length; i++) {
    let emp = {}
    emp.doc = sample[i].split(' ').map(Number)[0]
    emp.intv = sample[i].split(' ').map(Number)[1]
    emps.push(emp)
  }
  // console.log(emps)
  emps.sort(function(a, b) {
    return a.doc - b.doc
  })
  console.log(emps)
  let cnt = 0
  for (let i = 0; i < emps.length; i++) { // emps 순회 
    let rest = emps.slice(0, i)
    console.log(`${i} 번째사원 doc${emps[i].doc}intv${emps[i].intv}에대한 rest는 `)
    console.log(rest)
    let fail = false
    for (let j = 0; j < rest.length; j++) { //rest순회
      console.log(`${i}번째 사원의 rest 중${j}번째의 intv ${rest[j].intv}`)
      if (emps[i].intv > rest[j].intv) { // 자신의 intv 순위 > 나머지의 각intv순위
        console.log(`자신의 intv${emps[i].intv} 나머지의intv${rest[j].intv}로 순위더낮으로 탈락 `)
        console.log(emps[i], rest[j],'\n')
        fail = true
        break
      }  
    }
    if (fail == false) {
      cnt += 1
      console.log(`현재 합격자 ${cnt}명\n`)
    }
  }
  console.log(cnt)
}
*/


/*let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0]) // testcase 의 개수 2
let indexes = []
for (i = 1; i < input.length; i++) {
  if (input[i].length == 1) {
    let empNum = input.indexOf(input[i])
    indexes.push(empNum)
  }
}
// console.log(indexes) // [1, 7]
for (let i = 0; i < caseNum; i++) { // i = 0,1
  let start = indexes[i] + 1
  // console.log(start)
  let end = start + Number(input[indexes[i]])
  // console.log(end)
  let samp = input.slice(start, end)
  // console.log(samp)
  let emps = []
  for(let i = 0; i < samp.length; i++) {
    let emp = {}
    emp.doc = samp[i].split(' ').map(Number)[0]
    emp.intv = samp[i].split(' ').map(Number)[1]
    emps.push(emp)
  }
// console.log(emps)
  emps.sort(function(a, b) {
    return a.doc - b.doc
  })
  let cnt = 0
  for (let i = 0; i < emps.length; i++) {
    let com = emps.slice(0, i)
    // console.log(com)
    let fail = false
    for (let j = 0; j < com.length; j++) {
    // if (emps[i].i 
      if (emps[i].intv > com[j].intv) {
        fail = true
        break
      }
    }
    if (fail == false) {
      cnt += 1
    }
  }
  console.log(cnt)
}
*/


/* 얘는 안틀릴줄알앗는데 ;;
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let start;
let end;
for (let i = 1; i < input.length; i++) {
  if (input[i].length == 1) {
    start = i + 1 //2
    end = start + Number(input[i]) //7
    let sample = input.slice(start, end)
    // console.log(sample)
    let emps = []
    for (let i = 0; i < sample.length; i++) {
      let emp = {}
      emp.doc = sample[i].split(' ').map(Number)[0]
      emp.intv = sample[i].split(' ').map(Number)[1]
      emps.push(emp)
    }
    // console.log(emps)
    emps.sort(function(a, b) {
      return a.doc - b.doc
    })
    // console.log(emps)
    let cnt = 0
    for (let i = 0; i < emps.length; i++) {
      let rest = emps.slice(0, i)
      // console.log(rest)
      let fail = false
      for (let j = 0; j < rest.length; j++) {
        if (emps[i].intv > rest[j].intv) {
          fail = true
          break
        }  
      }
      if (fail == false) {
        cnt += 1
      }
    }
    console.log(cnt)
  }
  //let sample = input.slice(start, end) 길이가 1이아닌 부분 읽으면 start,end정의안돼서 못읽을듯 
}
*/


/* 모든 값 console찍어봤을때 이상없음 이제보니깐 caseNum = 2를 안씀 
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().trim().split('\n')
let caseNum = Number(input[0])
console.log(caseNum)
let start = 0;
let end = 0;
for (let i = 1; i < input.length; i++) {
  if (input[i].length == 1) {
    start = i + 1 
    end = start + Number(input[i])
    let sample = input.slice(start, end)
    // console.log(sample)
    let emps = []
    for (let i = 0; i < sample.length; i++) {
      let emp = {}
      emp.doc = sample[i].split(' ').map(Number)[0]
      emp.intv = sample[i].split(' ').map(Number)[1]
      emps.push(emp)
    }
    // console.log(emps)
    emps.sort(function(a, b) {
      return a.doc - b.doc
    })
    console.log(emps)
    let cnt = 0
    for (let i = 0; i < emps.length; i++) { // emps 순회 
      let rest = emps.slice(0, i)
      console.log(`${i} 번째사원 doc${emps[i].doc}intv${emps[i].intv}에대한 rest는 `)
      console.log(rest)
      let fail = false
      for (let j = 0; j < rest.length; j++) { //rest순회
        console.log(`${i}번째 사원의 rest 중${j}번째의 intv ${rest[j].intv}`)
        if (emps[i].intv > rest[j].intv) { // 자신의 intv 순위 > 나머지의 각intv순위
          console.log(`자신의 intv${emps[i].intv} 나머지의intv${rest[j].intv}로 순위더낮으므로 탈락 `)
          console.log(emps[i], rest[j],'\n')
          fail = true
          break
        }  
      }
      if (fail == false) {
        cnt += 1
        console.log(`현재 합격자 ${cnt}명\n`)
      }
    }
    console.log(cnt)
  }
}
//intv${emps[i].intv}    30번줄 , 자리
*/

//두번째 시도 8/5 개귀찮은 문제 정렬된 사원배열에서 자신보다 상위사원들 한번더 순회할때 이중 반복문쓰면 시간복잡도 N^2이기에 시간초과 
let fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
let caseNum = Number(input[0]) 
let endIndex = 1
for (let i = 0; i < caseNum; i++) { //3개의 테스트케이스, 최대합격자수 출력
  let startIndex = endIndex + 1
  endIndex = startIndex + Number(input[endIndex])
  let strPool = input.slice(startIndex, endIndex)
  let pool = strPool.map((value) => value.split(' ').map(Number))
  let cnt = 0
  pool.sort(function(a, b) { // a,b = '3 2', '1 4'
    return a[0] - b[0]
  })
  let minGrade = 100001
  for (let i = 0; i < pool.length; i++) { //서류순위로 정렬된사원순회 여기서 시간복잡도 N^2이 아니라 N으로 품 > 최솟값찾고, 그냥 읽으면서 비교해도 합격자수 계산          
    if (pool[i][1] < minGrade) {
      minGrade = pool[i][1]
      // console.log(minGrade)
      cnt += 1
    }
  }
  console.log(cnt)
  /* 시간복잡도가 N^2이라 안됌
  for (let i = 0; i < pool.length; i++) { //서류순위로 정렬된사원순회
    // console.log(`currentpool : ${pool[i]}`)
    let pass = true
    for (let j = 0; j < i; j++) { //자신보다 서류순위 상위인사람과 면접순위비교  
      // console.log(`rival : ${pool[j]}`)
      if (pool[i][2] > pool[j][2]) {
        // console.log(`rival ${pool[j]} 에게 패배`)
        pass = false
        break
      }
    }
    if (pass) {
      cnt += 1
    }
  }
  */
}